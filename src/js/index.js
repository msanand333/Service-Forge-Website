import "../scss/home.scss";
//Date retrieving function
(function () {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    Date.prototype.getMonthName = function () {
        return months[this.getMonth()];
    };
    Date.prototype.getDayName = function () {
        return days[this.getDay()];
    };
})();



const book = document.querySelector('#book');
const bookMobile = document.querySelector('#book-mobile');
const aboutIndustry = document.querySelector('#about-industry');
const setmoreIframeWrapper = document.querySelector('#setmore-iframe-wrapper');
const slotListNode = document.querySelectorAll('.slot-list .days');
const viewSlot=document.querySelector('#view-slot');
const slotDropdown=document.querySelector('#slot-dropdown');

book.addEventListener('click', () => {
    aboutIndustry.classList.add('hide');
    setmoreIframeWrapper.classList.remove('hide');
})

bookMobile.addEventListener('click', () => {
    aboutIndustry.classList.add('hide');
    setmoreIframeWrapper.classList.remove('hide');
})

viewSlot.addEventListener('click',()=>{
    slotDropdown.classList.toggle('open');
})


var now = new Date();

var day = now.getDayName();
var month = now.getMonthName();

slotListNode.forEach((element) => {

    if (element.textContent == day) {
        element.classList.add('today');
    }
})



