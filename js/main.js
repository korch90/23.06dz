 let text=document.getElementById("text")
let button=document.getElementById("btn")
 let newList=document.getElementById('left')

button.addEventListener("click", pushTask)

function pushTask(){
    if(!text.value==''){
    newList.insertAdjacentHTML('beforeend', ` <input type="checkbox"  name="${text.value}" > `+text.value);
    text.value=""
    console.log(document.querySelectorAll("input"))}
    else alert('no empty value')
}

function f(){
    document.querySelectorAll("input").forEach(el=>{
        if(el.checked){console.log( el.nextSibling.remove(),el.remove() )}
    })
}


