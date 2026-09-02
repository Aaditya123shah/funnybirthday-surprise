
// ============================================
// BIRTHDAY MINI GAME 🎂🐒
// ============================================


// -------------------------------
// QUESTIONS
// -------------------------------

const questions = [

    {
        question: "Sabse pehle ek easy question... 👀\nTumhara famous nickname kya hai?",

        answers: [
            "ruaa😂😎",
            "Aaru 🥰",
            "bagar😊",
            "Chimpanzee 🐒"
        ],

        correct: 3,

        wrong:
            "Areyy 😭 apna nickname bhi bhool gaye?"
    },


    {
        question:
            "Ek chhota sa secret accidentally reveal hua tha... 👀\nUsme se kaunsa part yaad hai?",

        answers: [
            "Ru 🤨",
            "NASA password 🚀",
            "Secret code 🔐",
            "Kuch aesa jo mujhe na pata ho 🤨"
        ],

        correct: 0,

        wrong:
            "Nope 😂 Itni security ke baad bhi galat?"
    },


    {
        question:
            "Birthday ke din sabse important kaam kya hai(only for masti)? 🎂",

        answers: [
            " bhabhi ji ko yaad karna🤣💁‍♀️",
            " secret revel karna  🤨",
            " jawab dena 🤭",
            "NASA ko secret dena 🚀"
        ],

        correct: 2,

        wrong:
            "Wrong! 😂 sahi jawab pata h to bolta kyu nhi h aaru...🤨✨😁!"
    }

];


let currentQuestion = 0;


// -------------------------------
// START GAME
// -------------------------------

function startGame() {

    switchPage("page1", "questionPage");

    currentQuestion = 0;

    loadQuestion();
}


// -------------------------------
// LOAD QUESTION
// -------------------------------

function loadQuestion() {

    const questionData = questions[currentQuestion];

    const questionElement =
        document.getElementById("question");

    const answersContainer =
        document.getElementById("answers");

    const reaction =
        document.getElementById("reaction");

    const questionNumber =
        document.getElementById("questionNumber");

    const progress =
        document.getElementById("progress");


    // Question number

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;


    // Progress bar

    const progressPercent =
        ((currentQuestion + 1) / questions.length) * 100;

    progress.style.width =
        `${progressPercent}%`;


    // Question text

    questionElement.textContent =
        questionData.question;


    // Clear previous answers

    answersContainer.innerHTML = "";

    reaction.textContent = "";


    // Create answer buttons

    questionData.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.classList.add("answer");

            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () => {

                    checkAnswer(index);

                }
            );


            answersContainer.appendChild(button);

        }
    );

}


// -------------------------------
// CHECK ANSWER
// -------------------------------

function checkAnswer(selectedAnswer) {

    const questionData =
        questions[currentQuestion];

    const reaction =
        document.getElementById("reaction");


    // ---------------------------
    // CORRECT
    // ---------------------------

    if (selectedAnswer === questionData.correct) {

        reaction.textContent =
            "Correct! 😌✨ Unlocking the next page...";


        createConfetti(30);


        // Disable all buttons

        const buttons =
            document.querySelectorAll(".answer");

        buttons.forEach(button => {

            button.disabled = true;

            button.style.opacity = "0.6";

        });


        setTimeout(() => {

            currentQuestion++;


            // More questions

            if (currentQuestion < questions.length) {

                loadQuestion();

            }

            // All questions completed

            else {

                switchPage(
                    "questionPage",
                    "birthdayPage"
                );

                createConfetti(80);

            }

        }, 1000);

    }


    // ---------------------------
    // WRONG
    // ---------------------------

    else {

        reaction.textContent =
            questionData.wrong;


        // Shake the game card

        const card =
            document.querySelector(".game-card");


        card.classList.remove("shake");


        // Force browser reflow

        void card.offsetWidth;


        card.classList.add("shake");

    }

}


// -------------------------------
// PAGE SWITCH
// -------------------------------

