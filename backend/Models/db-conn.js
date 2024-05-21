const mongoose = require('mongoose')

module.export =mongoose.connect('mongodb://127.0.0.1:27017/gofood') 


.then(
    console.log("database connected")
)
.catch((e)=> console.log("database not connected"))