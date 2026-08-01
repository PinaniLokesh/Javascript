// const coding = ["JS", "Ruby", "Java", "Python", "CPP"]

// const values = coding.forEach( (item) => { //stored all coding values in Variable Values

//     console.log(item);
//     return item //foreach loop does not return any value

// })

// console.log(values); // No coding values are returned by foreach loop into new variable values

//---------Therefore, we have another method called filter which return this values.

const MyNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const NewNum = MyNum.filter( (num) => num > 4 )
// We can write syntax in 2 ways above and below
// const NewNum = MyNum.filter( (num) => { // if we use '{}' then we need to use return keyword to return value since now 
// // the 'num > 4' condition is in scope therefore to return it explicitly we have to use return keyword
//     return num > 4 // 
// })

// console.log(NewNum); //Return values stored inside a new variable NewNum

// we can also use foreach loop to return value through below method

const newnum = [] // we defined an empty array

MyNum.forEach( (num) => {  //used foreach loop on MyNum
    if (num > 4) {        // put condition that if num > 4
        newnum.push(num) // push num value into empty array of newnum
    }
})

console.log(newnum); //since we are comparing num > 4 till 10 from MyNum array therefore output is : [ 5, 6, 7, 8, 9, 10 ]

// More operations using Filter method

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let BookName = books.filter( (bk) => bk.genre === 'History')
   BookName = books.filter( (bk) => bk.publish > 2000)
BookName  = books.filter( (bk) => bk.publish > 1990 && bk.genre === "History")

  console.log(BookName);
  
