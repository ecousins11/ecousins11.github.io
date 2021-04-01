// $( document ).ready(function() {
//     console.log( "ready!" );
// });

let lettersPicked = ''
const vowels = 'aeiou'
const consonants = 'bcdfghjklmnpqrstvwxyz'
function populateLetter(vowelOrConsonant) {
    $('#letterBoxContainer').show();
    let randomLetter = ''
    if (vowelOrConsonant) {
        randomLetter = consonants.charAt(Math.floor(Math.random() * consonants.length)).toUpperCase();
        lettersPicked += randomLetter
        //
    } else {
        randomLetter = vowels.charAt(Math.floor(Math.random() * vowels.length)).toUpperCase();
        lettersPicked += randomLetter
    }
    $('#letterBoxContainer').append(`<div class="letterBox">${randomLetter}</div>`)
}

function clearLetters(){
    letterBoxContainer = $('#letterBoxContainer')
    letterBoxContainer.html('')
    letterBoxContainer.hide()
}