let input = document.getElementsByClassName("input")[0];
let button = document.getElementById("button");
button.addEventListener("click", function() {
    let task = input.value;
    console.log("hello");
    let i = 0;
    let list = document.getElementsByClassName("list");
    let li = document.createElement("li");
    li.innerHTML = task;
    if(li.innerHTML === "") {
        alert("Please enter a task");
        return;
    }
    list[i++].appendChild(li);
    input.value = "";
    li.addEventListener("click", function() { 
        li.style.textDecoration = "line-through";
    });
    li.addEventListener("dblclick", function() {
        li.style.display = "none";
    });

});



