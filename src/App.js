import React, { useState, useEffect } from 'react'
import { 
  Container, 
  Grid, 
  Segment, 
  Loader,
  Dimmer,
  Menu
} from "semantic-ui-react"
import _ from "lodash"
import Art from "./Art"
// import Logo from "../public/logo/artizan_logo.png"

function App() {
  const API_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"
  const [deviceType, setDeviceType] = useState("Desktop")
  const [collection, setCollection] = useState([])
  const [artId, setArtId] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(window.innerWidth > 992) {
      setDeviceType("Desktop")
    } else if (window.innerWidth > 768) {
      setDeviceType("Tablet")
    } else {
      setDeviceType("Mobile")
    }
  }, [])
  
  useEffect(() => {
    const artURL = API_URL + artId
    fetch(artURL)
    .then(res => res.json())
    .then(res => {
      if(!res.artistDisplayName || !res.title || !res.tags || !res.primaryImage) {
        setArtId(Math.floor(Math.random() * 500000) + 1)
      } else {
        res.device = deviceType
        setCollection(res)
        setIsLoading(false)
      }
    })
    .catch(err => console.error("Caught an error: ", err))
  }, [artId, deviceType])

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
      <Grid columns={1} divided padded>
        <Grid.Row>
          <Grid.Column>
            <div className="hero">
              <Menu borderless>
                <Menu.Item name="logo">
                  <a href="/">
                    <h3 className="brand">artizan</h3>
                  </a>
                </Menu.Item>
              </Menu>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Art collection={ collection } />
        </Grid.Row>
      </Grid>
    )
  }
}

export default App