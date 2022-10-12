//keyboard
const WHITE_KEYS = ['z','x','c','v','b','n','m'];
const BLACK_KEYS = ['s','d','g','h','j'];


//declaring variables for keys
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

//play note for each one
keys.forEach(key => {
    key.addEventListener('click', ()=> playNote(key));
});


//event listeners for keyboard

document.addEventListener('keydown',e=>{
    if(e.repeat) return;
 const key =  e.key;
 const whiteKeyIndex = WHITE_KEYS.indexOf(key);
 const blackKeyIndex = BLACK_KEYS.indexOf(key);


 if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
 if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);

    });

//pick the note for each one
function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    //chamge colour on click and remove as it ends
    key.classList.add('active');
    noteAudio.addEventListener('ended', () =>{
    key.classList.remove('active');
    });
}