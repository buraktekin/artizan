import React, { useState, useEffect } from "react"
import { Button, ButtonGroup } from "semantic-ui-react"

import database from './firebase'

/* 
 * Subscription Control
 */
const getUserData = () => {
  let ref = database.ref('/');
  ref.on('value', snapshot => {
    const state = snapshot.val();
    setSubscription(state);
  });
  console.log('DATA RETRIEVED');
}

const ArtButtonGroup = (props) => {
  const dbRef = database.artworks(props.objectID)
  const [socialCounter, setSocialCounter] = useState({
    likes: 0,
    shares: 0,
    views: 0
  })

  const handleLike = () => {
    setSocialCounter({ ...socialCounter, likes: socialCounter.likes + 1 })
    console.log(socialCounter)
    dbRef.set({
      id: props.objectID,
      interactions: socialCounter
    });
  }

  // useEffect(() => {
  //   setSocialCounter({ ...socialCounter, views: socialCounter.views + 1 })
  // }, [])

  return (
    <ButtonGroup className="social-controls" icon>
      <Button
        color='red'
        content='Like'
        icon='heart'
        label={{
          basic: true,
          color: 'red',
          pointing: 'left',
          content: socialCounter.likes
        }}
        onClick={handleLike}
      />
      <Button
        basic
        color='blue'
        content='Share'
        icon='paper plane'
        label={{
          as: 'a',
          basic: true,
          color: 'blue',
          pointing: 'left',
          content: '2,048',
        }}
      />
    </ButtonGroup>
  )
}

export default ArtButtonGroup