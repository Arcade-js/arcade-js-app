const express = require('express');
const path = require('path');
const app = express();
const port = 1337; /* w3 4r3 0n p0r7 1337 b3c4u53 w3 4r3 H4RDC0R3 */

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../app/public')))

app.use('/api', require('./api'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

app.listen(port, () => console.log(`Arcade.js Node Server is listening at http://localhost:${port}`));
