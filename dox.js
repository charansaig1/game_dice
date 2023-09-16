let images = ["die 1.png",
    "die 2.png",
    "die 3.png",
    "die 4.png",
    "die 5.png",
    "die 6.png",
];
let die = document.querySelectorAll("img")

function roll() {
    die.forEach(function (die) {
        die.classList.add("shake");
    });



    setTimeout(function () {
        die.forEach(function (die) {
            die.classList.remove("shake");
        });

        let dieOnevalue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);
        console.log(dieTwoValue, dieOnevalue);
        document.querySelector("#die-1").setAttribute("src", images[dieOnevalue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your Role is" + ((dieOnevalue + 1) + (dieTwoValue + 1));
    },
        1000
    );

    
}