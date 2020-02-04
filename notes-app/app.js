const chalk = require('chalk')
const notes = require('./nodes.js')
const yargs = require('yargs')

//customize yards version

yargs.version('1.1.0')
// add, remove, read, list

// add
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string',
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type:'string',

        }
    },
    handler (argv){
        notes.addNote(argv.title,argv.body)
    }
})

//remove
yargs.command({
    command:'remove',
    describe: 'Remove a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    },
})

// list
yargs.command({
    command:'list',
    describe:'List your notes',
    handler(){
        notes.listNotes()
    }
})

//read
yargs.command({
    command:'read',
    describe:'Read your notes',
    builder: {
        title: {
            describe:'Note title',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})


// console.log(yargs.argv)
yargs.parse()














// const command = process.argv[2]
// console.log(process.argv)

// if (command === 'add'){
//     console.log("adding note!")
// } else if(command === 'remove'){
//     console.log("remove note")
// } else{
//     console.log("good")
// }


// const add = require('./util.js')

// const sum = add(2,3);
// console.log(sum);
