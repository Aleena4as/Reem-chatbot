/**
 * @Author @ThanveerShah
 * Ultimate Dynamic Script tag for Embedding to other websites
 */

window.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML(
        'beforeend',
        `<iframe src="https://reemchatbotstaging.bluelogic.ai/" id="bluelogic-bot"
          style="border: 0; width: 360px; height: 105px; position: fixed; right: 30px; bottom: 0px;z-index: 99999;display: block;"></iframe>`
    );

    if (window.innerWidth < 1200) {
        const botContainer = document.getElementById('bluelogic-bot');
        botContainer.style.right = '0';
    }
    if (window.innerWidth < 457) {
        const botContainer = document.getElementById('bluelogic-bot');
        botContainer.style.bottom = '0px';
    }

    window.addEventListener('message', function (message) {
        const botContainer = document.getElementById('bluelogic-bot');
        if (message.data.value === true && message.data.view === 'big' && window.innerWidth < 457) {
            botContainer.style.maxWidth = '100%';
            botContainer.style.width = '100%';
            botContainer.style.height = window.innerHeight + 'px';
            botContainer.style.bottom = '0';
            return;
        }

        if (message.data.value === true && window.innerHeight < 740) {
            botContainer.style.height = '605px';
        } else if (message.data.value === true && message.data.view === 'big' && window.innerHeight > 740) {
            botContainer.style.height = '620px';
        }

        if (message.data.value === true && message.data.view === 'big' && window.innerWidth > 457) {
            botContainer.style.width = '458px';

            return;
        } else if (message.data.value === false) {
            botContainer.style.width = '360px';
            botContainer.style.height = '105px';
            botContainer.style.bottom = '0px';
        }
        if (message.data.value === false && message.data.value === false) {
            botContainer.style.width = '125px';
            botContainer.style.height = '105px';
            botContainer.style.bottom = '0px';
        }
        if (message.data.value === true && message.data.value === true && window.innerWidth > 457) {
            botContainer.style.width = '360px';
            botContainer.style.height = '105px';
            botContainer.style.bottom = '0px';
        } else if (
            message.data.value === true &&
            message.data.value === true &&
            message.data.size === 'max' &&
            window.innerWidth < 457
        ) {
            botContainer.style.width = '360px';
            botContainer.style.height = '105px';
            botContainer.style.bottom = '0px';
        }
        if (message.data.value === false && message.data.view === 'big' && window.innerWidth > 457) {
            botContainer.style.width = '360px';
            botContainer.style.height = '105px';
            botContainer.style.bottom = '0px';
        }
        if (message.data.value === false && message.data.view === 'small' && window.innerWidth < 457) {
            botContainer.style.width = '360px';
            botContainer.style.height = '105px';
            botContainer.style.bottom = '0px';
        }
        if (message.data.value === false && message.data.view === 'small' && window.innerWidth > 457) {
            botContainer.style.width = '360px';
            botContainer.style.height = '105px';
            botContainer.style.bottom = '0px';
        }
    });
});
