document.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        window.location.href = "dates.html"; // Change to your desired page
    }
});

function eraseEffect(element, finalText, delay = 80){
    let index = element.innerText.length; //start at full text length

    function erase(){
        if (index > 0){
            element.innerText = element.innerText.slice(0, index - 1);
            index--;
            setTimeout(erase, delay);
        } else{
            element.innerHTML = `<span style ="font-weight: bold; color: rgb(255, 0, 212);">${finalText}</span>`;
        }
    }
    setTimeout(erase, 1000); //start erasing after a delay
}
//detect which page is currently loaded
const isThursday = document.querySelector(".google227_erasetext") !== null;
const isFriday = document.querySelector(".google228_erasetext") !== null;
const isSaturday = document.querySelector(".google31_erasetext") !== null;
const isSunday = document.querySelector(".google32_erasetext") !== null;
const isMonday = document.querySelector(".google33_erasetext") !== null;
const isTuesday = document.querySelector(".google34_erasetext") !== null;
const isWednesday = document.querySelector(".google35_erasetext") !== null;

const finalWordsThursday = ["(105 times)", "(10 times)", "(10 times)", "(5 times)", "(5 times)"];
const finalWordsFriday = ["(150 times)", "(15 times)", "(9 times)", "(1 times)", "(10 times)"];
const finalWordsSaturday = ["(5 times)", "(2 times)", "(30 times)", "(25 times)"];
const finalWordsSunday = ["(3 times)", "(8 times)", "(12 times)", "(25 times)"];
const finalWordsMonday = ["(5 times)", "(13 times)", "(5 times)", "(10 times)", "(30 times)", "(30 times)"];
const finalWordsTuesday = ["(9 times)", "(7 times)", "(21 times)", "(60 times)"];
const finalWordsWednesday = ["(10 times)", "(3 times)", "(15 times)", "(3 times)", "(5 times)", "(45 times)"];


if (isThursday){
    document.querySelectorAll(".essay227_erasetext, .google227_erasetext, .text227_erasetext, .email227_erasetext, .note227_erasetext").forEach((element, i) => {
        eraseEffect(element, finalWordsThursday[i] || "(default)");
    }); 
} else if (isFriday){
    document.querySelectorAll(".essay228_erasetext, .google228_erasetext, .text228_erasetext, .note228_erasetext, .assignment228_erasetext").forEach((element, i) => {
        eraseEffect(element, finalWordsFriday[i] || "(default)");
    });
} else if (isSaturday){
    document.querySelectorAll(".essay31_erasetext, .google31_erasetext, .note31_erasetext, .assignment31_erasetext").forEach((element, i) => {
        eraseEffect(element, finalWordsSaturday[i] || "(default)");
    })
} else if (isSunday){
    document.querySelectorAll(".essay32_erasetext, .google32_erasetext, .text32_erasetext, .assignment32_erasetext").forEach((element, i) => {
        eraseEffect(element, finalWordsSunday[i] || "(default)");
    })

} else if (isMonday){
    document.querySelectorAll(".essay33_erasetext, .google33_erasetext, .text33_erasetext, .email33_erasetext, .note33_erasetext, .assignment33_erasetext").forEach((element, i) => {
        eraseEffect(element, finalWordsMonday[i] || "(default)");
    })
} else if (isTuesday){
    document.querySelectorAll(" .google34_erasetext, .text34_erasetext, .note34_erasetext, .assignment34_erasetext").forEach((element, i) => {
        eraseEffect(element, finalWordsTuesday[i] || "(default)");
    })
} else if (isWednesday){
    document.querySelectorAll(" .essay35_erasetext, .google35_erasetext, .text35_erasetext, .email35_erasetext, .note35_erasetext, .assignment35_erasetext").forEach((element, i) => {
        eraseEffect(element, finalWordsWednesday[i] || "(default)");
    })
}


















