import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import SearchIcon from "@material-ui/icons/Search";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Tabs,
  Tab,
  Avatar,
  Button,
} from "@material-ui/core";
import { TabContext } from "@material-ui/lab";
import shuttleSVG from "./assets/Shuttle.svg";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import CreditCardIcon from "@material-ui/icons/CreditCard";
const svgContants = 1.3;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#E5E5E5",
  },
  toolbar: {
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #2196F3",
    boxShadow:
      "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  title: {
    height: "113px",
    display: "flex",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    background: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)",
  },
  drawerUpper: {
    fontSize: "14px",
    lineHeight: "21px",
    height: "90px",
    fontColor: "#373737",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  dashboard: {
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "32px",
    letterSpacing: "0.15px",
    flex: 1,
  },
  dashboardContainer: {
    height: "113px",
  },
  dashboardUpper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  dashboardBottom: {
    paddingLeft: "15px",
    flex: 1,
  },
  indicator: {
    backgroundColor: "white",
  },
  cardText: {
    position: "absolute",
    left: "274px",
    top: "154px",
    width: "713px",
    height: "33px",
    fontSize: "18px",
    lineHeight: "32px",
  },
  paperDimentions: {
    position: "absolute",
    width: "713px",
    height: "366px",
    left: "274px",
    top: "195px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #DFDFDF",
    boxSizing: "border-box",
    borderRadius: "9px",
    display: "flex",
    flexDirection: "column",
  },
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
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open] = React.useState(true);
  const fixedHeightPaper = clsx(
    classes.paper,
    classes.fixedHeight,
    classes.paperDimentions
  );

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <Grid container direction="column" className={classes.title}>
            <Grid container item className={classes.dashboardUpper}>
              <Grid item style={{ paddingLeft: "15px" }}>
                <Typography className={classes.dashboard}>Dashboard</Typography>
              </Grid>
              <Grid item style={{ paddingRight: "15px" }}>
                <SearchIcon />
              </Grid>
            </Grid>
            <Divider
              variant="middle"
              light={true}
              style={{ backgroundColor: "white", opacity: 0.2 }}
            />
            <Grid container item className={classes.dashboardBottom}>
              <TabContext>
                <Tabs
                  value={0}
                  classes={{
                    indicator: classes.indicator,
                  }}
                >
                  <Tab label="Rockets" index={0} />
                  <Tab label="Satellites" index={1} />
                </Tabs>
              </TabContext>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
        open={open}
      >
        {/* UPPER BANNER OF THE LEFT */}
        <Grid
          className={classes.drawerUpper}
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <img
              width={28.5 * svgContants + "px"}
              height={28.49 * svgContants + "px"}
              src={shuttleSVG}
              alt="shuttle"
            />
          </Grid>
          <Grid item>
            <span>Welcome,&nbsp;</span>
            <b style={{ color: "rgb(34, 154, 248)" }}>Ryan</b>
          </Grid>
        </Grid>
        <Divider />
        {/* LOWER PART OF THE LEFT */}
        <div style={{ paddingTop: "10px" }}>
          <List component="nav">
            <ListItem button selected={true}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText secondary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText secondary="Profile" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CreditCardIcon />
              </ListItemIcon>
              <ListItemText secondary="Subscription" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Grid container>
          <Grid item xs={12} md={8} lg={9}>
            <Typography className={classes.cardText}>Active Rockets</Typography>
            <Paper className={fixedHeightPaper}>
              <div
                style={{
                  padding: "32px 32px 24px 32px",
                  flex: 1,
                }}
              >
                <Grid container direction="row">
                  <Avatar
                    className={classes.avatar}
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                  <Grid container style={{ flex: 1 }}>
                    <Grid container item>
                      <Grid item>FALCON 1</Grid>
                      <Divider
                        style={{ backgroundColor: "#0B79D0" }}
                        orientation="vertical"
                      />
                      <Grid item>FALCON 1</Grid>
                    </Grid>
                    <Grid container item>
                      <Grid item></Grid>
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className={classes.button}
                  >
                    MORE INFO
                  </Button>
                  <Divider style={{ top: "calc(50% - 0px/2 + 0.5px)" }} />
                </Grid>
              </div>
              <Divider variant="middle" />
              <div
                style={{
                  padding: "32px 32px 24px 32px",
                  flex: 1,
                }}
              >
                <Grid container direction="row">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <div>description</div>
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className={classes.button}
                  >
                    MORE INFO
                  </Button>
                  <Divider style={{ top: "calc(50% - 0px/2 + 0.5px)" }} />
                </Grid>
              </div>
              <Divider variant="middle" />
              <div
                style={{
                  padding: "32px 32px 24px 32px",
                  flex: 1,
                }}
              >
                <Grid container direction="row">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <div>description</div>
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className={classes.button}
                  >
                    MORE INFO
                  </Button>
                  <Divider style={{ top: "calc(50% - 0px/2 + 0.5px)" }} />
                </Grid>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </main>
    </div>
  );
}
