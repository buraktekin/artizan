import React, { useState } from "react"
import { Form, Popup, Button } from "semantic-ui-react";

const ArtController = (props) => {
  const { status, handlers } = props
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email)
  }
  const handleChange = (e, { value }) => {
    setEmail(value)
  }

  return (
    <Button.Group className='timer-controller' basic>
      <Button
        icon={status ? "pause" : "play"}
        content={status ? "Pause" : "Play"}
        onClick={handlers.tickHandler}
      />
      <Button
        icon='forward'
        content='Skip'
        onClick={handlers.skipHandler}
      />
      <Popup
        trigger={
          <Button
            icon='bookmark'
            content='Subscribe'
          />
        }
        content={
          <Form size='huge' onSubmit={handleSubmit}>
            <Form.Input
              name='email'
              label='Email'
              value={email}
              onChange={handleChange}
              placeholder='somebody@artizanapp.com' />
            <Button>Submit</Button>
          </Form>
        }
        on='click'
        position='bottom left'
      />
    </Button.Group>
  )
}

export default ArtController