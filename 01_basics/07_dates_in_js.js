// Dates

let myDate = new Date()
// console.log(myDate);   // Understand the output of this log
// console.log(myDate.toString());   //prints the date along with the time ((Day Month Date Year Time in 24 hr format))
// console.log(myDate.toDateString());   // Prints the date (Day Month Date Year) only
// console.log(myDate.toLocaleString());   // locale-based date and time

// console.log(myDate.toISOString());   // Prints the date (year month date) with time and UTC
// console.log(myDate.toJSON());   // toJSON() calls the toISOString() internally
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)   // month starts from 0 in js
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3, 30)   //  we gave time also (hr min sec)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")   // When we give the input date in this format, Months starts from 1
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023")  // The recommended date format as per ISO is YYYY-MM-DD
// console.log(myCreatedDate.toLocaleString());  // Verify this:- We will get the format according to the format used in the users system

let myTimeStamp = Date.now()

// console.log(myTimeStamp);    // 1 January 1970, 00:00:00 UTC se abhi ke exact moment tak ke total milliseconds return karta hai.
// console.log(myCreatedDate.getTime());    // 1 Jan 1970 se leke 14 Jan 2023 tak ke total milliseconds return karta hai
// console.log(Math.floor(Date.now()/1000));   //got the time in second    

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);   // Added 1 so that a regular user doesnt get confused bcs in js month starts from 0
console.log(newDate.getDay());  // In js. Sunday is treated as 0

console.log(newDate.toLocaleString("default", {
    weekday: "long",    // Making custom clock or date formatting
    day:"2-digit",
    month:"long",
    year:"2-digit"
    // timeZone:
}))


// Read MDN