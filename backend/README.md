# Laurify Server

You will find two different endpoints available at the moment:

### Songs

This endpoint will return the list of songs. You can provide the parameters `page` and `pageSize` to paginate the results. For example:

```console
curl 'http://localhost:3000/songs?page=0&pageSize=2'
```

Will return:
```json
{
  "total":3,
  "songs":[
    {
      "title":"Let It Go",
      "length":243,
      "file":"frozen_let_it_go.mp3"
    },{
      "title":"Bohemian Rhapsody",
      "length":366,
      "file":"queen_bohemian_rhapsody.mp3"
    }
  ]
}
```

### Upload

This endpoint will receive a file with a song to be added to the library. The file is uploaded to the Amazon Bucket and the meta information associated to the song is loaded from Spotify.

```console
curl 'http://localhost:3000/upload' -H 'Referer: http://localhost:3001/' -H 'Origin: http://localhost:3001' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36' -H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundary1IhVDOegwxpwwfrD' --data-binary $'------WebKitFormBoundary1IhVDOegwxpwwfrD\r\nContent-Disposition: form-data; name="filepond"\r\n\r\n{}\r\n------WebKitFormBoundary1IhVDOegwxpwwfrD\r\nContent-Disposition: form-data; name="filepond"; filename="The Beatles - Hey Jude.mp3"\r\nContent-Type: audio/mp3\r\n\r\n\r\n------WebKitFormBoundary1IhVDOegwxpwwfrD--\r\n' --compressed
```
