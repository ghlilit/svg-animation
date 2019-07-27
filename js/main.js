var btns = document.querySelectorAll(".buttons button");
var cat = document.getElementsByClassName('cat')[0];

for (let btn of btns){
    btn.addEventListener("click", manageCatClasses);
}

function manageCatClasses(){
    if(this.getAttribute("data-add")){
        cat.classList.add(this.getAttribute("data-add"));
    }
    if(this.getAttribute("data-remove")){
        cat.classList.remove(this.getAttribute("data-remove"));
    }
}