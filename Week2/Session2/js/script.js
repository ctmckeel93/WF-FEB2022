// console.log('Connected to js')

// // String 
//     "Corey"
//     'Mckeel'
//     "Corey Mckeel"
//     "Corey 'Taylor' Mckeel"
//     'Corey "Taylor" Mckeel'
//     "987698769876876"
// // Number (int)
//     10
//     20
//     257
//     987698769876876
//     2.3
// // Boolean
//     true
//     1
//     "Sepia"
//     "corey"
//     ""
//     false
//     0
//     null

//     undefined 
//     NaN

//     // Parts of a variable
//     // var // Keyword
//     var name // name = identifier 
//     var name = "Corey" // name = "Corey"
//     // o name[1]
//     name = "Juli" // Now name = "Juli"

//     var age = "20"

//     var isTired = true


//     function printInfo () {
//         // code instructions
//         console.log(name,age,isTired)
//     }

//     printInfo() // Calling or Invoking the Function

//     function add (num1, num2) {
//         var sum = num1 + num2
//         // Return gives value to a function
//         return sum
//     }

//     console.log("Printing no return: ", add(5,9))
//     add(10,2)
//     add(11,9)
//     add(4,6)

//     var name = {
//         0: "C",
//         1: "o"
//     }

//     var array = [1,2,3,4,true, "Comet", "blitzen", [0], {}]
//     // console.log(name.length)

var color = "red"

var firstName = "Corey "
var lastName = "McKeel"
var fullName = firstName + lastName
console.log(fullName)

var mainContainer = document.querySelector(".paragraph");
var counter = document.querySelector("#counter")
// console.log(counter.innerText)
console.log(mainContainer)

function makeDifferentColor() {
    mainContainer.style.color = color;
}
function makeBlue() {
    mainContainer.style.color = "blue";
}

function changeColor(element) {
    console.log(element.value)
    color = element.value
}

function count () {
    var num = parseInt(counter.innerText)
    num++
    counter.innerText = num
    if (counter.innerHTML > 10) {
        counter.remove()
    }
}



