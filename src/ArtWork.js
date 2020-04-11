import React from "react"
import { Image } from "semantic-ui-react"
import { Link } from "react-router-dom";

export default class ArtWork extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { artwork } = this.props
    return (
      <a href={artwork.objectURL}>
        <Image
          src={
            artwork.primaryImageSmall ||
            artwork.primaryImage
          }
          className="artwork"
          centered
        />
      </a>
    )
  }
}