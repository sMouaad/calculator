const result = document.querySelector(".result")
const buttons = document.querySelectorAll(".button")
const operations = document.querySelectorAll(".operation")

let operation = null;
let a=0;
let b=0;

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        getNumber(e.target.textContent);
    })
})

operations.forEach(operation=>{
    operation.addEventListener("click",(e)=>{
        if(b) operate()
        setOperation(e.target.textContent)
    })
})

function clearMemory(){
    operation = null;
    a=0;
    b=0;
    clearScreen();
}
function clearScreen(){
    result.textContent = "0"
}
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function subtract(a,b){
    return a-b;
}
function divide(a,b){
    if(b==0) return Infinity;
    return parseInt((a/b)*100)/100;
}
function getNumber(number){
    if(operation===null){
        if(!a) a = "";
        if(!(!a && number == "0")){
            a += number;
            result.textContent = a;
        }
    }
    else{
        if(!b) b = "";
        if(!(!b && number == "0")){
            b += number;
            result.textContent += number;
        }
        else{
            if(!result.textContent.endsWith("0")){
                result.textContent += "0"
            }

        }
    }
}
function operate(){
    if(!operation){
        result.textContent = a;
    }
    else{
        result.textContent = a = operation(+a,+b);
        b = 0;
        operation = null;
    }
}

function operatorExists(){
    if(result.textContent.endsWith("+ ") || result.textContent.endsWith("- ") || result.textContent.endsWith("x ") || result.textContent.endsWith("/ ")) return true;
    return false
}

function setOperation(userOperation){
    if(operatorExists()) result.textContent = result.textContent.slice(0,-3);
    switch (userOperation) {
        case "+":
            result.textContent+= " + ";
            operation = add;
            break;
        case "-":
            result.textContent+= " - ";
            operation = subtract;
            break;
        case "/":
            result.textContent+= " / ";
            operation = divide;
            break;
        case "x":
            result.textContent+= " x ";
            operation = multiply;
            break;
        default:
            break;
    }
}
