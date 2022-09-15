const [showMessage, showDisplay] = ['Show status code', 'block'];
const [hideMessage, hideDisplay] = ['Hide status code', 'none'];

const manageInfo = (catId) => {
    const cat = document.getElementById(catId);
    const status = cat.getElementsByClassName('status')[0];
    const button = cat.getElementsByClassName('showBtn')[0];
    
    if (button.innerHTML === showMessage) {
        button.innerHTML = hideMessage;

        status.style['display'] = showDisplay;
    }
    else if (button.innerHTML === hideMessage) {
        button.innerHTML = showMessage;

        status.style['display'] = hideDisplay;
    }
}