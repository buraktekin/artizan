import React, { useState, useEffect } from 'react'
import { Container, Grid, Segment, Menu, Image } from "semantic-ui-react";
import Art from "./Art";
import Logo from "../public/logo/artizan_logo.png"

function App() {
  const API_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"
  const [collection, setCollection] = useState([])
  const [artId, setArtId] = useState(88993)

  useEffect(() => {
    fetch(API_URL + artId)
    .then(res => res.json())
    .then(res => {
      if( !res.tags || (res.artistDisplayName==="" && res.title==="") ||
        !res.primaryImageSmall && !res.primaryImage ) {
        setArtId(Math.floor(Math.random() * 500000) + 1)
      } else {
        setCollection(res)
      }
    })
    .catch(err => console.error("Caught an error: ", err))
  }, [artId])

  const {
    primaryImage,
    primaryImageSmall,
    additionalImages,
    department,
    objectName,
    title,
    artistDisplayName,
    artistNationality,
    artistBeginDate,
    artistEndDate,
    objectDate,
    objectBeginDate,
    objectEndDate,
    medium,
    dimensions,
    creditLine,
    country,
    region,
    locale,
    classification,
    metadataDate,
    objectURL,
    tags
  } = collection

  return(
    <Grid columns={1} divided padded>
      <Grid.Row stretched>
        <Grid.Column>
          <Container>
            <Menu borderless>
              <Menu.Item name="logo">
                <a href="/">
                  <Image src={Logo} size="tiny" alt="logo" />
                </a>
              </Menu.Item>
            </Menu>
            <Art
              image={
                primaryImageSmall || 
                primaryImage
              }
              title={title}
              department={department}
              type={objectName}
              artist={artistDisplayName}
              artistNationality={artistNationality}
              artistBday={artistBeginDate}
              artistDeath={artistEndDate}
              artCreatedAt={objectDate}
              artCreationStart={objectBeginDate}
              artCreationEnd={objectEndDate}
              artMedium={medium}
              artDimensions={dimensions}
              artCreditLine={creditLine}
              artCountry={country}
              artRegion={region}
              artFoundIn={locale}
              artType={classification}
              artlastUpdate={metadataDate}
              artOriginURL={objectURL}
              artTags={tags}
            />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
} 

export default App