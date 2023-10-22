/* 
* Lucky Star Framework
* Copyright © ECat Plus Community.
* Author: MoeCinnamo
* Repo: https://github.com/ecatplus/lucky-star
*/

// Get the language preference of the user's device
const userLanguage = navigator.language;

// Set default language based on user device language
const defaultLanguage = lang[userLanguage] ? userLanguage : 'en-US';

// Get the hash value in the current URL
const currentHash = window.location.hash;

// IE browser detection
function isIE() {
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);
    return isIE;
}

// Dynamically introduce JS
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

// Dynamically introduce CSS
function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    document.head.appendChild(link);
}

// Dynamic switching of page content
function changePage(title, callback) {
    document.title = title + separator + WebName; // Set site title

    // Create a new <script> element
    var scriptElement = document.createElement('script');
    scriptElement.onload = callback; // Set callback function

    // Set the script's src attribute to load the script
    scriptElement.src = 'assets/js/index.js';
    document.body.appendChild(scriptElement); // Add script to page
    
}

// Change language related
function changeLanguage(selectedLanguage) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = lang[selectedLanguage][key];
        element.textContent = translation;
    });
}

// Output repo and version information
console.log('Powered by Lucky-Star.\nCopyright © ECat Plus Community.\nRepo: https://github.com/ECatPlus/Lucky-Star\nVersion: Development');

// Initialization page language
changeLanguage(defaultLanguage);

// Set site title
document.title = WebName;

// Modify language tag
//var languageUsed = document.documentElement.lang;
document.documentElement.lang = defaultLanguage;

// Introduce default styles
loadCSS(staticCDN + 'assets/css/index.css');

// Introducing modified version of Font-Awesome
loadCSS(staticCDN + 'static/font-awesome/css/font-awesome.css');

// Output page
var content = document.getElementById("content");

// Before loading the loading page
var loadingContainer = document.createElement("div");
//loadingContainer.id="loading"
loadingContainer.classList.add('loading-container');
var loadingLogo = document.createElement("img");
loadingLogo.classList.add('loading-logo');
loadingLogo.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAC7ElEQVRYCb1XS2sTURQ+ZxJbTVILVRGND8R2oQQ3DYguXVYqusgidkQFcaUL/0E3Sv+B4EKxSajQnQj+A0FINi1SsNWNiIgaaE2mRJscz5mkk2ky92YerRdu59zz+L4vd25uTgEiDPp964rMCBAQj1IMSE+kngguIQKFwTLCFNmkdfMaPy/a0zKnw+KEEkA0a/DnfeyQsm37HId/I5QAqK/eZIqMiybT8blc/kz0l9bNIrq/DyxrhXfgbNfLFsInSCTOIT77u8M/YBF8B2rWvT5yIRFBEgs4Au0AUe4A1IdXmSOt4PkKycYE4uKmIt7nDrYD9eEHGnIBT7NAyfE9fO8AVXOjMLT/M+/1mB4dq9BoncFDpQ19XjuqFEC1/FHA+CRAKwuEWU6XecwPKOd841nmi6oMYJSBtiqYWvjuVWsLoI38YTBiWUAmatEkP5mYTnoVhPfhF74yK2BghZ9laDXLeHDhJ1LNfM6gd8MDR6p8YcCfxiOGWI4EE654WbgNHFtcB4Om+HvMB+w/DYQ14RRu5xDSujkOMXjHEo7ssYwf0ITLOFpcEx7nHrAdBsqvmrWHAiw+hNPb5DsEyAIThfd8p+fZbMp6l0dTsG0OF7CzA9s+TBZf83l4uL3etSdj2tg9gH0CJI4jxaf8d64nN8IS59qY/RDOIewNcZuFUDffsH+qNxZw/RaSxauqls1zB4SgU1ANSOaV/ktFLslKAR2kU16IAX1ajAECSFvsU8hpXZ5SADcfMX4RJ3TFPmPpNpZ3tlIAbMaOc0m0/xvanPEOlqcCtYCtIe3WeaKpnBostQCjOej9f+Se4Q5z3ubJtmZosNQCAFQCVpjK5ObzPKZKLzFVnBfb9gFIzGuosDRfQ4KeV0AfuDXLQ3I8w6Ql7nyd3wuxxScxOwc41z0QQwjoFi1xC5WD5MQFHCm8QpxtubHdtsQkR3LtGoAlO973YdxVCptbtQLVzev2lazIGeSWWrJmblBtZl6V+w92V9xNXwYbfQAAAABJRU5ErkJggg==";
loadingLogo.alt = "LOGO";
var loadingText = document.createElement("p");
var loadingTextNode = document.createTextNode('Lucky Star');
loadingText.style.color = 'skyblue';
loadingText.style.fontSize = '40px';
loadingText.appendChild(loadingTextNode);
loadingContainer.appendChild(loadingLogo);
loadingContainer.appendChild(loadingText);
content.appendChild(loadingContainer);

// What to do after loading is complete.
window.onload = function () {
    // Remove Lucky Star logo
    loadingText.removeChild(loadingTextNode);

    // Modify the site logo
    loadingLogo.src = WebLogo;

    // Detect IE and display prompts
    if (isIE()) {
        var NoIE = document.createTextNode(lang['zh-CN']['NoIE']);
        loadingText.style.color = 'red';
        loadingText.style.fontSize = '20px';
        loadingText.appendChild(NoIE);
    } else {
        var loadingSpinner = document.createElement("div");
        loadingSpinner.classList.add('loading-spinner');
        loadingContainer.appendChild(loadingSpinner);
        setTimeout(function() {
            content.removeChild(loadingContainer);
            if (currentHash === "#/index") {
                changePage("首页" , function () {
                    var homepageContainer = document.createElement("p");
                    var homepageContainerNode = document.createTextNode('这是首页内容');
                    homepageContainer.appendChild(homepageContainerNode);
                    content.appendChild(homepageContainer);
                });
            } else if (currentHash === "#/about") {
                changePage("关于" , function () {
                    
                });
            } else {
                // Jump to homepage by default
                window.location.href = "#/index";

                // Refresh so the content appears
                location.reload();
            }
        }, 500);
    }
};