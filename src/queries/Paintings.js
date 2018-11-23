import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
const Paintings = () => (
  <Query
    query={gql`
      {
        paintings {
          id, name, url, techniques
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.paintings.map(({ id, name, url, techniques }) => (
        <div key={id}>
          <a href={url}>{`${name} by ${techniques}`}</a>
        </div>
      ));
    }}
  </Query>
);
export default Paintings;