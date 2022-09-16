const [showMessage, showDisplay] = ['Show Info', 'block'];
const [hideMessage, hideDisplay] = ['Hide Info', 'none'];

const showInfo = (monkeyId) => {
    const monkey = document.getElementById(monkeyId);
    const info = monkey.getElementsByClassName('info')[0];
    console.log(info);
    const button = monkey.getElementsByClassName('showBtn')[0];
    
    if (button.innerHTML === showMessage) {
        button.innerHTML = hideMessage;

        info.style['display'] = showDisplay;
    }
    else if (button.innerHTML === hideMessage) {
        button.innerHTML = showMessage;

        info.style['display'] = hideDisplay;
    }
}