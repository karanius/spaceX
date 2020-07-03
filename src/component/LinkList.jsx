import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Card from "./Card";
import Divider from "@material-ui/core/Divider";

const FEED_QUERY = gql`
  {
    launches(limit: 3) {
      rocket {
        rocket {
          cost_per_launch
          name
          description
        }
      }
      links {
        flickr_images
      }
      mission_name
      launch_site {
        site_name_long
      }
    }
  }
`;

const CardGenerator = ({ data }) => {
  return data.map((dataSet, index) => {
    return (
      <>
        <Card key={index.toString()} data={dataSet} index={index} />
        {index > 1 ? null : (
          <Divider key={index.toString() + "div"} variant="middle" />
        )}
      </>
    );
  });
};

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>err</div>;
          const info = data.launches;
          return <CardGenerator data={info} />;
        }}
      </Query>
    );
  }
}

export default LinkList;
