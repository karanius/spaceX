import React, { useState } from "react";
import {
  Paper,
  Grid,
  Avatar,
  Divider,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import xSVG from "../assets/x.svg";

const useStyles = makeStyles((theme) => ({
  button: {
    position: "static",
    width: "125px",
    height: "42px",
    fontSize: "15px",
    letterSpacing: "0.3px",
    color: "#FFFFFF",
    backgroundColor: "#2196F3",
    marginRight: "24px",
  },
  avatar: {
    marginRight: "18px",
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  name: {
    marginRight: "15px",
    fontWeight: "500",
    fontSize: "20px",
  },
  cost: {
    width: "195px",
    height: "33px",
    display: "flex",
    alignItems: "center",
  },
  divider: {
    backgroundColor: "#0B79D0",
    marginRight: "20px",
  },
  description: {
    width: "400px",
    fontSize: "16px",
    fontWeight: "normal",
  },
}));

const Card = ({ data, index }) => {
  const [modalState, setModalState] = useState(false);
  const { links, rocket, launch_site } = data;
  const imageLink = links.flickr_images[0];
  const site = launch_site.site_name_long;
  const { cost_per_launch, description, name } = rocket.rocket;

  const handleClose = () => {
    setModalState(false);
  };
  const handleOpen = () => {
    setModalState(true);
  };

  const classes = useStyles();

  const ModalBody = () => {
    const useStyleModalBody = makeStyles({
      root: {
        transform: "translate(24%, 0%)",
      },
      paper: {
        position: "absolute",
        transform: "translate(0%, 30%)",
        backgroundColor: "#FFFFFF",
        width: "770px",
        height: "455px",
      },
      leftSide: {
        width: "295px",
        height: "455px",
        backgroundColor: "red",
        backgroundSize: "cover",
        background: `url(${imageLink})`,
      },
      rightSide: {
        position: "relative",
      },
      close: {
        position: "absolute",
        right: 30 + "px",
        top: -440 + "px",
        cursor: "pointer",
      },
      x: {
        marginRight: "10px",
        fontWeight: 500,
        fontSize: "15px",
        lineHeight: "26px",
        letterSpacing: "0.3px",
        textTransform: "uppercase",
        color: "rgba(0, 0, 0, 0.87)",
      },
      name: {
        position: "absolute",
        fontWeight: "normal",
        fontSize: "32px",
        lineHeight: "37px",
        width: "411px",
        left: "329px",
        top: "-400px",
      },
      site: {
        position: "absolute",
        left: "329px",
        top: "-360px",

        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "19px",
        letterSpacing: "0.03em",
        fontVariant: "small-caps",
      },
      title: {
        psotion: "absolute",
        left: "329px",
        top: "-360px",
        height: "16px",
        fontSize: "14px",
        lineHeight: "16px",
        textAlign: "center",
        letterSpacing: "0.03em",
        fontVariant: "small-caps",
        color: "#A7A7A7",
      },
    });

    const classes = useStyleModalBody();

    return (
      <div className={classes.root}>
        <Paper square={true} className={classes.paper}>
          <Grid container>
            <Grid item className={classes.leftSide} />
            <Grid item container className={classes.rightSide}>
              <div onClick={handleClose} className={classes.close}>
                <span className={classes.x}>CLOSE</span>
                <img alt="x" src={xSVG} />
              </div>
              <div className={classes.name}>{name}</div>
              <div className={classes.site}>{site}</div>
              <div>
                <span className={classes.title}>cost / launch</span>
              </div>
            </Grid>
          </Grid>
        </Paper>
        ;
      </div>
    );
  };

  return (
    <div
      style={{
        padding: "32px 32px 24px 32px",
        flex: 1,
      }}
    >
      <Grid container direction="row">
        <Avatar className={classes.avatar} alt={name} src={imageLink} />
        <Grid container style={{ flex: 1 }}>
          <Grid container item>
            <Grid className={classes.name} item>
              {name}
            </Grid>
            <Divider className={classes.divider} orientation="vertical" />
            <Grid className={classes.cost} item>
              {"$" + cost_per_launch / 1000000 + "m per launch"}
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item>
              <Typography className={classes.description} noWrap={true}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={handleOpen}
          disabled={index === 0 ? false : true}
        >
          MORE INFO
        </Button>
        <Modal open={modalState} onClose={handleClose}>
          <ModalBody />
        </Modal>
      </Grid>
    </div>
  );
};

export default Card;
