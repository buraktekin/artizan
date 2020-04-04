import React from "react"
import _ from "lodash"
import { Grid, Segment } from "semantic-ui-react"

import ArtHeader from "./ArtHeader"
import ArtCard from "./ArtCard"
import ArtWork from "./ArtWork"
import ArtButtonGroup from './ArtButtonGroup'

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
      <Grid columns={2} divided centered stackable stretched>
        <Grid.Row>
          <ArtWork artwork={artwork} />
        </Grid.Row>
        <Grid.Row className='row--info'>
          <Segment className="infoWrapper" stackeds="true">
            <ArtButtonGroup objectID={collection.objectID} />
            <ArtHeader header={header} />
            <ArtCard collection={collection} />
          </Segment>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Art