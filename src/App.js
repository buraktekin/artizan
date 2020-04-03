import React, { useState, useEffect } from 'react'
import {
  Grid,
  Loader,
  Dimmer,
  Progress,
} from 'semantic-ui-react'
import Firebase from 'firebase';

import config from './Config';
import _ from 'lodash'
import Art from './Art'
import ArtMenu from './Menu'
import ArtController from './ArtController'
// import Logo from '../public/logo/artizan_logo.png'

function newId() {
  return Math.floor(Math.random() * 500000) + 1 // generate new id to fetch
}

function App() {
  /*
  * states
  */
  const [subscription, setSubscription] = useState({ user: '', favorites: [] })
  const [isLoading, setIsLoading] = useState(true)
  const [isTicking, setIsTicking] = useState(true)
  const [progress, setProgress] = useState(0)
  const [deviceType, setDeviceType] = useState('Desktop')
  const [collection, setCollection] = useState([])
  const [artId, setArtId] = useState()

  /* 
  * Handlers & Constants
  */
  const API_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
  const tickHandler = () => setIsTicking(!isTicking)
  const skipHandler = () => {
    setIsLoading(true)
    setIsTicking(true)
    setArtId(newId)
  }

  /* 
  * Subscription Control
  */
  const subscriptionHandler = (email, favorite) => {
    setSubscription({ user: email, favorites: [...subscription.favorites, favorite] })
    console.log("USER: ", subscription)
  }
  const writeUserData = () => {
    Firebase.database().ref('/').set(subscription);
    console.log('DATA SAVED');
  }
  const getUserData = () => {
    let ref = Firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      setSubscription(state);
    });
    console.log('DATA RETRIEVED');
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
    }, 1000)
    // After 30secs get another art piece
    if (progress > 100) {
      setArtId(newId)
      setIsLoading(true) // show loading window
    }
    return () => clearInterval(interval) // stop ticking 
  }, [isTicking, progress])

  /* 
  * Get device type information
  * Roughly determine the device type visiting our app
  */
  useEffect(() => {
    if (window.innerWidth > 991) {
      setDeviceType('Desktop')
    } else if (window.innerWidth > 767) {
      setDeviceType('Tablet')
    } else {
      setDeviceType('Mobile')
    }
  }, [])

  /*
  * Fetch data
  */
  useEffect(() => {
    const artURL = API_URL + artId
    async function getData() {
      await fetch(
        artURL,
        { timeout: 5000 }
      )
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
            res.device = deviceType
            setCollection(res) // pass fetched data to state
            setProgress(0) // reset progress
          }
          setIsLoading(false)
        })
        .catch((err) => {
          console.error(`Caught an error: ${err}, Trying again...`)
          setArtId(newId)
        })
    }
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
                  tickHandler,
                  subscriptionHandler,
                  writeUserData,
                  getUserData
                }}
                status={isTicking}
              />
            </Grid.Row>
            <Grid.Row>
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