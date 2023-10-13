document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quiz");
    const questionTitle = document.getElementById("question-title");
    const nextButton1 = document.getElementById("nextButton1");
    const cancelButton1 = document.getElementById("cancelButton1");

    const questions = [
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
                    text: "I am comfortable dealing with conflict and helping people find middle ground. My role is the mediator.",
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
       
    

    const personalityTypes = {
        A: "Guide",
        B: "Leader",
        C: "Creator",
        D: "Maker",
    };

    let currentQuestion = 0;
    let answers = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
    };

    function showQuestion(questionIndex) {
        if (questionIndex < questions.length) {
            const currentQuestionData = questions[questionIndex];
            questionTitle.textContent = currentQuestionData.question;
            quizContainer.querySelectorAll(".main-question-answer-container").forEach((element, index) => {
                const answerKey = String.fromCharCode(65 + index); // A, B, C, D, ...
                const selectionText = element.querySelector(".selection-text");
                selectionText.textContent = currentQuestionData.answers[answerKey];
                selectionText.dataset.number = index + 1;
            });
        } else {
            showResult();
        }
    }

    function showResult() {
        const resultContainer = document.getElementById("result-container");
        resultContainer.innerHTML = ""; // Clear the result container

        // Find the personality type with the highest count
        let maxCount = 0;
        let personalityType = "";

        for (const answer in answers) {
            if (answers[answer] > maxCount) {
                maxCount = answers[answer];
                personalityType = answer;
            }
        }

        // Display the personality type result
        const resultTitle = document.createElement("h2");
        resultTitle.textContent = "Your Personality Type:";
        resultContainer.appendChild(resultTitle);

        const resultType = document.createElement("p");
        resultType.textContent = personalityTypes[personalityType];
        resultContainer.appendChild(resultType);
    }

    function onNextButtonClick() {
        const selectedAnswerNumber = answers.length % 4;
        const selectedAnswer = String.fromCharCode(65 + selectedAnswerNumber);
        answers[selectedAnswer]++;

        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        } else {
            showResult();
        }
    }

    function onBackButtonClick() {
        if (currentQuestion > 0) {
            const lastAnswer = answers[currentQuestion];
            answers[lastAnswer]--;
            currentQuestion--;
            showQuestion(currentQuestion);
        }
    }

    // Add event listeners to buttons
    nextButton1.addEventListener("click", onNextButtonClick);
    cancelButton1.addEventListener("click", function () {
        window.location.href = "index.html"; // Redirect to the home page
    });

    // Initially, show the first question
    showQuestion(currentQuestion);
});
