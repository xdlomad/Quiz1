let data1 = true
let data2 = "1.25"
console.log(data1, typeof data1)
console.log(data2, typeof data2)

let data3 = data1.toString() + parseInt(data2) //parseFloat
console.log(data3, typeof data3)

//array
let data = ["one",2,true]
console.log(data[0], typeof data[0])

//object
user = {
    name : "soo",
    faculty: "fkekk",
    number : ["123456","73832"],
    phone : { office: "363121", mobile: "11123"},
    email : "uwu@utem.edu.my"
}

console.log (user.faculty)
console.log (user.phone.mobile)
console.log (user.number[0])

