import React, { useState, useEffect } from 'react'
import { 
  Container, 
  Grid, 
  Segment, 
  Loader,
  Dimmer,
  Menu,
  Image
} from "semantic-ui-react";
import Art from "./Art";
import Logo from "../public/logo/artizan_logo.png"

function App() {
  const API_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"
  const [deviceType, setDeviceType] = useState("Desktop")
  const [collection, setCollection] = useState([])
  const [artId, setArtId] = useState(88993)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(window.innerWidth > 992) {
      setDeviceType("Desktop")
    } else if (window.innerWidth > 768) {
      setDeviceType("Tablet")
    } else {
      setDeviceType("Mobile")
    }
  })
  
  useEffect(() => {
    fetch(API_URL + artId)
    .then(res => res.json())
    .then(res => {
      if(!res.artistDisplayName || !res.title || !res.tags || !res.primaryImage) {
        setArtId(Math.floor(Math.random() * 500000) + 1)
      } else {
        setCollection(res)
        setIsLoading(false)
      }
    })
    .catch(err => console.error("Caught an error: ", err))
  }, [artId])

  const {
    primaryImage,
    primaryImageSmall,
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

  if(isLoading){
    return(
      <Segment>
        <Dimmer active>
          <h1 className="brand">Artizan</h1>
          <Loader size='massive'>Loading next art piece...</Loader>
        </Dimmer>
      </Segment>
    )
  } else {
    return(
      <Container>
        <Grid columns={1} divided padded>
          <Grid.Row stretched>
            <Grid.Column>
                <Menu borderless>
                  <Menu.Item className="item__fluid" name="logo">
                    <a href="/">
                      {/* <Image src={Logo} size="tiny" alt="logo" /> */}
                      <h2 className="brand">artizan</h2>
                    </a>
                  </Menu.Item>
                </Menu>
                <Art
                  device={deviceType}
                  image={primaryImageSmall || primaryImage}
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
} 

export default App