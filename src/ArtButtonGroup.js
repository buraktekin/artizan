import React from "react";
import { Popup, Button, ButtonGroup } from "semantic-ui-react";

const ArtButtonGroup = () => {
  return(
    <ButtonGroup className="page-controls" vertical icon>
      <Popup 
        content='Like'
        trigger={<Button icon='heart' color='red' basic />} 
        position='right center'
      />
      <Popup 
        content='Share'
        trigger={<Button icon='fork' color='blue' basic />}
        position='right center'
      />
    </ButtonGroup>
  )
}

export default ArtButtonGroup