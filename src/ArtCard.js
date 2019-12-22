import React from "react";
import { Card, Button, Image } from "semantic-ui-react";

import ArtHeader from "./ArtHeader";

const ArtCard = (props) => {
  return(
    <Card.Group>
      <Card fluid>
        <Card.Content>
          <Card.Header>{props.artist}</Card.Header>
          <Card.Meta>
            {`${props.artistBday} - ${props.artistDeath}, ${props.artistNationality}`}
          </Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui' color="black">
          </div>
        </Card.Content>
        <Card.Content extra>
          <div className='ui'>
            <ArtHeader tags={ props.artTags || [] } />
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default ArtCard