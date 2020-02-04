const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('books.json',bookJSON)

// const dataBuffer = fs.readFileSync('books.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data)

const dataBuffer = fs.readFileSync('books.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Tracey"
data.age = "25"

const user = JSON.stringify(data)
fs.writeFileSync('books.json',user)









// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.title)
// console.log(parseData.author)