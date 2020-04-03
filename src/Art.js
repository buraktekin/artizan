import React from "react"
import _ from "lodash"
import { Grid, Segment, Container } from "semantic-ui-react"

import ArtButtonGroup from './ArtButtonGroup'
import ArtHeader from "./ArtHeader"
import ArtCard from "./ArtCard"
import ArtWork from "./ArtWork"

const Art = (props) => {
  const { collection } = props
  const artwork = _.pick(
    collection,
    ["objectURL", "primaryImage", "primaryImageSmall"]
  )
  const header = _.pick(
    collection,
    ["objectURL", "objectBeginDate", "objectEndDate", "title"]
  )

  return (
    <>
      <Container text>
        <Grid columns={2} divided centered stackable stretched>
          <Grid.Row>
            <ArtWork artwork={artwork} />
            <ArtButtonGroup />
          </Grid.Row>
          <Grid.Row className='row--info'>
            <Segment className="infoWrapper" stackeds="true">
              <ArtHeader header={header} />
              <ArtCard collection={collection} />
            </Segment>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  )
}

export default Art