import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import router from './routes/posts.js'

const app = express()

app.use('/', router)

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

const CONNECTION_URL = "mongodb+srv://MERN:MyCaptain@cluster0.fehk5vd.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 4000
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message))

// mongoose.set('useFindAndModify', false)