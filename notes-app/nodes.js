const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return 'Your notes...'
}
// add a note function: load -> check duplicate -> push in
const addNote = function(title,body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title:title,
            body: body,
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))   
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })

    if (notesToKeep.length === notes.length){
        console.log(chalk.red.inverse("No note found!"))
    } else{
        console.log(chalk.green.inverse("Note removed"))
        saveNotes(notesToKeep)
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
    
}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNotes = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.green.inverse(note.title))
        console.log(chalk.green.inverse(note.body))
    } else{
        console.log(chalk.red.inverse("No title find!"))
    }
    
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes,
};