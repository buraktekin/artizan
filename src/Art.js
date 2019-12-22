import React from "react"
import ErrorBoundary from "./ErrorBoundary";
import 'semantic-ui-css/semantic.min.css'
import { Grid, TextArea, Image } from "semantic-ui-react";

import ArtCard from "./ArtCard";

const Art = ((props) => {
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

  return(
    <Grid divided='vertically'>
      <Grid.Row stretched centered>
        <Grid.Column >
          <Image src={image} size="medium" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column floated="right" width="6">
          <div className="Art">
            <h4>{`${title} (${artCreationStart} - ${artCreationEnd})`}</h4>
            <ArtCard 
              type={type}
              artTags={artTags}
              artMedium={artMedium}
              artCreatedAt={artCreatedAt || ""}
              department={department}
              artist={artist}
              artistBday={artistBday || ""}
              artistDeath={artistDeath || ""}
              artistNationality={artistNationality || ""}
            />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
  })

export default Art