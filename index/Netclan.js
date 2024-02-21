const togglebar = document.getElementsByClassName('toggle-bar')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

togglebar.addEventListener('click',() => {
    navbarlinks.classList.toggle('active')
})


function sublistmenuToggle(){
    const toggleSublistmenu =document.querySelector('.sub-listmenu');
    toggleSublistmenu.classList.toggle('active')
}

// lastmobile page js

function agreesublistToggle(){
    const toggleSublistmenu =document.querySelector('.agree-sublist');
    toggleSublistmenu.classList.toggle('active')
    document.querySelector('#agree-downmobile').style.rotate=180;
}

function wsublistToggle(){
    const toggleSublistmenu =document.querySelector('.w-sublist');
    toggleSublistmenu.classList.toggle('active')
}


function reachsublistToggle(){
    const toggleSublistmenu =document.querySelector('.reach-sublist');
    toggleSublistmenu.classList.toggle('active')
}


// how netclan work

function refineToggle(){
    const toggleSublistmenu =document.querySelector('.refine-clk');
    toggleSublistmenu.classList.toggle('active')
}

function exploreToggle(){
    const toggleSublistmenu =document.querySelector('.explore-clk');
    toggleSublistmenu.classList.toggle('active')
}

function networkToggle(){
    const toggleSublistmenu =document.querySelector('.network-clk');
    toggleSublistmenu.classList.toggle('active')
}

function contactsToggle(){
    const toggleSublistmenu =document.querySelector('.contacts-clk');
    toggleSublistmenu.classList.toggle('active')
}

function callsToggle(){
    const toggleSublistmenu =document.querySelector('.calls-clk');
    toggleSublistmenu.classList.toggle('active')
}