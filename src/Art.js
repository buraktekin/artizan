import React, { createRef } from "react"
import _ from "lodash"
import "semantic-ui-css/semantic.min.css"
import { Grid, Ref, Sticky, Image, Segment } from "semantic-ui-react"

import ArtCard from "./ArtCard"
import ArtHeader from "./ArtHeader"
import ArtWork from "./ArtWork"

export default class Art extends React.Component { 
  contextRef = createRef()

  constructor(props) {
    super(props)
  }

  render() {
    const collection = this.props.collection
    const header = _.pick(
      this.props.collection, 
      ["objectURL", "objectBeginDate", "objectEndDate", "title"]
    )
    const artwork = _.pick(
      this.props.collection, 
      ["objectURL", "primaryImage", "primaryImageSmall"]
    )
    
    return(
      <Grid divided="vertically">
        <Grid.Row columns={collection.device==="Mobile" ? 1 : 2}>
          <Grid.Column verticalAlign="middle" stretched>
            <ArtWork artwork={artwork} />
          </Grid.Column>
          <Grid.Column stretched>
            <Ref innerRef={collection.device==="Mobile" ? null : this.contextRef}>
              <Segment stackeds="true">
                <Sticky context={this.contextRef} pushing>
                    <ArtHeader header={header} />
                    <ArtCard collection={collection}/>
                </Sticky>
              </Segment>
            </Ref>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}