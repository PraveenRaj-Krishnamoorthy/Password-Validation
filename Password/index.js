let input = document.getElementById("pass")
let output = document.querySelector(".show")

input.onkeyup=(event)=>{
    let value = event.target.value
    output.innerHTML = event.target.value
    
    var seven;
    if (value.length > 7) {
        document.getElementById("seven").style.color = "green"
    } else {
        document.getElementById("seven").style.color = "red"
    }
    var upp = /[A-Z]/g;
    if (value.match(upp)) {
        document.getElementById("upp").style.color = "green"
    } else {
        document.getElementById("upp").style.color = "red"
    }

    var low = /[a-z]/g;
    if (value.match(low)) {
        document.getElementById("low").style.color = "green"
    } else {
        document.getElementById("low").style.color = "red"
    }

    var num = /[0-9]/g;
    if (value.match(num)) {
        document.getElementById("num").style.color="green"
    } else {
        document.getElementById("num").style.color="red"
    }

    var spl = /[!@#$%^&*]/g;
    if (value.match(spl)) {
        document.getElementById("spl").style.color = "green"
    } else {
        document.getElementById("spl").style.color = "red"
    }
}