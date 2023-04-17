const express = require("express")
const app =express()
const mongoose = require("mongoose")
const PORT = 8000

app.use(express.json())
app.use('/api',require('./Routes/userRoutes'))



mongoose.connect("mongodb+srv://mongodb-user:54077091@cluster0.cu5obte.mongodb.net/mongoosews?retryWrites=true&w=majority")
.then(console.log('database connected')).catch(err=>{console.error(err)})


app.listen(PORT,console.log("server connected to port"+PORT))