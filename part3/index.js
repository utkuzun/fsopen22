
const express = require("express")

const app = express()
app.use(express.json())


let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-05-30T19:20:14.298Z",
      important: true
    }
  ]

app.get("/", (req, res) =>  {
    res.send("<h1>Hello world!!! </h1>")
})

app.get("/api/notes", (req, res) => {
    res.json(notes)
})

app.get("/api/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(note=> note.id === id )

    if (note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
    
})

app.post("/api/notes", (req, res) => {
    const note = req.body
    console.log(note);
    res.json(note)
})

const PORT = 3001

app.listen(PORT, () =>  console.log(`Server running on port ${PORT}`))

