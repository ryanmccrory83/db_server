const express =  require('express')
const app = express()
const queries = require('./queries')
const port =  process.env.PORT || 8000 

app.get('/',(req,res,next) => {
    queries.getAll().then(cats => res.json({cats}))
})

app.listen(port, () => {
    console.log(`running on port ${port}`)
})