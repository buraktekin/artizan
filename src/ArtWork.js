import React from "react"
import { Image } from "semantic-ui-react"

export default class ArtWork extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const artwork = this.props.artwork
    return(
      <a href={artwork.objectURL}>
        <Image src={artwork.primaryImageSmall || artwork.primaryImage} centered/>
      </a>
    )
  }
}