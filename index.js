let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let name = document.getElementById("my-name")
let fr = document.getElementById("my-from")
function getname(){
    // let name = document.getElementById("my-name")
    // let fr = document.getElementById("my-from")
    console.log(name.value)
    return name.value
}

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr ="\n" + getname() +" skipped "+ count + " times"
     
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    name.value=""
}
