import React, {Component} from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Paintings from '../queries/Paintings'
const PAINTING_MUTATION = gql`
    mutation SavePainting($name: String!, $url: String!, $techniques: [String]!) {
        savePainting(payload: {name: $name, url: $url, techniques: $techniques}) {
            name, url,
        },
    }
`;

class PaintingMutation extends Component {
  state = {
    name: '',
    url: '',
    techniques: [],
  }

  

  render() {
    const { name, url, techniques } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            required
            placeholder="Name of the painting"
          />
        
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            required
            placeholder="The URL for the link"
          />

          <input
            className="mb2"
            value={techniques}
            onChange={e => this.setState({ techniques: e.target.value })}
            type="text"
            required
            placeholder="Techniques of the painting"
          />
        </div>
        <Mutation mutation={PAINTING_MUTATION} variables={{name, url, techniques}} refetchQueries = {[{
        query: Paintings,
      }]}>
      {(savePainting, { data }) => {
        return (<button onClick={savePainting}>Save Paintings</button>)
      }}
    </Mutation>
      </div>
    )
  }
}

export default PaintingMutation;
