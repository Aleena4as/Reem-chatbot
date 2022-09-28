export const guid = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

/**
 * Replacing String With These Characters
 *
 * @param {*} str
 *
 */
export const decodeString = str => {
    return str
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&#x2F;/g, '/');
};

/**
 * Handling Input For all the Component
 *
 *
 * @param {*} component
 * @param {*} event
 */

export const dynamicInput = (component, event) => {
    component.setState({
        [event.target.name]: event.target.value,
    });
};

/**
 * Display Date with - Example : 2020-10-1
 *
 * Converting from new Date
 *
 * @param {*} date
 */

export const dateToDBFormat = date => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
};

/**
 * Display Date with / Example : 0/10/2020
 *
 * @param {*} date
 */
export const dateToDispFormat = date => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('/');
};

/**
 * Display Date with / Example : month/day/year
 *
 * @param {*} date
 */
export const dateToDispFormatCustom = date => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
};

/**
 * Converting Text To Link
 *
 * @param {*} text
 */
export const textToLink = text => {
    let replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gim;
    replacedText = text.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-_.])+@[a-zA-Z_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1" target="_blank">$1</a>');

    return replacedText;
};

/**
 * Generting user ID on Start
 *
 * @param {*} event
 */
export const generateGuid = () => {
    let guId;
    if (getCookie('botkit_guid')) {
        guId = guid();
        setCookie('botkit_guid', guId, 1);
        return getCookie('botkit_guid');
    }
    guId = guid();
    setCookie('botkit_guid', guId, 1);
    return guId;
};

const getCookie = cname => {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
};

const setCookie = (cname, cvalue, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};

// Generating End

/**
 * Generic Math.Floor
 *
 * @param {*} element
 */
export const floor = (element = 0) => Math.floor(element);

/**
 *
 * Button Move Animation
 *
 * @param {Object} Event
 */
export const buttonMoveAnimation = ({ currentTarget }) => {
    const target = currentTarget;
    const { left, top } = target.getBoundingClientRect();
    const currentButtonLeft = floor(left);
    const currentButtonTop = floor(top);
    const currentParentLeft = floor(target.parentNode.getBoundingClientRect().left);
    const currentParentTop = floor(target.parentNode.getBoundingClientRect().top);

    // Check if the button is not the left edge and is on the top edge
    // then move the button to the left
    if (currentButtonLeft !== currentParentLeft && currentButtonTop === currentParentTop) {
        target.style.cssText = `
         transform:translateX(calc(-${currentButtonLeft}px + ${currentParentLeft}px));
           `;
    }

    // Check if the button is not the left edge and is not on the top edge
    // then move the button to the left and top
    else if (currentButtonLeft !== currentParentLeft && currentButtonTop !== currentParentTop) {
        target.style.cssText = `
             transform:translate(calc(-${currentButtonLeft}px + ${currentParentLeft}px),calc(-${currentButtonTop}px + ${currentParentTop}px) ); 
               `;
    }
    // Check if the button is not the left edge and is not on the top edge
    // then move the button to the left and top
    else if (currentButtonLeft === currentParentLeft && currentButtonTop !== currentParentTop) {
        target.style.cssText = `
             transform:translate(calc(-${currentButtonLeft}px + ${currentParentLeft}px),calc(-${currentButtonTop}px + ${currentParentTop}px) );
               `;
    }

    // Removing the height of the parent container after the button dissapears
    setTimeout(() => {
        target.parentNode.style.height = target.clientHeight + 10 + 'px';
    }, 600);
};

/**
 *
 * Takes in original class name
 *
 * Takes in a variable that holds true or false
 *
 * If true then adds the @NewClassName
 * else @elseClassName
 *
 * @param {*} className
 * @param {*} variableName
 * @param {*} NewclassName
 * @param {*} elseClassName
 */

export const classFunction = (className, variableName = false, NewclassName = '', elseClassName = '') => {
    if (variableName) {
        return className + ' ' + NewclassName;
    } else {
        if (elseClassName) {
            return className + ' ' + elseClassName;
        }
    }
    return className;
};

// Same Height Div
export const sameHeightDiv = tag => {
    const allParagraph = document.querySelectorAll(tag);
    let maxHeight = 0;
    allParagraph.forEach(element => {
        if (element.clientHeight > maxHeight) {
            maxHeight = element.clientHeight;
        }
    });

    allParagraph.forEach(element => {
        element.style.height = maxHeight + 'px';
    });
};
