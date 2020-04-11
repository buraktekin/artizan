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
  const { shares, shareUrl, handlers } = props

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
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </Grid.Column>
        <Grid.Column>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </Grid.Column>
        <Grid.Column>
          <TwitterShareButton url={shareUrl} onClick={handlers.handleShare}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </Grid.Column>
      </Grid>
    </Popup>
  )
}

export default ShareButtonGroup