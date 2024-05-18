var editedText = document.getElementById('editor')

function bold(){
    editedText.style.fontWeight = 'bold'
}
function italic(){
    editedText.style.fontStyle = 'italic'
}
function underline(){
    editedText.style.textDecoration = 'underline'
}
function fontFamily(){
    editedText.style.fontFamily = document.getElementById('fontFamily').value
}

function chnageColor(){
    editedText.style.color = document.getElementById('colorpicker').value
}
function fontSize(){
    var fontsize = document.getElementById('fontsize').value
    editedText.style.fontSize = fontsize +'px'
}