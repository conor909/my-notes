## Available Scripts

### `yarn`
### `yarn start`
### `yarn test`

### `docker run --name note-service -p 8080:8080 -d berkay/note-service`

There seems to be a server side issue with updating notes, where the payload { title: String, note: String }, saves the title but not the note.

Also some workaround due to the responses not returning the newly created object / ids from the db after a save or update.