function switchPage(oldPage, newPage) {

    const oldElement =
        document.getElementById(oldPage);

    const newElement =
        document.getElementById(newPage);


    if (!oldElement || !newElement) {

        console.error(
            "Page not found:",
            oldPage,
            newPage
        );

        return;

    }


    oldElement.classList.remove("active");

    newElement.classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// -------------------------------
// SHOW FINAL PAGE
// -------------------------------

function showFinal() {

    switchPage(
        "birthdayPage",
        "finalPage"
    );


    createConfetti(60);

}


// -------------------------------
// REVEAL AARU 😌😂
// -------------------------------

function revealAaru() {

    const aaru =
        document.getElementById("aaru");


    aaru.classList.add("show");


    createConfetti(100);

    createHearts(30);

}


// -------------------------------
// CONFETTI
// -------------------------------

function createConfetti(amount = 30) {

    const container =
        document.getElementById("confetti");


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti-piece"
        );


        // Random horizontal position

        piece.style.left =
            Math.random() * 100 + "vw";


        // Random delay

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        // Random size

        const size =
            Math.random() * 8 + 5;


        piece.style.width =
            size + "px";

        piece.style.height =
            size + "px";


        // Random shape

        piece.style.borderRadius =
            Math.random() > 0.5
                ? "50%"
                : "2px";


        container.appendChild(piece);


        // Remove after animation

        setTimeout(() => {

            piece.remove();

        }, 4000);

    }

}


// -------------------------------
// HEARTS 💗
// -------------------------------

function createHearts(amount = 15) {

    const emojis = [
        "💗",
        "💖",
        "💕",
        "💜",
        "💞"
    ];


    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");


        heart.textContent =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            Math.random() * 15 + 20 + "px";


        heart.style.zIndex =
            "9999";


        heart.style.pointerEvents =
            "none";


        heart.style.animation =
            "heartRise 3s ease-out forwards";


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 3000);

    }

}


// -------------------------------
// EXTRA ANIMATIONS
// -------------------------------

const extraStyle =
    document.createElement("style");


extraStyle.innerHTML = `

/* Wrong answer shake */

@keyframes shake {

    0% {
        transform: translateX(0);
    }

    20% {
        transform: translateX(-10px);
    }

    40% {
        transform: translateX(10px);
    }

    60% {
        transform: translateX(-8px);
    }

    80% {
        transform: translateX(8px);
    }

    100% {
        transform: translateX(0);
    }

}


/* Floating hearts */

@keyframes heartRise {

    0% {

        transform:
            translateY(0)
            scale(0.5);

        opacity: 0;

    }


    20% {

        opacity: 1;

    }


    100% {

        transform:
            translateY(-100vh)
            scale(1.3)
            rotate(20deg);

        opacity: 0;

    }

}


.game-card.shake {

    animation:
        shake 0.45s ease;

}

`;


document.head.appendChild(extraStyle);


// -------------------------------
// PAGE LOAD EFFECT
// -------------------------------

window.addEventListener(
    "load",
    () => {

        createSparkles(15);

    }
);


// -------------------------------
// SPARKLES ✨
// -------------------------------

function createSparkles(amount = 15) {

    for (let i = 0; i < amount; i++) {

        const sparkle =
            document.createElement("div");


        sparkle.textContent = "✨";


        sparkle.style.position =
            "fixed";


        sparkle.style.left =
            Math.random() * 100 + "vw";


        sparkle.style.top =
            Math.random() * 100 + "vh";


        sparkle.style.fontSize =
            Math.random() * 15 + 10 + "px";


        sparkle.style.pointerEvents =
            "none";


        sparkle.style.zIndex =
            "1";


        sparkle.style.animation =
            "sparkleFade 2s ease forwards";


        document.body.appendChild(sparkle);


        setTimeout(() => {

            sparkle.remove();

        }, 2000);

    }

}


// Sparkle animation

const sparkleStyle =
    document.createElement("style");


