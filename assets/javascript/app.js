$(document).ready(function () {

    //global variables
    var questNum = 0;       // variable used to check each question
    var userGuess;          // Holds each guess and used to compare with answer
    var clock;              // used for the countdown timer
    var correct = 0         // Track the number of correct answers
    var incorrect = 0;      // Track the number of incorrect answers
    var unanswered = 0;     // Track the number of unanswered questions

    //objects of questions and answers and items that associate with each
    var trivia = [{
        questions: "What is the name of Jon Snow's Direwolf",
        choices: ['Grey Wind', 'Summer', 'Ghost', 'Nymeria'],
        image: "assets/images/ghost.gif",
        answer: "Ghost",
        text: "Ghost is one of six direwolf pups that are found by the children of House Stark. He is adopted and raised by Jon Snow. Ghost is an albino with white fur and red eyes. Though he was the runt of the litter when he was born, he quickly grew to be as big as the rest of his siblings. Of their litter, only Ghost and Nymeria are currently still alive.",
    }, {
        questions: "What is the surname given to bastards born in Dorne?",
        choices: ['Sand', 'River', 'Waters', 'Stone'],
        image: "assets/images/dorne.gif",
        answer: "Sand",
        text: "The term bastard refers to anyone born out of wedlock.In the North they are called Snow. In the Riverlands they are called River. In the Crownlands they are called Waters. In the Iron Islands they are called Pyke. In the Vale they are called Stone. In the Stormlands they are called Storm. In the Reach they are called Flowers. In the Westerlands they are called Hill. In Dorne they are called Sand.",
    }, {
        questions: "Who was Margaery Tyrell's first husband?",
        choices: ['Renly Baratheon', 'Stannis Baratheon', 'Tommen Baratheon', 'Joffrey Baratheon'],
        image: "assets/images/tyrell.gif",
        answer: "Renly Baratheon",
        text: "Margaery Tyrell marries King Renly Baratheon, the lover of her brother Loras. She encourages Renly to produce an heir with her but he is unable to become aroused by her. Renly is killed in mysterious circumstances. Margaery's ambition to be Queen brings the Tyrells to Kings Landing during the Battle of the Blackwater."
    }, {
        questions: "What is the name of the song that famously accompanies the Red Wedding?",
        choices: ['Purple Rain', 'Cry Me a River', 'The Bear and the Maiden Fair', 'The Rains of Castamere'],
        image: "assets/images/redwedding.gif",
        answer: "The Rains of Castamere",
        text: "The musicians - actually assassins - hired by Lothar Frey for the wedding feast of Edmure Tully and Roslin Frey begin playing the song after the bedding of the newlyweds. The song is the signal for the forces of House Frey and House Bolton to turn on the Starks and Tullys and slaughter them. Catelyn Stark is the only one present who recognizes the tune, but by the time she realizes what is happening, it is already far too late.",
    }, {
        questions: "What is the name of the sword that Lord Commander Mormont gives to Jon Snow?",
        choices: ['Longtooth', 'Heartsbane', 'Heartsclaw', 'Longclaw'],
        image: "assets/images/longclaw.gif",
        answer: "Longclaw",
        text: "Longclaw is a Valyrian steel sword that was the ancestral weapon of House Mormont for five centuries. Years later, Jeor gave Longclaw to Jon Snow as a reward for saving his life from a white walker. Before giving it to Jon he had the pommel remade, replacing the bear with a direwolf, the sigil of House Stark.",
    }, {
        questions: "What is the name of Sam and Gilly's son?",
        choices: ['Craster Junior', 'Sam', 'Randyll', 'Snow'],
        image: "assets/images/sam.gif",
        answer: "Sam",
        text: "After Craster is killed and Commander Mormont's rangers turn on each other, Samwell runs with Gilly and her son to Castle Black. Along their journey, Gilly becomes fascinated with Samwell over his knowledge and his bravery of defending her son from a White Walker. After the three of them manage to reach Castle Black, Maester Aemon allows Gilly and her son to stay with them. In gratitude for Samwell helping them, Gilly names her son after Sam."
    }, {
        questions: "What type of cake is Sansa Stark especially fond of?",
        choices: ['Lime', 'Lemon', 'Ginger', 'Orange'],
        image: "assets/images/lemon.gif",
        answer: "Lemon",
        text: "Lemon cakes are a kind of sweet baked dessert, made using lemons. They are typically served as small cakes, held and eaten with one hand (as opposed to a larger cake requiring utensils). Lemon cakes are relatively expensive treats enjoyed by upper-class noblewomen of the Seven Kingdoms, where they are a mainstay at the refined social gatherings of noble courts. Lemon cakes are Sansa Stark's favorite type of cake.",
    }, {
        questions: 'What is the correct response to someone saying "Valar Morghulis"?',
        choices: ['All Men Must Die', 'All Men Must Serve', 'Valar Dohaeris', 'Dracarys'],
        image: "assets/images/valar.gif",
        answer: "Valar Dohaeris",
        text: 'Valar morghulis translates to "all men must die" in High Valyrian. It is a customary saying in Essos that is traditionally answered with "Valar Dohaeris," meaning "all men must serve." Jaqen Hghar teaches Arya Stark these words when he departs and gives her a small coin. Although he does not explain the meaning to her she begins to use the words in her prayer of people she wants dead.',
    }, {
        questions: "Who was Tyrion Lannister's champion in his trial by combat?",
        choices: ['The Mountain', 'The Hound', 'Oberyn Martell', 'Ser Ilyn Payne'],
        image: "assets/images/oberyn.gif",
        answer: "Oberyn Martell",
        text: "A trial by combat is a means by which a party can prove their innocence when accused of a crime in the Seven Kingdoms. Tyrion demands a trial by combat to defend his innocence following Joffrey's death. Oberyn Martell then volunteers to stand as champion for Tyrion to get a chance to kill the Mountain as revenge for the rape and murder of his sister Elia and her children during the Sack of King's Landing.",
    }, {
        questions: "Where does Arya undergo her training to become 'no-one' and part of the Faceless Men?",
        choices: ['The Great Sept Of Balor', 'The House of Black and White', 'The Iron Bank Of Braavos', 'The House of Flying Daggers'],
        image: "assets/images/arya.gif",
        answer: "The House of Black and White",
        text: "he House of Black and White is a temple in Braavos dedicated to the Many-Faced God. It serves as the headquarters of the guild of religious assassins known as the Faceless Men. It sits alone on a small island in the lagoon of Braavos. Although it can be reached by boat or bridge from other locations in the city, the island is usually deserted.",
    }]


    //Function for Start button in the main menu
    $("#start_button").click(function () {
        themeMusic();
        $("#startmenu").remove();
        $(this).hide();
        $("#start_text").hide();
        displayQuest();
        resetButton();
    });


    //Function for Reset button that will be displayed once the game begins
    function resetButton() {
        var footer = $("<nav>");
        footer.addClass("navbar fixed-bottom");
        footer.attr("id", "footerbar");
        $("#reset").append(footer);
        var resetbtn = $("<button>");
        resetbtn.addClass("btn btn-secondary btn-lg");
        resetbtn.attr("id", "resetbutton");
        resetbtn.html("Restart Game");
        $("#footerbar").append(resetbtn);
    }


    //function to display questions and answers
    function displayQuest() {
        $("#question").children().hide();
        $("#choices").children().hide();
        $("#timer").children().hide();
        $("#gifpic").children().hide();
        $("#answer").children().hide();

        printResult();
        var questShow = $("<h2>");
        questShow.attr("id", trivia[questNum].answer);
        questShow.append(trivia[questNum].questions);
        $("#question").append(questShow);


        for (i = 0; i < 4; i++) {

            var choiceList = $("<button>");
            choiceList.attr("type", "button");
            choiceList.attr("value", trivia[questNum].choices[i]);
            choiceList.css("margin", "20px");
            choiceList.addClass("btn btn-secondary btn-lg btn-block choices");
            choiceList.append(trivia[questNum].choices[i]);
            $("#choices").append(choiceList);
        }

        //Call the countdown timer to start for each question
        countDown();


    }

    //Object for the text to display after the player chooses and answer
    var resultText = {
        right: "King of the North!",
        wrong: "You know nothing, Jon Snow..",
        timesUp: "Winter is coming.",
        complete: "When you play the game of thrones, you win or you die."
    }

    //Click function for handling user guesses
    $(document).on("click", ".choices", function () {
        userGuess = $(this).attr("value");
        $("#question").children().hide();
        $("#choices").children().hide();
        $("#timer").children().hide();
        $("#result").children().hide();
        $("#answer").empty()
        var gifsrc = trivia[questNum].image;
        var answerText = trivia[questNum].text;


        if (userGuess === trivia[questNum].answer && clock != 0) {
            correct++;
            questNum++;
           
            setTimeout(displayQuest, 10000);
            clearInterval(time);

            var answerResult = $("<h1>");
            answerResult.append(resultText.right);
            $("#answer").append(answerResult);


            var showText = $("<p>");
            showText.append(answerText);
            showText.css("text-align", "justify")
            $("#gifpic").append(showText);

            var gifPic = $("<img>");
            gifPic.attr("src", gifsrc);
            $("#gifpic").append(gifPic);

            if (questNum === trivia.length) { // Run this if it is on the last question of the game
                setTimeout(finalQuest, 10000);
            }




        }
        else if (userGuess != trivia[questNum].answer && clock != 0) {
            incorrect++;
            questNum++;

            setTimeout(displayQuest, 10000);
            clearInterval(time);

            var answerResult = $("<h1>");
            answerResult.append(resultText.wrong);
            $("#answer").append(answerResult);

            var showText = $("<p>");
            showText.append(answerText);
            showText.css("text-align", "justify")
            $("#gifpic").append(showText);

            var gifPic = $("<img>");
            gifPic.attr("src", gifsrc);
            $("#gifpic").append(gifPic);

            if (questNum === trivia.length) { // Run this for the last question
                setTimeout(finalQuest, 10000);
            }

        }

    })

    // Display result and game ending message
    function finalQuest() {
        $("#question").children().hide();
        $("#choices").children().hide();
        $("#timer").children().hide();
        $("#result").children().hide();
        $("#answer").empty()
        var answerResult = $("<h1>");
        answerResult.css("margin-top", "60px")
        answerResult.append(resultText.complete);
        $("#answer").append(answerResult);
        printResult();

    }

    // Function for countdown timer on each question
    function countDown() {
        $("#timer").empty();
        clock = 20;
        var timeDiv = $("<h3>");
        timeDiv.append("Time left: " + clock + " sec");
        $("#timer").append(timeDiv);
        time = setInterval(timer, 1000); //C alls the timer function every 1 second 
    }

    // Function for handling the countdown timer and how it is displayed
    function timer() {
        clock--;
        $("#timer").empty();
        var timeDiv = $("<h3>");
        timeDiv.append("Time left: " + clock + " sec");
        $("#timer").append(timeDiv);

        if (clock < 1) {
            $("#question").children().hide();
            $("#choices").children().hide();
            $("#timer").children().hide();
            $("#result").children().hide();
            $("#answer").empty()
            var gifsrc = trivia[questNum].image;
            var answerText = trivia[questNum].text;

            unanswered++;
            questNum++;
            setTimeout(displayQuest, 10000);
            clearInterval(time);

            var answerResult = $("<h1>");
            answerResult.append(resultText.timesUp);
            $("#answer").append(answerResult);


            var showText = $("<p>");
            showText.append(answerText);
            showText.css("text-align", "justify")
            $("#gifpic").append(showText);

            var gifPic = $("<img>");
            gifPic.attr("src", gifsrc);
            $("#gifpic").append(gifPic);

            if (questNum === trivia.length) { // Run this for the final question
                setTimeout(finalQuest, 10000);
            }
        }
    }


    //function to print the result during each round and at the end of the game
    function printResult() {
        $("#result").empty();
        $("#timer").empty();

        var correctDiv = $("<h5>");
        correctDiv.append("Correct: " + correct)
        $("#result").append(correctDiv);
        var incorrectDiv = $("<h5>");
        incorrectDiv.append("Incorrect: " + incorrect)
        $("#result").append(incorrectDiv)
        var unansweredDiv = $("<h5>");
        unansweredDiv.append("Unanswered: " + unanswered)
        $("#result").append(unansweredDiv);
    }

    //Reset button function
    $(document).on("click", "#resetbutton", function () {
        location.reload();
    })




});

// Background music when the game starts 
var theme = document.getElementById("theme");

function themeMusic() {
    theme.play();
}