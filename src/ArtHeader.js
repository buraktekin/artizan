import React from "react"
import { Label } from "semantic-ui-react"

const ArtHeader = ((props) => {
  return(
    <div>
      {
        props.tags.map((tag, i) => {
          return(
            <Label key={i} as='a' color='teal' image>
              <img src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg" />
              <span id={i}>{tag}</span>
            </Label>
          )
        })
      }
    </div>
  )
})

export default ArtHeader