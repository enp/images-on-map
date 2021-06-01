import * as fs from 'fs'
import exifr from 'exifr'
import mojo from '@mojojs/mojo'

const app = mojo()

app.get('/', ctx => ctx.render({text: 'Images on map'}))

app.get('/location', async ctx => {
    const images = []
    const files = await fs.promises.readdir('public/images')
    for (const file of files) {
        const location = await exifr.gps(`public/images/${file}`)
        if (location) {
            images.push({ file: file, location: location })
        }
    }
    const response = {
        location: {
            latitude: images.reduce((sum, image) => sum + image.location.latitude, 0) / images.length,
            longitude: images.reduce((sum, image) => sum + image.location.longitude, 0) / images.length
        },
        images: images
    }
    ctx.render({json: response})
})

app.start()
