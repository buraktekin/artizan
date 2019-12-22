import React, { useState, useEffect } from 'react'
import { Container, Segment, Menu } from "semantic-ui-react";
import Art from "./Art";

function App() {
  const API_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"
  const [collection, setCollection] = useState([])
  const [artId, setArtId] = useState(88993)

  useEffect(() => {
    fetch(API_URL + artId)
    .then(res => res.json())
    .then(res => {
      if( !res.primaryImage && !res.primaryImageSmall ) {
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
    <Segment>
      <Container text>
        <Menu borderless>
          <Menu.Item name="logo">
            <img src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>
          <Menu.Item name="brand">
            <h1>Artizan</h1>
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
    </Segment>
  )
} 

export default App