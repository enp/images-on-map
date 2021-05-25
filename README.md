# Images on map

How to start server:

```
docker build -t images-on-map .
docker run -it --rm --name images-on-map -p 3000:3000 -v $(pwd)/app.js:/usr/src/app/app.js images-on-map
```

How to request server:

```
curl -s http://127.0.0.1:3000 | jq
```