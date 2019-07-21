## Available Scripts

### `npm start`

### `npm test`

### `docker run --name note-service -p 8080:8080 -d berkay/note-service`

There seems to be a server side issue with updating notes, where the payload { title: String, note: String }, saves the title but not the note.
