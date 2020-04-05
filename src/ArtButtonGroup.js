import React, { useState, useEffect } from "react"
import { Button, ButtonGroup } from "semantic-ui-react"
import ShareButtonGroup from "./ShareButtonGroup"
import database from './firebase'


function ArtButtonGroup(props) {
  const [socialCounter, setSocialCounter] = useState({ likes: 0, shares: 0, views: 0 })
  const shareUrl = `${window.location.href}${props.objectID}`
  const dbRef = database.artworks(props.objectID)

  useEffect(() => {
    function getUserData() {
      dbRef.once('value')
        .then(function (snapshot) {
          let data = snapshot.val()
          if (data.hasOwnProperty('interactions')) {
            data = data.interactions
            setSocialCounter(data)
          }
        })
    }
    getUserData()
    handleView()
  }, [socialCounter.likes])

  const handleLike = () => {
    setSocialCounter((prevState) => ({ ...prevState, likes: socialCounter.likes + 1 }))
    dbRef.set({
      id: props.objectID,
      interactions: socialCounter
    });
  }

  const handleShare = () => {
    setSocialCounter((prevState) => ({ ...prevState, shares: prevState.shares + 1 }))
    dbRef.set({
      id: props.objectID,
      interactions: socialCounter
    });
  }

  const handleView = () => {
    setSocialCounter((prevState) => ({ ...prevState, shares: socialCounter.views + 1 }))
    dbRef.set({
      id: props.objectID,
      interactions: socialCounter
    });
  }

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
    </ButtonGroup>
  )
}

export default ArtButtonGroup