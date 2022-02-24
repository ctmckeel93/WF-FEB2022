console.log('Connected to js')

function hide() {
    document.querySelector("#free-trial").remove()
}

function changePic() {

    var source = document.getElementById("main-pic");
    source.src = "images/wireframe.png"

}

function displayInput() {
    var displayInput = document.getElementById("inputText").value
    alert(displayInput)
}

function change(element) {
    console.log(element)
    element.style.color = "red";
    element.style.textDecoration = "underline"
}

// console.log(displayInput())