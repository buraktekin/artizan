import React from "react"
import { Label } from "semantic-ui-react"

const colorsB = ['blue', 'violet', 'purple', 'pink', 'brown', 'grey']

const ArtTags = ((props) => {
  return(
    <div>
      {
        props.tags.map((tag, i) => {
          console.log(tag)
          return(
            <Label key={i} as='a' color={colorsB[i]} image>
              <img src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg" alt="tag icon" />
              <span id={i}>{tag.term}</span>
            </Label>
          )
        })
      }
    </div>
  )
})

export default ArtTags