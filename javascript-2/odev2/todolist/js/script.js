let list = document.querySelector("#list")
const items = Object.values({...localStorage}).reverse()

for(let i = 0; i<items.length; i++){
    let tmp = document.createElement("li")
    tmp.innerHTML = items[i] + "<span class='close'>x</span>"
    list.append(tmp)
}

function newElement(){
    let task = document.querySelector("#task").value
    if(task == "" || task == null){        
        $(".error").toast("show");
    }else{
        let item = document.createElement("li")
        item.innerHTML = task + "<span class='close'>x</span>"
        list.append(item)
        localStorage.setItem(task,task)
        $(".success").toast("show");
    }
}


list.onclick = e => {
    if(e.target.tagName == "LI"){        
        e.target.classList[0] == "checked" ? e.target.classList.remove("checked") : e.target.classList.add("checked")
        console.log(e.target.tagName);  // to get the element
    }else if (e.target.tagName == "SPAN"){
        list.removeChild(e.target.parentElement)
        localStorage.removeItem(e.target.parentElement.innerHTML.split('<')[0])
    }else{}
}
