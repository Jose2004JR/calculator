const input = document.getElementById("input");
const btn = document.querySelectorAll(".btns");
const copy = document.getElementById("copy")

btn.forEach((b)=>{
    b.addEventListener('click',() =>{
        if(b.dataset.value == '='){
            return calculate()
        }else if(b.dataset.value == 'c'){
            input.value = ''
        }
        else{
            input.value += b.dataset.value
        }
    })
})
function calculate(){
    try{
        input.value = eval(input.value)
    }catch(e){
        input.value = `Error`
    }
}
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(input.value);

    if(copy.innerText == "copy"){
        copy.innerText = "copied";
        copy.style.color = " black";
        input.style.borderColor = "black";
    }else if(copy.innerText == "copied"){
        copy.innerText = "copy";
        copy.style.color = "green";
        input.style.borderColor = "green"

    }

})