import React, { createRef } from "react"
import _ from "lodash"
import "semantic-ui-css/semantic.min.css"
import { Grid, Segment, Container } from "semantic-ui-react"

import ArtHeader from "./ArtHeader"
import ArtCard from "./ArtCard"
import ArtWork from "./ArtWork"

export default class Art extends React.Component { 
  constructor(props) {
    super(props)
  }

  render() {
    const collection = this.props.collection
    const artwork = _.pick(
      this.props.collection, 
      ["objectURL", "primaryImage", "primaryImageSmall"]
    )
    const header = _.pick(
      collection, 
      ["objectURL", "objectBeginDate", "objectEndDate", "title"]
    )
    
    return(
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column verticalAlign="middle" width={16} stretched>
              <ArtWork artwork={artwork} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <div className="infoWrapper">
              <Segment stackeds="true">
                <ArtHeader header={header}/>
                <ArtCard collection={collection}/>
              </Segment>
            </div>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}