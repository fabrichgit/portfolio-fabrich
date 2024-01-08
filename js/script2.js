function go() {

    circle();

    var array = [
        {
            class: "html",
            anim: "animatehtml"
        },
        {
            class: "figma",
            anim: "animatefigma"
        },
        {
            class: "javascript",
            anim: "animatejavascript"
        },
        {
            class: "css",
            anim: "animatecss"
        }
    ];

    array.forEach(element => {
        document.querySelector(`.${element.class}`).classList.add(`${element.anim}`);
    });

    setTimeout(() => {

        array.forEach(element => {
            document.querySelector(`.${element.class}`).classList.remove(`${element.anim}`);
        });

    }, 5000);
}

// Fonction qui sera appelée lorsque la section est survolée ou visible
function onSectionIntersect(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // La section est survolée ou visible, exécutez la fonction go() uniquement si elle n'était pas visible auparavant
            if (!isSectionVisible) {
                go();
                isSectionVisible = true;
            }
        } else {
            // La section n'est plus survolée, réinitialisez la variable isSectionVisible pour pouvoir exécuter à nouveau go() lorsqu'elle sera de nouveau visible
            isSectionVisible = false;
        }
    });
}

// Options de l'Intersection Observer
const options = {
    root: null, // Utilisez null pour suivre l'intersection par rapport au viewport
    rootMargin: '0px', // Marge autour du viewport (0px signifie aucun décalage)
    threshold: 0.5 // La section est considérée comme survolée lorsque 50% ou plus est visible
};

// Créer l'Intersection Observer en passant la fonction de rappel et les options
const observer = new IntersectionObserver(onSectionIntersect, options);

// Sélectionnez la section que vous voulez surveiller
const sectionToWatch = document.querySelector('.skills');

// Commencez à observer la section
observer.observe(sectionToWatch);


















var menuIcon = document.getElementById("menu-icon");
var newList = document.querySelector(".navlist");

var open = false;

menuIcon.addEventListener("click", () => {
    newList.classList.toggle("first");
    newList.classList.toggle("toogleMenu");
    if (open) {
        menuIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 255);transform: ;msFilter:;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
        `;
        open = false;
    } else {
        menuIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 255);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
        `;
        open = true;
    }

})




let words = document.querySelectorAll(".word");
words.forEach(word => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(letter => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

};
changeText();
setInterval(changeText, 3000);





function circle() {

    const circles = document.querySelectorAll(".circle");
    circles.forEach(elem => {
        var dots = elem.getAttribute("data-dots");
        var marked = elem.getAttribute("data-percent");
        var percent = Math.floor(dots * marked / 100);
        var points = "";
        var rotate = 360 / dots;

        for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
            elem.innerHTML = points;
        }

        const pointsMarked = elem.querySelectorAll(".points");
        for (let i = 0; i < percent; i++) {
            pointsMarked[i].classList.add("marked");
        }
    });

}






document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
});




var mixer = mixitup(".portfolio-gallery");




let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu)




const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollX > 50);
})