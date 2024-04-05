const router = require("express").Router();
const fs = require('fs');
const uuid = require('./helper/uuid.js')
const { error } = require('console')


//API ROUTES

//GET /api/notes
router.get('/api/notes', (req, res) => {
    res.json(`${req.method} success!`)

});

//POST /api/notes
router.post('/api/notes', (req, res) => {
    console.log(`${req.method} was received to see if console shows notes.`);
    const { title, text } = req.body;
    if(title && text) {
        const newNote = {
            title,
            text,
            note_id: uuid()
        };
    fs.readFile('/', 'utf-8', (err, data) => {
        if(err) throw err;

        let notesArray = JSON.parse(data);
        if (!Array.isArray(notesArray)) {
            notesArray = [];
        }
        notesArray.push(newNote);
        const newNoteString = JSON.stringify(newNote);
        fs.writeFile('/', newNoteString, (err) => 
        err? console.error(error) : console.log('New note has been added!')
        );
    })

    const response = {
        status : 'success',
        body : newNote,
    };
    console.log(response);
    res.status(201).json(response);
    } else {
        res.status(500).json('Note has not Post.');
    }
});


//DELETE /api/notes
router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync('db/db.json', 'utf-8');
    const dataJSON = JSON.parse(data);
    const newNotes = dataJSON.filter((note) => {
    return note.id !== req.params.id;
    })
    
    fs.writeFileSync('db/db.json', JSON.stringify(newNotes))
    res.json('deleted');
})


module.exports = router;
