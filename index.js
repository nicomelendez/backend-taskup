import express  from 'express'
import dotenv from 'dotenv'
import connectionDB from './config/database.js'
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express()
app.use(express.json())

dotenv.config()

connectionDB()

// Routing
app.use('/api', usuarioRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto  ${PORT}`)
})