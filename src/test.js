var test = function () {
    var span = document.createElement("span");
    span.innerHTML = "hahahjhahhahahahaha";
    document.getElementById("target").appendChild(span);
}

document.getElementById("btn").onclick = test;
