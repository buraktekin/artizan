// ShareButtonGroup
import React from "react"
import { Grid, Button, Popup } from "semantic-ui-react"
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share"

const ShareButtonGroup = (props) => {
  const { shares, id, handlers } = props
  const shareURL = 'https://buraktekin.github.io/artizan/#/' + id

  return (
    <Popup wide trigger={
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
          content: shares,
        }}
      />
    } on='click'>
      <Grid divided columns='equal'>
        <Grid.Column>
          <WhatsappShareButton url={shareURL}>
            <WhatsappIcon size={32} round={true} onClick={handlers.handleShare} />
          </WhatsappShareButton>
        </Grid.Column>
        <Grid.Column>
          <FacebookShareButton url={shareURL}>
            <FacebookIcon size={32} round={true} onClick={handlers.handleShare} />
          </FacebookShareButton>
        </Grid.Column>
        <Grid.Column>
          <TwitterShareButton url={shareURL}>
            <TwitterIcon size={32} round={true} onClick={handlers.handleShare} />
          </TwitterShareButton>
        </Grid.Column>
      </Grid>
    </Popup>
  )
}

export default ShareButtonGroup