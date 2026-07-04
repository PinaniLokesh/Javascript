// Dates

let mydate = new Date()

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());

// let createddate = new Date(2026, 6, 4, 12, 40)
// let createddate= new Date("2026-07-04")
let createddate = new Date("04-07-2026 12:40 PM")

// console.log(createddate.toLocaleString());

let myTimeStamp = Date.now()


// console.log(myTimeStamp);
// console.log(createddate.getTime())

// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()

// console.log(newdate);
// console.log(newdate.getMonth() + 1);
// console.log(newdate.getDay());



console.log(newdate.toLocaleString('Default', {
    weekday : "long",
}
));