sparkleStyle.innerHTML = `

@keyframes sparkleFade {

    0% {

        opacity: 0;

        transform:
            scale(0)
            rotate(0deg);

    }

    50% {

        opacity: 1;

        transform:
            scale(1.2)
            rotate(90deg);

    }

    100% {

        opacity: 0;

        transform:
            scale(0)
            rotate(180deg);

    }

}

`;


document.head.appendChild(sparkleStyle);
// ============================================
// SECRET PAGE
// ============================================

function showSecretPage() {

    switchPage(
        "finalPage",
        "secretPage"
    );

}


// ============================================
// SECRET ANSWER
// ============================================

function submitSecret() {

    const input =
        document.getElementById("secretAnswer");

    const reaction =
        document.getElementById("secretReaction");

    const answer =
        input.value.trim();


    // Empty answer = don't allow leaving

    if (answer === "") {

        reaction.textContent =
            "Nahi nahi 😭 kuch toh answer do!";

        input.classList.add("shake");

        setTimeout(() => {

            input.classList.remove("shake");

        }, 500);

        return;

    }


    // Answer given!

    reaction.textContent =
        "Hmmmm... interesting answer. 👀";


    createConfetti(50);


    setTimeout(() => {

        revealSecret();

    }, 900);

}


// ============================================
// SECRET REVEAL
// ============================================

function revealSecret() {

    const secretPage =
        document.getElementById("secretPage");


    secretPage.innerHTML = `

        <div class="secret-box revealed">

            <div class="secret-icon">
                🤫✨
            </div>

            <span class="mini-title">
                CLASSIFIED INFORMATION UNLOCKED
            </span>

            <h1>
                SECRET REVEALED 👀
            </h1>

            <p>
                Tumhara secret hum already jaante the... 😌
            </p>

            <h2>
                Bas tumse officially confirm karwana tha. 😂🐒
            </h2>

            <p>
                Happy Birthday, Chimpanzee! 🎂💗
            </p>

        </div>

    `;

    createConfetti(100);
    createHearts(40);

}
// ============================================
// SECRET PAGE
// ============================================

function showSecretPage() {

    switchPage(
        "finalPage",
        "secretPage"
    );

}


// ============================================
// SEND ANSWER TO FORMSPREE
// ============================================

const secretForm =
    document.getElementById("secretForm");


if (secretForm) {

    secretForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();

            const input =
                document.getElementById("secretAnswer");

            const button =
                document.getElementById("secretSubmit");

            const reaction =
                document.getElementById("secretReaction");


            const answer =
                input.value.trim();


            // Empty answer
            if (answer === "") {

                reaction.textContent =
                    "Nahi nahi 😭 kuch toh likho!";

                return;
            }


            button.disabled = true;

            button.textContent =
                "Sending... 👀";


            try {

                const response =
                    await fetch(
                        "https://formspree.io/f/myeyjwpe",
                        {
                            method: "POST",

                            body:
                                new FormData(secretForm),

                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    reaction.textContent =
                        "Answer received... 👀✨";


                    createConfetti(60);


                    setTimeout(() => {

                        revealSecret();

                    }, 1000);


                } else {

                    throw new Error(
                        "Submission failed"
                    );

                }

            } catch (error) {

                reaction.textContent =
                    "Oops 😭 answer send nahi hua.";

                button.disabled = false;

                button.textContent =
                    "Try Again 🔐";

            }

        }
    );

}


// ============================================
// SECRET REVEAL
// ============================================

function revealSecret() {

    const secretPage =
        document.getElementById("secretPage");


    secretPage.innerHTML = `

        <div class="secret-box revealed">

            <div class="secret-icon">
                🤫✨
            </div>

            <span class="mini-title">
                CLASSIFIED INFORMATION UNLOCKED
            </span>

            <h1>
                SECRET REVEALED 👀
            </h1>

            <p>
                Answer successfully received. 😌
            </p>

            <h2>
                Okay Chimpanzee... ab jaa sakte ho. 😂🐒
            </h2>

            <p>
                Happy Birthday once again! 🎂💗
            </p>

        </div>

    `;


    createConfetti(100);

    createHearts(40);

}