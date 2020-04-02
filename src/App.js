import React, { useState, useEffect, useRef } from 'react'
import { 
  Grid, 
  Segment, 
  Loader,
  Dimmer,
  Progress,
} from "semantic-ui-react"
import _ from "lodash"
import Art from "./Art"
import ArtMenu from "./Menu"
// import Logo from "../public/logo/artizan_logo.png"

function App() {
  const API_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"
  const [deviceType, setDeviceType] = useState("Desktop")
  const [isLoading, setIsLoading] = useState(true)
  const [collection, setCollection] = useState([])
  const [artId, setArtId] = useState(3288)
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    if(window.innerWidth > 992) {
      setDeviceType("Desktop")
    } else if (window.innerWidth > 768) {
      setDeviceType("Tablet")
    } else {
      setDeviceType("Mobile")
    }
  }, [])
  

  // fetch data
  useEffect(() => {
    const artURL = API_URL + artId
    fetch(artURL, {timeout: 5000}) // set response time to 5 sec.
      .then(res => res.json())
      .then(res => {
        // If prior fields are empty, rerun fetch process
        if(!res.tags || !res.title || !res.primaryImage) {
          setArtId(Math.floor(Math.random() * 500000) + 1)
        } else {
          res.device = deviceType
          setCollection(res)
          setIsLoading(false)
          setTimer(0)
        }
      })
      .catch(err => console.error("Caught an error: ", err))
  }, [artId, deviceType])


  // Set interval to tick and change progress bar value per sec.
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1)
    }, 100)

    // After 10secs get another art piece
    if(timer === 100) {
      // generate new id to fetch
      const newId = Math.floor(Math.random() * 500000) + 1
      setArtId(newId)
      setIsLoading(true) // show loading window
      setTimer(0) // reset timer
    }

    return () => { clearInterval(interval) } // stop ticking 
  }, [timer])


  // View 
  return(
    isLoading ? (
      <Segment>
        <Dimmer active>
          <h1 className="brand">Artizan</h1>
          <Loader size='massive'>Loading next art piece...</Loader>
        </Dimmer>
      </Segment>
    ) : (
      <React.StrictMode>
        <Grid columns={1} divided padded>
          <Grid.Row className="head">
            <Grid.Column>
              <ArtMenu />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="body" stretched>
            <Art collection={ collection } />
          </Grid.Row>
          <div className="counter">
            <Progress percent={timer} size='tiny' color='violet' />
          </div>
        </Grid>
      </React.StrictMode>
    )
  )
}

export default App