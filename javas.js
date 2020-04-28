function puzzle(num) {
    let indexid = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"];
    let indexob = ["one","two","three","four","five","six","seven","eight","nine"];

    let nameid = indexid[num-1];
    let nameob = indexob[num-1];

    let first = document.getElementById(nameid);
    first.style.color = "black";
    let second = document.getElementById(nameob)
    second.style.color = "white";
}

function repuzzle(num) {
    let indexid = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"];
    let indexob = ["one","two","three","four","five","six","seven","eight","nine"];

    let nameid = indexid[num-1];
    let nameob = indexob[num-1];

    let first = document.getElementById(nameid);
    first.style.color = "white";
    let second = document.getElementById(nameob)
    second.style.color = "black";
}