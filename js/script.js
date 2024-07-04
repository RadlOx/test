var containerMenu = document.getElementById ('containerMenu');
var boxClose = document.getElementById ('box-closeOpen');
var closeIcon2 = document.getElementById ('close-iconTop');
var closeIcon1 = document.getElementById ('close-iconMid');
var closeIcon3 = document.getElementById ('close-iconBottom');
var filterCont = document.getElementById ('filterContainer');
var btnFilter = document.getElementById ('btnFilter');

boxClose.addEventListener ('click' , function() {
    containerMenu.classList.toggle('slideContainer');
    closeIcon2.classList.toggle('rotate-iconTop');
    closeIcon1.classList.toggle('rotate-iconMid');
    closeIcon3.classList.toggle('rotate-iconBottom');
})

btnFilter.addEventListener ('click' , function() {
    filterCont.classList.toggle('slideFilterCont');
    btnFilter.classList.toggle ('btnChangeColor');
})
