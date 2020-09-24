const fs = require('fs');
const ytdl = require('ytdl-core');

const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

// ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { filter: format => format.container === 'mp4' }))
//   .pipe(fs.createWriteStream('video.mp4'));

ytdl(url, { filter: format => format.container === 'mp4' }) // only returns mp4 data
  .on('data', (chunk) => {                                  // runs everytime data is received
    fs.appendFile('video.mp4', chunk, () => {               // appends to video.mp4, no overwriting
      console.log(`${Buffer.byteLength(chunk)} bytes received`);
    });
  })
  .on('end', () => {
    console.log('the stream has ended');
  });
