import express from "express"
import cors from "cors"
import multer from "multer"

import { appendFile, readFile } from "./helper.js"

const PORT = 7777
const app = express()

// dest: wo soll der upload hin?
// limits max. größe des Bildes in Byte 
const upload = multer({
    dest: "./images",
    limits: { fileSize: 2000000 }
})

app.use(cors({origin: "http://localhost:5173" }))

// kp ????
app.use("/images", express.static("./images"))

// POST req mit form input daten frontend ----> backend
// upload.single kommt von multer
app.post("/api/addPost", upload.single("postImage"), (req, res) => {
    //speichert inhalt von request body in variable data
    const data = req.body
    data.image = req.file.path
    console.log(req.files)
    appendFile(data)
        .then(newData => res.json(newData))
        .catch(err => console.log(err))
})

//GET req mit posts daten backend ----> frontend
app.get("/api/getPosts", (req, res) => {
    // Aufruf der "readFile"-Funktion, um den Inhalt der Datei zu lesen
    readFile()
        // Senden des Inhalts als JSON zurück an den Client
        .then(data => res.json(data))
        // Konsolenausgabe im Falle eines Fehlers
        .catch(err => console.log(err))
})













app.listen(PORT, () => console.log("Server läuft auf PORT" + PORT))