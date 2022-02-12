function countWords(){
    var text = document.getElementById("textbox").value.split(' ');
    var numWords = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
            numWords++;
        }
    }
    document.getElementById("wordCount").innerHTML = numWords;
}