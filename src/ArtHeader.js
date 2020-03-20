import React, { Component } from 'react'

export default class ArtHeader extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    const { header } = this.props
    return(
      <div className="titleWrapper">
        <a href={header.objectURL}>
          <h3 className="artTitle">
            {`${header.title}`} 
            <span className="artDate">{` (${header.objectBeginDate} - ${header.objectEndDate})`}</span>
          </h3>
        </a>
      </div>
    )
  }
}