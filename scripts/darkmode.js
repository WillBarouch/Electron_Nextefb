let mode = 0;
let r = document.documentElement.style;

function modetoggle() {
    if (mode < 1) {
        r.setProperty('--background','var(--nord6)');
        mode = 1;
    } else if (mode > 0){
        r.setProperty('--background','var(--nord0)');
        mode = 0;
    } else{
        alert('Darkmode broken, please restart');
        console.log(mode)
    }
}