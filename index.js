let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

let myname = document.getElementById("my-name")

let name = document.getElementById("my-name")

let fr = document.getElementById("my-from")
function getname(){
    // let name = document.getElementById("my-name")
    // let fr = document.getElementById("my-from")

    console.log(myname.value)
    return myname.value

    console.log(name.value)
    return name.value

}

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr ="\n" + getname() +" skipped "+ count + " times"
     

    saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
    myname.value=""
}
// Define the target aspect ratio (e.g., 16:9)
const targetAspectRatio = 4 / 3;

// Function to adjust window dimensions based on aspect ratio
function adjustWindowDimensions() {
  const windowWidth = window.innerWidth;
  const newWindowHeight = windowWidth / targetAspectRatio;
  window.innerHeight = newWindowHeight; // Adjust the window height to maintain the aspect ratio
}

// Add event listener to the window's resize event
window.addEventListener('resize', adjustWindowDimensions);

// Call the adjustWindowDimensions function initially to set the initial window aspect ratio
adjustWindowDimensions();