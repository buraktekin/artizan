import { config } from './config'
import * as firebase from 'firebase'

firebase.initializeApp(config)
const database = firebase.database()
const refs = {
  subscribers: (id) => database.ref('subscriber/' + id),
  artworks: (id) => database.ref('artwork/' + id)
}

export default refs