import React from "react"
import ErrorBoundary from "./ErrorBoundary";
import 'semantic-ui-css/semantic.min.css'
import { Grid, TextArea } from "semantic-ui-react";

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
    <Grid divided='vertically' padded="horizontally">
      <Grid.Row columns={2} verticalAlign="middle">
        <Grid.Column textAlign="center">
          <img src={image} height='100%'/>
        </Grid.Column>
        <Grid.Column>
          <div className="Art">
            <h1>{`${title} (${artCreationStart} - ${artCreationEnd})`}</h1>
            <ArtCard 
              type={type}
              artTags={artTags}
              artCreatedAt={artCreatedAt || ""}
              department={department}
              artist={artist}
              artistBday={artistBday || ""}
              artistDeath={artistDeath || ""}
              artistNationality={artistNationality || ""}
            />
            <h3>{artMedium}</h3>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
  })

export default Art