const MyNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const NewNum = MyNumber.map( (num) => num + 10)
// const NewNum = MyNumber.map( (num) => {// When using '{}' we need to use retrun
//     return num + 10
// }) 

//Chaining Method

const NewNum = MyNumber
                       .map( (num) => num * 10)                                                       
                       .map( (num) => num + 1) 
                       .filter( (num) => num > 40)

console.log(NewNum);
