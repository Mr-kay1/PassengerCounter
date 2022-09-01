let reading = 0
let counter = document.getElementById("number")
function increments(){
    reading += 1
    //console.log(reading)
    counter.innerHTML = reading
}

function saved(){
    console.log(reading)
}


let mySave = document.getElementById("savings")
function saved(){
    let contain = reading + " - "
    mySave.innerText += contain
    number.innerText = 0
    reading = 0
    console.log(reading)
}