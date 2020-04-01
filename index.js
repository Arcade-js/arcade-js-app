const express = require('express')
const app = express()
const port = 1337 /* w3 4r3 0n p0r7 1337 b3c4u53 w3 4r3 H4RDC0R3 */

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Arcade.js Node Server is listening at http://localhost:${port}`))
  
