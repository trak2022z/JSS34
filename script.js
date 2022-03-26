'use strict';
(function() {
    window.addEventListener('load', init);

async function init() {
        
async function firstBtnClick() {
return new Promise(function (resolve) {
let myBtn = qs('button:nth-child(1)');
myBtn.addEventListener('click', resolve);
});
}
      
function nextBtnClick() {
return new Promise(function (resolve) {
let myBtn = qs('button:nth-child(2)');
myBtn.addEventListener('click', resolve);
});
}

await firstBtnClick();
console.log('B1');
await nextBtnClick();
console.log('B2');    



    }

    /** ---- Helper Functions  ---- */

    function gen(tagName) {
      return document.createElement(tagName);
    }

    function id(idName) {
      return document.getElementById(idName);
    }

    function qs(selector) {
      return document.querySelector(selector);
    }

    function qsa(selector) {
      return document.querySelectorAll(selector);
    }
})();








    



