import * as fs from 'fs'
import exifr from 'exifr'
import mojo from '@mojojs/mojo'

const app = mojo()

app.get('/', async ctx => {
    const images = []
    const files = await fs.promises.readdir('images')
    for (let file of files) {
        const location = await exifr.gps(`images/${file}`)
        if (location) {
            images.push({ file: file, location: location })
        }
    }
    console.log(images)
    ctx.render({json: images})
})

app.start()
