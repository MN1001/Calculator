let button = document.getElementsByClassName("key")
let display = document.getElementById("display")


function appendvalue(num){
    display.value += num;
}
function cleardisplay(){
    display.value = "";
}
function calculate(){
    try{
    display.value = eval(display.value)
    } catch {
        display.value = 'error'
    }
}