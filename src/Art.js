import React, { createRef } from "react"
import ErrorBoundary from "./ErrorBoundary";
import 'semantic-ui-css/semantic.min.css'
import { Grid, Rail, Header, Ref, Sticky, Image, Segment } from "semantic-ui-react";

import ArtCard from "./ArtCard";

export default class Art extends React.Component { 
  contextRef = createRef()

  constructor(props) {
    super(props)
    const {
      image,
      title,
      department,
      type,
      artist,
      artistNationality,
      artistBday,
      artistDeath,
      artCreatedAt,
      artCreationStart,
      artCreationEnd,
      artMedium,
      artDimensions,
      artCreditLine,
      artCountry,
      artRegion,
      artFoundIn,
      artType,
      artlastUpdate,
      artOriginURL,
      artTags
    } = props
  }

  render() {
    return(
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column verticalAlign="middle" width="11" stretched>
            <a href={this.props.artOriginURL}>
              <Image src={this.props.image} wrapped centered/>
            </a>
          </Grid.Column>
          <Grid.Column width="5" stretched>
            <Ref innerRef={this.contextRef}>
              <Segment>
                <Rail>
                  <Sticky context={this.contextRef} pushing>
                    <div className="Art">
                      <h2>{`${this.props.title} (${this.props.artCreationStart} - ${this.props.artCreationEnd})`}</h2>
                      <ArtCard 
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
                </Rail>
              </Segment>
            </Ref>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}