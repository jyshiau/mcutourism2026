import https from 'https';

https.get('https://tourismdp.mcu.edu.tw/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const matches = data.match(/<img[^>]+src="([^">]+)"/gi);
    if (matches) {
      console.log('Found images:', matches.join('\n'));
    }
  });
}).on('error', (err) => {
  console.error(err);
});
