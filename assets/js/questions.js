const question = document.getElementById("question-title");
const selection = Array.from(document.getElementsByClassName("selection-text"));
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
const startOverButton = document.getElementById("startOverButton");
const popup = document.getElementById("popup");
const questionProgress = document.getElementById("question-progress");


let currentQuestion = {};
const personalityTypes = {
    A: "Guide",
    B: "Leader",
    C: "Creator",
    D: "Maker",
};

let questionCounter = 0;
let answers = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
};



let questions = [
    {
        question: "Which of the following sounds most like what you're about?",
        options: [
            { value: "A", text: "Values and wisdom" },
            { value: "B", text: "Integrity and perfection" },
            { value: "C", text: "Work hard, play hard" },
            { value: "D", text: "Stability and balance" },
        ],
    },
    {
        question: "What role do you play in your friends circle/family?",
        options: [
            {
                value: "A",
                text: "I am comfortable dealing with conflict and helping people find middle ground.My role is the mediator.",
            },
            {
                value: "B",
                text: "I make sure everything and everyone is taken care of. My role is the protector.",
            },
            {
                value: "C",
                text: "I help my family understand work ethic, hustle, and the value of having resources. My role is material support.",
            },
            {
                value: "D",
                text: "I focus on nurturing and wanting a healthy and content family. My role is emotional support.",
            }

        ],
    },
    {
        question: "What is the most important to you in a partner?",
        options: [
            {
                value: "A",
                text: "Honest and smart",
            },
            {
                value: "B",
                text: "Strong presence and power",
            },
            {
                value: "C",
                text: "Fun and dynamic",
            },
            {
                value: "D",
                text: "Reliable and respectful",
            },
        ],
    },
    {
        question: "What do you watch most often on TV?",
        options: [
            {
                value: "A",
                text: "Documentaries, biographies, human observations",
            },
            {
                value: "B",
                text: "Entertainment, politics, current affairs",
            },
            {
                value: "C",
                text: "Comedy, sport, drama, motivational stories",
            },
            {
                value: "D",
                text: "Soap operas, reality TV, family, gossip, daytime shows",
            },
        ],
    },
    {
        question: "Which best describes how you behave when under stress?",
        options: [
            {
                value: "A",
                text: "Calm, composed, balanced",
            },
            {
                value: "B",
                text: "Irritated, frustrated, angry",
            },
            {
                value: "C",
                text: "Moody, loud, restless",
            },
            {
                value: "D",
                text: "Lazy, depressed, worried",
            },
        ],
    },
    {
        question: "What causes you the most pain?",
        options: [
            {
                value: "A",
                text: "Feeling like I don't live up to my own expectations",
            },
            {
                value: "B",
                text: "The state of world",
            },
            {
                value: "C",
                text: "A sense of rejection",
            },
            {
                value: "D",
                text: "Feeling disconnected from friends and family",
            },
        ],
    },
    {
        question: "What is your favourite way of working?",
        options: [
            {
                value: "A",
                text: "Alone, but with mentors and guides",
            },
            {
                value: "B",
                text: "In a team as a leader",
            },
            {
                value: "C",
                text: "Independently, but with strong network",
            },
            {
                value: "D",
                text: "In a team as a member",
            },
        ],
    },
    {
        question: "How would your ideal self spend spare time?",
        options: [
            {
                value: "A",
                text: "Reading, in deep discussion, and reflecting",
            },
            {
                value: "B",
                text: "Learning about issues and/or attending political events",
            },
            {
                value: "C",
                text: "There's no such thing as spare time! Networking, connecting, working",
            },
            {
                value: "D",
                text: "Enjoying time with family and friends",
            },
        ],
    },
    {
        question: "How would you describe yourself in three words?",
        options: [
            {
                value: "A",
                text: "Idealistic, introverted, insightful",
            },
            {
                value: "B",
                text: "Driven, dedicated, determined",
            },
            {
                value: "C",
                text: "Passionate, motivated, friendly",
            },
            {
                value: "D",
                text: "Caring, loving, loyal",
            },
        ],
    },
    {
        question: "In what type of environment do you work best?",
        options: [
            {
                value: "A",
                text: "Remote, silent and still, natural",
            },
            {
                value: "B",
                text: "A meeting room or gathering space",
            },
            {
                value: "C",
                text: "Anywhere and everywhere ( during my commute, in a coffee shop, in my bedroom)",
            },
            {
                value: "D",
                text: "A space specific to my type of work: home, office, laboratory",
            },
        ],
    },
    {
        question: "What's your work style?",
        options: [
            {
                value: "A",
                text: "Slow and reflective",
            },
            {
                value: "B",
                text: "Focused and organized",
            },
            {
                value: "C",
                text: "Fast and rushed",
            },
            {
                value: "D",
                text: "Specific and deliberate",
            },
        ],
    },
    {
        question: "How would you like to make a difference in the world?",
        options: [
            {
                value: "A",
                text: "Through spreading the knowledge",
            },
            {
                value: "B",
                text: "Through politics and activism",
            },
            {
                value: "C",
                text: "Through business and/or leadership",
            },
            {
                value: "D",
                text: "Through local community",
            },
        ],
    },
    {
        question: "How do you prepare for a vacation?",
        options: [
            {
                value: "A",
                text: "By picking my reading material",
            },
            {
                value: "B",
                text: "By having focused plan of key sites to visit",
            },
            {
                value: "C",
                text: "With a list of the best bars, clubs and restaurants",
            },
            {
                value: "D",
                text: "With an easy going attitude",
            },
        ],
    },
    {
        question: "How do you deal with tough conversations?",
        options: [
            {
                value: "A",
                text: "Look for a compromise",
            },
            {
                value: "B",
                text: "Fight for the most objective truth",
            },
            {
                value: "C",
                text: "Fight to prove I'm right",
            },
            {
                value: "D",
                text: "Avoid confrontation",
            },
        ],
    },
    {
        question: "If someone in your life is having a bad week, what do you do?",
        options: [
            {
                value: "A",
                text: "Give them advice and guidance",
            },
            {
                value: "B",
                text: "Become protective and encourage them to improve",
            },
            {
                value: "C",
                text: "Urge them to have a drink or take a walk with me",
            },
            {
                value: "D",
                text: "Got to them and keep them company",
            },
        ],
    },
    {
        question: "How do you see rejection?",
        options: [
            {
                value: "A",
                text: "It's part of life",
            },
            {
                value: "B",
                text: "It's a challenge I can rise to meet",
            },
            {
                value: "C",
                text: "It's frustrating but I'll move on",
            },
            {
                value: "D",
                text: "It's a real setback",
            },
        ],
    },
    {
        question: "At an event/party how do you spend your time?",
        options: [
            {
                value: "A",
                text: "I have a meaningful discussion with one or two people",
            },
            {
                value: "B",
                text: "I usually talk with group of people",
            },
            {
                value: "C",
                text: "I help with whatever needs to be done",
            },
            {
                value: "D",
                text: "I somehow end up the center of attention",
            },
        ],
    },
    {
        question: "How do you feel if you make a mistake?",
        options: [
            {
                value: "A",
                text: "I feel guilty and ashamed",
            },
            {
                value: "B",
                text: "I have to tell everyone",
            },
            {
                value: "C",
                text: "I want to hide it",
            },
            {
                value: "D",
                text: "I reach out to someone supportive",
            },
        ],
    },
    {
        question: "What do you do when you have to make a big decision?",
        options: [
            {
                value: "A",
                text: "I reflect privately",
            },
            {
                value: "B",
                text: "I ask my mentors and guides",
            },
            {
                value: "C",
                text: "I weigh the pros and cons",
            },
            {
                value: "D",
                text: "I talk to family and friends",
            },
        ],
    },
    {
        question: "Which best describes your daily routine?",
        options: [
            {
                value: "A",
                text: "It changes moment to moment",
            },
            {
                value: "B",
                text: "It's very focused and organized",
            },
            {
                value: "C",
                text: "I follow the best opportunity that comes up",
            },
            {
                value: "D",
                text: "It's simple and scheduled",
            },
        ],
    },

    // Add the other questions here
];

