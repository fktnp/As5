var start = 0;

function postFunction() {
    var topic = document.getElementById("text1").value;
    
    if (start == 0) {
        document.getElementById("topic1").innerHTML = topic;
    } else if (start == 1) {
        document.getElementById("comment1").innerHTML = topic;
    } else if (start == 2) {
        document.getElementById("comment2").innerHTML = topic;
    }
    
    start++; 
}

function clearFunction() {
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    start = 0; 
}
