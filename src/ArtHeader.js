import React, { Component } from 'react'

export default class ArtHeader extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    const { header } = this.props
    return(
      <a href={header.objectURL}>
        <h3 className="artDate">{`(${header.objectBeginDate} - ${header.objectEndDate})`}</h3>
        <h2 className="artTitle">{`${header.title}`}</h2>
      </a>
    )
  }
}