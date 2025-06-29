const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// These example are for some bracs mistake and filter method understanding
const newArray=arr.filter((item)=>(item > 4))
// console.log(newArray) // [ 5, 6, 7, 8, 9, 10 ]

const newArray2=arr.filter((item)=>{item <5})
// console.log(newArray2) // []
// explanation :if use { } the use return ex,,,

const newArr3=arr.filter((item)=>{return item>7})
// console.log(newArr3)//[ 8, 9, 10 ]

// let do same thing using forEach loop

let a=[]
arr.forEach((num)=>{
    if(num>4) a.push(num)
})

// console.log(a) // [ 5, 6, 7, 8, 9, 10 ]



// using some real life example

// Array of 20 book objects
const books = [
  { name: "The Great Gatsby", firstPublishYear: 1925, currentEdition: 2, genre: "Classic" },
  { name: "To Kill a Mockingbird", firstPublishYear: 1960, currentEdition: 7, genre: "Classic" },
  { name: "1984", firstPublishYear: 1949, currentEdition: 6, genre: "Dystopian" },
  { name: "Harry Potter and the Sorcerer's Stone", firstPublishYear: 1997, currentEdition: 10, genre: "Fantasy" },
  { name: "The Hobbit", firstPublishYear: 1937, currentEdition: 8, genre: "Fantasy" },
  { name: "Pride and Prejudice", firstPublishYear: 1813, currentEdition: 12, genre: "Romance" },
  { name: "The Catcher in the Rye", firstPublishYear: 1951, currentEdition: 4, genre: "Classic" },
  { name: "The Lord of the Rings", firstPublishYear: 1954, currentEdition: 9, genre: "Fantasy" },
  { name: "The Alchemist", firstPublishYear: 1988, currentEdition: 6, genre: "Adventure" },
  { name: "The Da Vinci Code", firstPublishYear: 2003, currentEdition: 5, genre: "Thriller" },
  { name: "The Hunger Games", firstPublishYear: 2008, currentEdition: 4, genre: "Dystopian" },
  { name: "The Fault in Our Stars", firstPublishYear: 2012, currentEdition: 3, genre: "Romance" },
  { name: "Gone Girl", firstPublishYear: 2012, currentEdition: 2, genre: "Thriller" },
  { name: "The Girl on the Train", firstPublishYear: 2015, currentEdition: 2, genre: "Thriller" },
  { name: "The Kite Runner", firstPublishYear: 2003, currentEdition: 5, genre: "Drama" },
  { name: "Life of Pi", firstPublishYear: 2001, currentEdition: 4, genre: "Adventure" },
  { name: "Memoirs of a Geisha", firstPublishYear: 1997, currentEdition: 3, genre: "Historical" },
  { name: "The Shining", firstPublishYear: 1977, currentEdition: 6, genre: "Horror" },
  { name: "A Game of Thrones", firstPublishYear: 1996, currentEdition: 7, genre: "Fantasy" },
  { name: "The Road", firstPublishYear: 2006, currentEdition: 2, genre: "Post-apocalyptic" }
];


const UserBook=books.filter((book)=>{
  return book.genre==="Classic" || book.currentEdition==2
})
// console.log(UserBook)

const UserFav=books.filter((book)=>{
  return book.genre==="Classic" && book.currentEdition==2
})
console.log(UserFav)

