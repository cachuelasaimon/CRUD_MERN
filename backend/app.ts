import express from 'express'
import morgan from 'morgan'

// MIDDLEWARES 
let app = express()
app.use(express.json())
app.use(morgan('dev'))

// export app
export default app