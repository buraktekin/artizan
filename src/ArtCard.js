import React from "react";
import { Card, Divider, Header, Icon, Table } from "semantic-ui-react";

import ArtHeader from "./ArtHeader";

const ArtCard = (props) => {
  return(
    <React.Fragment>
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='list alternate outline' />
          Description
        </Header>
      </Divider>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat.
      </p>

      <Divider horizontal>
        <Header as='h4'>
          <Icon name='sliders horizontal' />
          Specifications
        </Header>
      </Divider>

      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>Size</Table.Cell>
            <Table.Cell>{props.artDimensions}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Type</Table.Cell>
            <Table.Cell>{props.type}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Materials</Table.Cell>
            <Table.Cell>{props.artMedium}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Credits</Table.Cell>
            <Table.Cell>{props.artCreditLine}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Created/Found In</Table.Cell>
            <Table.Cell>{props.artCountry}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Artist</Table.Cell>
            <Table.Cell>{`${props.artist}, ${props.artistNationality}`}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Tags</Table.Cell>
            <Table.Cell>
              <ArtHeader image={props.image} tags={props.artTags || []} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </React.Fragment>
  )
}

export default ArtCard