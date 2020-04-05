import React, { useState, useEffect } from 'react'
import {
  Grid,
  Loader,
  Dimmer,
  Progress,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './style.css'
import Firebase from 'firebase';

import Art from './Art'
import ArtMenu from './Menu'
import ArtController from './ArtController'
// import Logo from '../public/logo/artizan_logo.png'

function App() {
  /*
  * states
  */
  const [isLoading, setIsLoading] = useState(true)
  const [isTicking, setIsTicking] = useState(true)
  const [progress, setProgress] = useState(0)
  const [collection, setCollection] = useState([])
  const [artId, setArtId] = useState(187802)

  /* 
  * Handlers
  */
  const newID = () => Math.floor(Math.random() * 500000) + 1 // Generate new ID to fetch and art piece
  const API_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
  const tickHandler = () => setIsTicking(!isTicking)
  const skipHandler = () => {
    setIsLoading(true)
    setArtId(newID)
  }

  /* 
  * Device Type
  * Roughly determine the device type visiting our app
  */
  const getDeviceType = () => {
    if (window.innerWidth > 991) {
      return 'Desktop'
    } else if (window.innerWidth > 767) {
      return 'Tablet'
    } else {
      return 'Mobile'
    }
  }

  /* 
  * Fetching Data
  * fetch data asyncronously
  */
  const getData = async () => {
    const artURL = API_URL + artId
    await fetch(artURL, { timeout: 5000 })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not 200 response")
        } else {
          return res.json()
        }
      })
      .then((res) => {
        // If prior fields are empty, rerun fetch process
        if (!(res && res.tags && res.title && res.primaryImage)) {
          throw new Error(`One or more prior information are missing for ID: ${artId}`)
        } else {
          res.device = getDeviceType()
          setCollection(res) // pass fetched data to state
          setProgress(0) // reset progress
          setIsLoading(false)
          setIsTicking(true)
        }
      })
      .catch((err) => {
        console.error(`Caught an error: ${err}, Trying again...`)
        setArtId(newID)
      })
  }

  /* 
 * Progress Bar
 * Set interval to tick and change progress bar value per sec.
 */
  useEffect(() => {
    const interval = setInterval(() => {
      if (isTicking) {
        setProgress(progress + 3)
      }
      // After 30secs get another art piece
      if (progress > 100) {
        setIsTicking(false)
        setArtId(newID)
        setIsLoading(true) // show loading window
      }
    }, 1000)
    return () => clearInterval(interval) // stop ticking 
  }, [isTicking, progress])

  useEffect(() => {
    getData()
  }, [artId])

  /*
  * Render View
  */
  return (
    isLoading ? (
      <>
        <Dimmer active>
          <h1 className='brand'>Artizan</h1>
          <Loader size='massive' color='violet'>Loading next art piece...</Loader>
        </Dimmer>
      </>
    ) : (
        <>
          <Grid columns={1} divided padded>
            <Grid.Row className='timer-bar'>
              <Progress percent={progress} size='tiny' color='violet' />
              <ArtController
                handlers={{
                  skipHandler,
                  tickHandler
                }}
                status={isTicking}
              />
            </Grid.Row>
            <Grid.Row className='head' stretched>
              <ArtMenu />
            </Grid.Row>
            <Grid.Row className='body' stretched>
              <Art collection={collection} />
            </Grid.Row>
          </Grid>
        </>
      )
  )
}

export default App