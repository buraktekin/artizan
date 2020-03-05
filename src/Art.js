import React, { createRef } from "react"
import "semantic-ui-css/semantic.min.css"
import { Grid, Ref, Sticky, Image, Segment } from "semantic-ui-react"

import ArtCard from "./ArtCard";

export default class Art extends React.Component { 
  contextRef = createRef()

  constructor(props) {
    super(props)
  }

  render() {
    const collection = this.props.collection
    return(
      <Grid divided="vertically">
        <Grid.Row columns={collection.device==="Mobile" ? 1 : 2}>
          <Grid.Column verticalAlign="middle" stretched>
            <a href={collection.objectURL}>
              <Image src={collection.primaryImageSmall || collection.primaryImage} centered/>
            </a>
          </Grid.Column>
          <Grid.Column stretched>
            <Ref innerRef={collection.device==="Mobile" ? null : this.contextRef}>
              <Segment stackeds="true">
                <Sticky context={this.contextRef} pushing>
                  <div className="Art">
                    <a href={collection.objectURL}>
                      <h2>{`${collection.title} (${collection.objectBeginDate} - ${collection.objectEndDate})`}</h2>
                    </a>
                    <ArtCard collection={collection}/>
                  </div>
                </Sticky>
              </Segment>
            </Ref>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}