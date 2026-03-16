import https from 'https';

https.get('https://tourismdp.mcu.edu.tw/wp-content/uploads/sites/17/2023/02/LOGO-Banner-removebg-preview-1.png', (res) => {
  console.log('Content-Length:', res.headers['content-length']);
  console.log('Content-Type:', res.headers['content-type']);
});
