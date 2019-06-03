# Laurify

Welcome to Laurify, the app to listen the best music.

## Usage

This application runs in a Docker container. To start the application and its dependencies you only need docker-compose. To start the application with a database containing some songs you only need to execute:

```console
docker-compose up -d
```

You will find two different endpoints available at the moment:

### Songs

This endpoint will return the list of songs. You can provide the parameters `page` and `pageSize` to paginate the results. For example:

```console
curl 'http://localhost:3000/songs?page=1&pageSize=2'
```

Will return:
```json
[
  {
    "id":"5cf5762f7479b45ebeb77f6b",
    "title":"Queen - Bohemian Rhapsody",
    "length":366,
    "file":"queen_bohemian_rhapsody.mp3"
  }, {
    "id":"5cf5762f7479b45ebeb77f6c",
    "title":"Survivor - Eye Of The Tiger",
    "length":250,
    "file":"survivor_eye_of_the_tiger.mp3"
  }
]
```

### Play

This endpoint will return the selected song. For example, open in your browser the url http://localhost:3000/play/survivor_eye_of_the_tiger.mp3 to play the song.

## Improvements

This is the initial CRUD of the application with only a part of it. To improve this application, these are some of the steps that we should do:

- Probably the name should be the first thing to improve!
- Add at least some end to end tests for the basic features added and once we have business logic in the application add also unit and integration tests for the features added.
- Parametrize the database connection.
- Move logic from controller to use cases / services.
- Add validations to the parameters received.
- Create a volume for the songs instead of adding them to the container.
- Add nodemon to speed up development.