function startQuiz() {
    questionCounter = 0;
    answers = { A: 0, B: 0, C: 0, D: 0 };
    getNewQuestion();
};

let selectedOptionIndex = -1;

function getNewQuestion() {
    if (questionCounter < questions.length) {
        currentQuestion = questions[questionCounter];
        question.innerText = currentQuestion.question;

        // Update question progress
        questionProgress.innerText = `Question ${questionCounter + 1} of ${questions.length}`;

        selection.forEach((option, index) => {
            option.innerText = currentQuestion.options[index].text;
            option.style.backgroundColor = "transparent";
            option.addEventListener("click", () => {
                selectedOptionIndex = index;
                selectOption(index, currentQuestion.options[index].value);
            });
        });

        nextButton.disabled = selectedOptionIndex === -1;
    } else {
        // No more questions, show the submit button
        nextButton.style.display = "none";
        submitButton.style.display = "block";
    }
}

function selectOption(selectedIndex, optionValue) {
    selection.forEach((option, index) => {
        option.style.backgroundColor = index === selectedIndex ? "#DE770F" : "transparent";
    });
    answers[optionValue]++;
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    if (selectedOptionIndex !== -1) {
        questionCounter++;
        selectedOptionIndex = -1;
        getNewQuestion();
    } else {
        showPopup("Please select your option");
    }
});

