import React, { createRef } from "react"
import "semantic-ui-css/semantic.min.css"
import { Grid, Ref, Sticky, Image, Segment, Responsive } from "semantic-ui-react"

import ArtCard from "./ArtCard";

export default class Art extends React.Component { 
  contextRef = createRef()

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Grid divided="vertically">
        <Grid.Row columns={this.props.device==="Mobile" ? 1 : 2}>
          <Grid.Column verticalAlign="middle" stretched>
            <a href={this.props.artOriginURL}>
              <Image src={this.props.image} wrapped centered/>
            </a>
          </Grid.Column>
          <Grid.Column stretched>
            <Ref innerRef={this.contextRef}>
              <Segment stackeds="true">
                <Sticky context={this.contextRef} pushing>
                  <div className="Art">
                    <h2>{`${this.props.title} (${this.props.artCreationStart} - ${this.props.artCreationEnd})`}</h2>
                    <ArtCard 
                      url={this.props.artOriginURL}
                      type={this.props.type}
                      image={this.props.image}
                      artTags={this.props.artTags}
                      artMedium={this.props.artMedium}
                      artDimensions={this.props.artDimensions}
                      artCreatedAt={this.props.artCreatedAt || ""}
                      artCreditLine={this.props.artCreditLine}
                      artCountry={this.props.artCountry}
                      department={this.props.department}
                      artist={this.props.artist}
                      artistBday={this.props.artistBday || ""}
                      artistDeath={this.props.artistDeath || ""}
                      artistNationality={this.props.artistNationality || ""}
                    />
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