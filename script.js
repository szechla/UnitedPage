const players = [{
        name: "Ole Gunnar Solskjear",
        image: "img/ogs.jpg"
    },
    {
        name: "David De Gea",
        image: "img/degea.png"
    },
    {
        name: "Antonio Valencia",
        image: "img/valencia.png"
    },
    {
        name: "Ashley Young",
        image: "img/young.png"
    },

    {
        name: "Victor Lindelof",
        image: "img/lindelof.png"
    },
    {
        name: "Eric Bailly",
        image: "img/bailly.png"
    },
    {
        name: "Luke Shaw",
        image: "img/shaw.png"
    },
    {
        name: "Diogo Dalot",
        image: "img/dalot.png"
    },
    {
        name: "Ander Herrera",
        image: "img/herrera.png"
    },
    {
        name: "Nemanja Matic",
        image: "img/matic.png"
    },
    {
        name: "Paul Labile Pogba",
        image: "img/pogba.png"
    },
    {
        name: "Andreas Pereira",
        image: "img/pereira.png"
    },
    {
        name: "Jesse Lingard",
        image: "img/lingard.png"
    },
    {
        name: "Anthony Martial",
        image: "img/martial.png"
    },
    {
        name: "Marcus Rashford",
        image: "img/rashford.png"
    },
    {
        name: "Romelu Lukaku",
        image: "img/lukaku.png"
    }
]

const html_beg = `<div class="carousel-item"><img src="`;
const html_mid = `" class="d-inline-block slide-image" alt="..."><div class="d-inline-block text-center text-light"><h2 class="m-auto">`;
const html_end = `</h2></div></div>`;
const navbarTargets = $(".navBarTarget");

//Fixing navigation

const targets = ["home", "news", "gallery", "widgets"]
const mainElements = $("#main-content").children();

function checkTargetsPosition() {
    for (i = 0; i < targets.length; i++) {
        let navbarHeight = $("nav").outerHeight();
        $("#header").css("margin-top", navbarHeight)
            //Make navbar targets - virtual divs
        $("#navbarTargets").append(`<div id="${targets[i]}" class="navbarTarget"></div>`)
            //Set targets positions
        let tempTarget = $(".navbarTarget")[i]
        let tempPrevElement = $("#main-content").children()[i - 1];
        if (i === 0) {
            $(tempTarget).css("top", 0)
        } else {
            //Find height and position of previous element
            let prevTargetHeight = $(tempPrevElement).outerHeight();
            let prevTargetPosition = parseFloat($(tempTarget).prev().css("top"));
            //Setting new position
            $(tempTarget).css("top", prevTargetHeight + prevTargetPosition)
        }
    }
}
checkTargetsPosition()

document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        checkTargetsPosition();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });

    });
});

//Image slider

function makecarosuel() {
    for (i = 1; i < players.length; i++) {
        $(".carousel-inner").append(html_beg + players[i].image + html_mid + players[i].name + html_end);
        // var indicator_html = `<li data-target="#carouselExampleIndicators" data-slide-to="`
        // // indicator_html += i
        // // indicator_html += `></li>`
        // // console.log(indicator_html);
        // // $("ol").append(indicator_html)
    }
}

makecarosuel();


//Weather widget
! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'weatherwidget-io-js');