/*
Errors1 (5 errors to fix)

This page is not working.  There are two talking buttons (Dave and Malissa).

When the Dave button is clicked, we should see “Hi my name is Dave. Thanks for clicking.” added to the page.

When the Malissa is clicked, we should see "Malissa here! Why am I stuck in this button!?" added to the page.

Your task is to find these 5 errors and fix them, so we have a working page.

*/

const daveButton = document.querySelector("#dave-button");
const malissaButton = document.querySelector("#malissa-button");
const talkingSpaceDive = document.querySelector("#talking-space");



function daveTalk(){
    return "Hi my name is Dave. Thanks for clicking.";
}

function malissaTalk(){
    return "Malissa here! Why am I stuck in this button!?";
}

daveButton.addEventListener("click", function (){
    talkingSpaceDive.innerHTML += "<div>" +daveTalk + "</div>"
})

malissaButton.addEventListener("click", function (){
    talkingSpaceDive.innerHTML += "<div>" + malissaTalk + "</div>"    
})