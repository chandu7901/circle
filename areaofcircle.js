const express = require('express')
const app = express()

let radius = 22

let area = Math.PI * (radius * radius)
app.get('/areaofcircle', (req, res) =>
  res.send(`Area of the circle for radius ${radius} is ${area} `)
)

const PORT = 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`))
