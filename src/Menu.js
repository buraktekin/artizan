import React from 'react'
import { Menu } from "semantic-ui-react";

const ArtMenu = () => {
  return (
    <Menu borderless>
      <Menu.Item name="logo">
        <a href="/artizan">
          <h3 className="brand">artizan</h3>
        </a>
      </Menu.Item>
    </Menu>
  )
}

export default ArtMenu