function showPopup(message) {
    const popup = document.getElementById("popup");
    popup.innerHTML = `<p>${message}</p>`;
    popup.style.display = "block";
}

function hidePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

submitButton.addEventListener("click", () => {
    // Display the personality description and the "Start Over" button
    question.innerText = "Your Personality Description";
    selection.forEach((option) => option.style.display = "none");
    submitButton.style.display = "none";
    startOverButton.style.display = "block";
    displayPersonalityDescription(calculatePersonalityType());
});

function displayPersonalityDescription(personalityType) {
    const descriptions = {
        A: {
            general: "Description: People with the Guide personality type are known for their wisdom and insight. They often seek to provide guidance and mentorship to others, serving as a source of knowledge and advice.",
            ignorance: "Mode of Ignorance: In this mode, Guides may exhibit ignorance, confusion, or doubt. They might struggle to find clarity in certain situations.",
            impulse: "Mode of Impulse: Under the mode of impulse, Guides may act impulsively or react emotionally to challenges, deviating from their typical wisdom-based approach.",
            goodness: "Mode of Goodness: In the mode of goodness, Guides display their characteristic wisdom and clarity, offering valuable insights to those around them.",
        },
        B: {
            general: "Description: Leaders are characterized by their strong presence and power. They are natural-born leaders who often take charge in various situations and are dedicated to maintaining integrity and perfection.",
            ignorance: "Mode of Ignorance: In this mode, Leaders may exhibit arrogance or authoritarian behavior, losing sight of their goal to uphold integrity.",
            impulse: "Mode of Impulse:  Under the mode of impulse, Leaders might become impulsive or aggressive, seeking dominance and control.",
            goodness: "Mode of Goodness: In the mode of goodness, Leaders effectively utilize their leadership qualities to guide and protect others with integrity and perfection.",
        },
        C: {
            general: "Description: Creators are dynamic and resourceful individuals. They emphasize the value of hard work, creativity, and the acquisition of resources. They often seek to transform ideas into reality.",
            ignorance: "Mode of Ignorance:  In this mode, Creators may become obsessed with material gains or excessive consumption, losing sight of their creative and resourceful nature.",
            impulse: "Mode of Impulse: Under the mode of impulse, Creators can be prone to restlessness and a frenetic pace, often seeking quick results.",
            goodness: "Mode of Goodness: In the mode of goodness, Creators utilize their resourcefulness to build and create while promoting a sense of balance and sustainable growth.",
        },
        D: {
            general: "Description: Makers are known for their focus on stability and balance. They are nurturing and prioritize healthy and content relationships with family and friends.",
            ignorance: "Mode of Ignorance:  In this mode, Makers may become lazy or stagnant, hindering their ability to maintain balance and stability.",
            impulse: "Mode of Impulse: Under the mode of impulse, Makers may exhibit worry and overprotectiveness, disrupting their natural nurturing tendencies.",
            goodness: "In the mode of goodness, Makers are at their best, providing stable and caring support to their loved ones and nurturing positive relationships.",
        },
    };

    const descriptionContainer = document.createElement("div");
    descriptionContainer.innerHTML = `
        <p>${descriptions[personalityType].general}</p>
        <p>Mode of Ignorance: ${descriptions[personalityType].ignorance}</p>
        <p>Mode of Impulse: ${descriptions[personalityType].impulse}</p>
        <p>Mode of Goodness: ${descriptions[personalityType].goodness}</p>
    `;

    question.appendChild(descriptionContainer);
}

function calculatePersonalityType() {
    const max = Math.max(answers.A, answers.B, answers.C, answers.D);
    return Object.keys(answers).find((key) => answers[key] === max);
}

startOverButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Redirect to the home page
});

startQuiz();