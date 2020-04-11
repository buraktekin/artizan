import React, { useRef } from "react"
import { Button, ButtonGroup } from "semantic-ui-react"
import ShareButtonGroup from "./ShareButtonGroup"
import database from './firebase'

function ArtButtonGroup(props) {
  let socialCounter = useRef({})
  const shareUrl = `${window.location.hostname}/artpiece/${props.objectID}`
  const dbRef = database.artworks(props.objectID)
  dbRef.once('value', querySnapShot => {
    socialCounter.current = querySnapShot.val() ? querySnapShot.val() : { likes: 0, shares: 0, views: 0 }
  })

  // TODO: REPETITIVE CODE!!! CLEAN HERE LATER
  const handleLike = () => {
    socialCounter.current = { ...socialCounter.current, likes: socialCounter.current.likes + 1 }
    dbRef.set({
      id: props.objectID,
      likes: socialCounter.current.likes,
      shares: socialCounter.current.shares,
      views: socialCounter.current.views
    });
  }

  const handleShare = () => {
    socialCounter = { ...socialCounter, shares: socialCounter.current.likes + 1 }
    dbRef.set({
      id: props.objectID,
      likes: socialCounter.current.likes,
      shares: socialCounter.current.shares,
      views: socialCounter.current.views
    });
  }

  const handleView = () => {
    socialCounter = { ...socialCounter, views: socialCounter.current.likes + 1 }
    dbRef.set({
      id: props.objectID,
      likes: socialCounter.current.likes,
      shares: socialCounter.current.shares,
      views: socialCounter.current.views
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
          content: socialCounter.current.likes
        }}
        onClick={handleLike}
      />

      <ShareButtonGroup
        shares={socialCounter.current.shares}
        handlers={handleShare}
        shareUrl={shareUrl}
      />
    </ButtonGroup>

    /*
      
    */
  )
}

export default ArtButtonGroup