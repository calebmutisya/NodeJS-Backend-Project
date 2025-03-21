import express from 'express'
//Allow us to look for index.html
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authmiddleware.js'

const app = express()
const PORT = process.env.PORT || 5003

// Get the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url)
// Get the directory name from the file path
const __dirname = dirname(__filename)

//Middleware
app.use(express.json())

//Serves html file from Public directory
// Tell express to serveall filles ffrom public folder as static assets
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


//Routes
app.use('/auth', authRoutes)
app.use('/todos', authMiddleware,todoRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})