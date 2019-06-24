# Laurify Server

Welcome to Laurify, the app to listen and store the best music.

![Alt text](./laurafy.png?raw=true "Laurafy")

## Usage

This application runs in a Docker container. To start the application and its dependencies you will need docker-compose. 

Before starting the application you will need to define the environment variables POTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET (to provide access to Spotify API) and create the backend/aws_credentials (to provide access de AWS). 

Your Amazon credentials should have write access to a bucket calle Laurafy or the given name configured on the environment variable S3_BUCKET. The access to that bucket needs to be configured as public to allow accessing the songs stored there.

Once everything is configured, start your application with

```console
docker-compose up -d
```