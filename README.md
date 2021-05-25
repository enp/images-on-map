# How to show images on map

```
docker build -t images-on-map .
docker run -it --rm --name images-on-map -p 3000:3000 -v $(pwd)/app.js:/usr/src/app/app.js images-on-map
```
