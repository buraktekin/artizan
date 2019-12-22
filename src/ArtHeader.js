import React from "react"
import { Label } from "semantic-ui-react"

const ArtHeader = ((props) => {
  return(
    <div>
      <h4>Tags:</h4>
      {
        props.tags.map((tag, i) => {
          return(
            <Label as='a' color='teal' image>
              <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
              <span id={i}>{tag}</span>
            </Label>
          )
        })
      }
    </div>
  )
})

export default ArtHeader