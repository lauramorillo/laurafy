# Laurify Server

Welcome to Laurify, the app to listen and store the best music.

![Alt text](./laurafy.png?raw=true "Laurafy")

## Usage

This application runs in a Docker container. To start the application and its dependencies you will need docker-compose. 

Before starting the application you will need to define the environment variables SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET (to provide access to Spotify API) and create the backend/aws_credentials (to provide access de AWS). 

Your Amazon credentials should have write access to a bucket calle Laurafy or the given name configured on the environment variable S3_BUCKET. The access to that bucket needs to be configured as public to allow accessing the songs stored there.

Once everything is configured, start your application with

```console
docker-compose up -d
```

## Improvements

This is the initial CRUD of the application with only a part of it. To improve this application, these are some of the steps that we should do:

- Probably the name should be the first thing to improve!
- Add at least some end to end tests for the basic features added and once we have business logic in the application add also unit and integration tests for the features added.
- Add validations to the parameters received.
- Add more information about the song being played (album image, for example).
- Use Redux to handle when grid data needs to be updated.
- Add scroll bar to grid to ensure the upload component is always visible.
- Add propTypes for all the components.

