alert('you should not have come here')

function askQuestion() {
    var p = prompt('what is "do your Duolingo" in Spanish?');
    if (p != null) {
        document.getElementById('question').innerHTML = 'Yes!' +p+ 'is correct!'
    }
}