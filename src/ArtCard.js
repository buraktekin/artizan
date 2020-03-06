import React from "react";
import { Divider, Header, Icon, Table } from "semantic-ui-react";

import ArtTags from "./ArtTags";

const ArtCard = (props) => {
  const collection = props.collection
  return(
    <React.Fragment>
      {/* <Divider horizontal>
        <Header as='h4'>
          <Icon name='sliders horizontal' />
          Specifications
        </Header>
      </Divider> */}

      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2} className="col">Period</Table.Cell>
            <Table.Cell>{collection.objectDate || collection.period}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={2} className="col">Size</Table.Cell>
            <Table.Cell>{collection.dimensions}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="col">Department</Table.Cell>
            <Table.Cell>{collection.department}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="col">Materials</Table.Cell>
            <Table.Cell>{collection.medium}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="col">Culture</Table.Cell>
            <Table.Cell>{collection.culture}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="col">{`${collection.constituents.role || "Artist"}`}</Table.Cell>
            <Table.Cell>{`${collection.artistDisplayName}, ${collection.artistDisplayBio}`}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="col">Credits</Table.Cell>
            <Table.Cell>{collection.creditLine}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Tags</Table.Cell>
            <Table.Cell>
              <ArtTags image={collection.image} tags={collection.tags || []} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </React.Fragment>
  )
}

export default ArtCard