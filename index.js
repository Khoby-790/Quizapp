"use strict"
let Questions = [
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which internet company began life as an online bookstore called &#039;Cadabra&#039;?",
        "correct_answer": "Amazon",
        "incorrect_answers": [
            "eBay",
            "Overstock",
            "Shopify"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What five letter word is the motto of the IBM Computer company?",
        "correct_answer": "Think",
        "incorrect_answers": [
            "Click",
            "Logic",
            "Pixel"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "On which computer hardware device is the BIOS chip located?",
        "correct_answer": "Motherboard",
        "incorrect_answers": [
            "Hard Disk Drive",
            "Central Processing Unit",
            "Graphics Processing Unit"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
        "correct_answer": "Taiwan",
        "incorrect_answers": [
            "United States",
            "Germany",
            "China (People&#039;s Republic of)"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What was the name given to Android 4.3?",
        "correct_answer": "Jelly Bean",
        "incorrect_answers": [
            "Lollipop",
            "Nutella",
            "Froyo"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "On which day did the World Wide Web go online?",
        "correct_answer": "December 20, 1990",
        "incorrect_answers": [
            "December 17, 1996",
            "November 12, 1990",
            "November 24, 1995"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "While Apple was formed in California, in which western state was Microsoft founded?",
        "correct_answer": "New Mexico",
        "incorrect_answers": [
            "Washington",
            "Colorado",
            "Arizona"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What does the acronym CDN stand for in terms of networking?",
        "correct_answer": "Content Delivery Network",
        "incorrect_answers": [
            "Content Distribution Network",
            "Computational Data Network",
            "Compressed Data Network"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Generally, which component of a computer draws the most power?",
        "correct_answer": "Video Card",
        "incorrect_answers": [
            "Hard Drive",
            "Processor",
            "Power Supply"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "How many cores does the Intel i7-6950X have?",
        "correct_answer": "10",
        "incorrect_answers": [
            "12",
            "8",
            "4"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which one of these is not an official development name for a Ubuntu release?",
        "correct_answer": "Mystic Mansion",
        "incorrect_answers": [
            "Trusty Tahr",
            "Utopic Unicorn",
            "Wily Werewolf"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In the server hosting industry IaaS stands for...",
        "correct_answer": "Infrastructure as a Service",
        "incorrect_answers": [
            "Internet as a Service",
            "Internet and a Server",
            "Infrastructure as a Server"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
        "correct_answer": "JavaScript",
        "incorrect_answers": [
            "C#",
            "Python",
            "PHP"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?",
        "correct_answer": "print(&quot;Hello World&quot;)",
        "incorrect_answers": [
            "console.log(&quot;Hello World&quot;)",
            "echo &quot;Hello World&quot;",
            "printf(&quot;Hello World&quot;)"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
        "correct_answer": "&lt;marquee&gt;&lt;/marquee&gt;",
        "incorrect_answers": [
            "&lt;scroll&gt;&lt;/scroll&gt;",
            "&lt;move&gt;&lt;/move&gt;",
            "&lt;slide&gt;&lt;/slide&gt;"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?",
        "correct_answer": "center",
        "incorrect_answers": [
            "static",
            "absolute",
            "relative"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the correct term for the metal object in between the CPU and the CPU fan within a computer system?",
        "correct_answer": "Heat Sink",
        "incorrect_answers": [
            "CPU Vent",
            "Temperature Decipator",
            "Heat Vent"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In programming, the ternary operator is mostly defined with what symbol(s)?",
        "correct_answer": "?:",
        "incorrect_answers": [
            "??",
            "if then",
            "?"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of these programming languages is a low-level language?",
        "correct_answer": "Assembly",
        "incorrect_answers": [
            "Python",
            "C#",
            "Pascal"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In computing terms, typically what does CLI stand for?",
        "correct_answer": "Command Line Interface",
        "incorrect_answers": [
            "Common Language Input",
            "Control Line Interface",
            "Common Language Interface"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "How fast is USB 3.1 Gen 2 theoretically?",
        "correct_answer": "10 Gb/s",
        "incorrect_answers": [
            "5 Gb/s",
            "8 Gb/s",
            "1 Gb/s"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What does &quot;LCD&quot; stand for?",
        "correct_answer": "Liquid Crystal Display",
        "incorrect_answers": [
            "Language Control Design",
            "Last Common Difference",
            "Long Continuous Design"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": ".rs is the top-level domain for what country?",
        "correct_answer": "Serbia",
        "incorrect_answers": [
            "Romania",
            "Russia",
            "Rwanda"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": ".at is the top-level domain for what country?",
        "correct_answer": "Austria",
        "incorrect_answers": [
            "Argentina",
            "Australia",
            "Angola"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What does the term GPU stand for?",
        "correct_answer": "Graphics Processing Unit",
        "incorrect_answers": [
            "Gaming Processor Unit",
            "Graphite Producing Unit",
            "Graphical Proprietary Unit"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
        "correct_answer": "Motorola 68000",
        "incorrect_answers": [
            "Zilog Z80",
            "Yamaha YM2612",
            "Intel 8088"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What was the first Android version specifically optimized for tablets?",
        "correct_answer": "Honeycomb",
        "incorrect_answers": [
            "Eclair",
            "Froyo",
            "Marshmellow"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What does the term MIME stand for, in regards to computing?",
        "correct_answer": "Multipurpose Internet Mail Extensions",
        "incorrect_answers": [
            "Mail Internet Mail Exchange",
            "Multipurpose Interleave Mail Exchange",
            "Mail Interleave Method Exchange"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which programming language was developed by Sun Microsystems in 1995?",
        "correct_answer": "Java",
        "incorrect_answers": [
            "Python",
            "Solaris OS",
            "C++"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "medium",
        "question": "The name of technology company HP stands for what?",
        "correct_answer": "Hewlett-Packard",
        "incorrect_answers": [
            "Howard Packmann",
            "Husker-Pollosk",
            "Hellman-Pohl"
        ]
    }
];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

let question = document.getElementById('question');
let answersDiv = document.getElementById('answers');
let submitBtn = document.getElementById('submit');
let score = document.getElementById('score');
let congrats = document.getElementById('congrats');
let fail = document.getElementById('fail');
let GeneralScore = -1;
//
let GeneralAnswer = "";


//add event listener to submit button
submitBtn.addEventListener('click',checkAnswer);


(function(){

    generateQuestion();
    increaseScore();
})();



function generateQuestion(){

    
    while (answersDiv.firstChild) {
        answersDiv.removeChild(answersDiv.firstChild);
    }

    Questions = shuffle(Questions);
    let QuizQuestion = Questions[0];
    GeneralAnswer = QuizQuestion.correct_answer.replace("&quot;","\"");
    question.innerHTML = QuizQuestion.question;
    let answers = [QuizQuestion.correct_answer,...QuizQuestion.incorrect_answers]
    answers = shuffle(answers);
    for(let i = 0; i < answers.length; i++){
        //for the sake of code syntax
        let codeSnippet = document.createElement("code");
        let blockquote = document.createElement("blockquote");
        /* create a radio button */
        var radioBtn = document.createElement("input");
        radioBtn.setAttribute("type", "radio");
        radioBtn.setAttribute("name","answer");
        radioBtn.setAttribute("value",answers[i].replace("&quot;","\""));
        /*creating label for Text to Radio button*/
        var answerLabel = document.createElement("label");
         /*create text node for label Text which display for Radio button*/
         var answerText = document.createTextNode(answers[i].replace("&quot;","\""));
         /*add text to new create lable*/
         answerLabel.appendChild(answerText);

         //put answer in code snips
         codeSnippet.appendChild(answerLabel);
            blockquote.appendChild(codeSnippet);
        /*add radio button to Div*/
        answersDiv.appendChild(radioBtn);
        /*add label text for radio button to Div*/
        answersDiv.appendChild(blockquote);
        //add a break to the end
        var spaceBr = document.createElement("br");
        answersDiv.appendChild(spaceBr);
    }
}

function checkAnswer(){
    var rates = document.getElementsByName('answer');
    var rate_value;
    for(var i = 0; i < rates.length; i++){
        if(rates[i].checked){
            rate_value = rates[i].value;
            if(rate_value == GeneralAnswer){
                congrats.play();
                increaseScore();
                generateQuestion();
            }else{
                fail.play();
                generateQuestion();
            }
        }
    }
}

function increaseScore(){
    GeneralScore++;
    score.textContent = GeneralScore;
}