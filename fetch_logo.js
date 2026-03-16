import https from 'https';

https.get('https://tourismdp.mcu.edu.tw/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const matches = data.match(/<img[^>]+src="([^">]+logo[^">]*)"/gi);
    if (matches) {
      console.log('Found logos:', matches);
    } else {
      const allImgs = data.match(/<img[^>]+src="([^">]+)"/gi);
      console.log('All images:', allImgs ? allImgs.slice(0, 10) : 'none');
    }
  });
}).on('error', (err) => {
  console.error(err);
});
