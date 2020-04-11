import React from "react"
import { Grid } from "semantic-ui-react";
import Art from './Art'
import ArtMenu from './Menu'

const ArtPiece = () => {
  return (
    <>
      <Grid columns={1} divided padded>
        <Grid.Row className='head' stretched>
          <ArtMenu />
        </Grid.Row>
        <Grid.Row className='body' stretched>
          <Art collection={collection} />
        </Grid.Row>
      </Grid>
    </>
  )
}