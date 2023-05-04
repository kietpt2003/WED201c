function Show() {
    let mytext__string = document.getElementById("mytext").innerHTML
    let text__check = "Show Register Form";
    if (mytext__string == text__check) {
        document.getElementById("myform").style.display='block'
        document.getElementById("mytext").innerHTML='Hide Register Form'
    } else {
        document.getElementById("myform").style.display='none'
        document.getElementById("mytext").innerHTML='Show Register Form'
    }
}

function checkForm() {
    let arr = document.getElementsByTagName("input")
    let t1 = arr[0].value
    let t2 = arr[1].value
    if (t1 == "" || t2 == "") {
        alert("Two text fields are not empty")
    }
}