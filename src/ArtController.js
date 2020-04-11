import React from "react"
import { Button } from "semantic-ui-react";

const ArtController = (props) => {
  const { status, device, handlers } = props

  return (
    <Button.Group className='timer-controller' basic>
      < Button
        icon={status ? "pause" : "play"}
        content={status ? "Pause" : "Play"}
        onClick={handlers.tickHandler}
      />
      <Button
        icon='forward'
        content='Skip'
        onClick={handlers.skipHandler}
      />
    </Button.Group>
  )
}

export default ArtController