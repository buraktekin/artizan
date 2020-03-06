import React, { Component } from 'react'

export default class ArtHeader extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    const { header } = this.props
    return(
      <a href={header.objectURL}>
        <h2>{`${header.title} (${header.objectBeginDate} - ${header.objectEndDate})`}</h2>
      </a>
    )
  }
}