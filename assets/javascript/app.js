$(document).ready(function () {

    //global variables
    var questNum = 0; // variable to display question
    var userGuess;
    var clock;
    var correct = 0
    var incorrect = 0;
    var unanswered = 0;

    //objects of questions and answers
    var trivia = [{
        questions: "What is the name of Jon Snow's Direwolf",
        choices: ['Grey Wind', 'Summer', 'Ghost', 'Nymeria'],
        image: "",
        answer: "Ghost",
    }, {
        questions: "What is the surname given to bastards born in Dorne?",
        choices: ['Sand', 'River', 'Waters', 'Stone'],
        image: "image",
        answer: "Sand",
    }, {
        questions: "Who was Margaery Tyrell's first husband?",
        choices: ['Renly Baratheon', 'Stannis Baratheon', 'Tommen Baratheon', 'Joffrey Baratheon'],
        image: "image",
        answer: "Renly Baratheon",
    }]

    // function questionStart() {
    //     questionID = setInterval(displayQuest, 3000);
    //   } 

    //   function questionStop(){
    //       clearInterval(questionID);
    //   }

    $("#start_button").click(function () {
        $(this).hide();
        displayQuest();
    });


    //function to display questions and answers
    function displayQuest() {
        $("#question").children().hide();
        $("#choices").children().hide();
        var questShow = $("<div>");
        questShow.attr("id", trivia[questNum].answer);
        questShow.append(trivia[questNum].questions);
        $("#question").append(questShow);


        for (i = 0; i < 4; i++) {

            var choiceList = $("<button>");
            choiceList.attr("type", "button");
            choiceList.attr("value", trivia[questNum].choices[i]);
            choiceList.addClass("btn btn-secondary btn-lg btn-block choices");
            choiceList.append(trivia[questNum].choices[i]);
            $("#choices").append(choiceList);
        }

        countDown();

        if (clock === 0) {
            console.log("time's up");
            unanswered++;
            questNum++;
            displayQuest();
            printResult();
            clearInterval(time);
        }


    }

    $(document).on("click", ".choices", function () {
        userGuess = $(this).attr("value");
        console.log("User's Guess: " + userGuess);


        if (userGuess === trivia[questNum].answer && clock != 0) {
            console.log("answer: " + trivia[questNum].answer);
            correct++;
            questNum++;
            // $("#timer").empty();
            displayQuest();
            printResult();
            clearInterval(time);



        }
        else if (userGuess != trivia[questNum].answer && clock != 0) {
            incorrect++;
            questNum++;
            // $("#timer").empty();
            displayQuest();
            printResult();
            clearInterval(time);

        }

    })


    function countDown() {
        $("#timer").empty();
        clock = 10;
        $("#timer").append("Time left: " + clock + " sec");
        time = setInterval(timer, 1000);


    }

    function timer() {
        clock--;
        $("#timer").empty();
        $("#timer").append("Time left: " + clock + " sec");
        console.log(clock);

        if (clock < 1) {
            clearInterval(time);
        }
    }


    //function to correct/incorrect answers
    function printResult() {
        $("#result").empty();
        var correctDiv = $("<p>");
        correctDiv.append("Correct: " + correct)
        $("#result").append(correctDiv);
        var incorrectDiv = $("<p>");
        incorrectDiv.append("Incorrect: " + incorrect)
        $("#result").append(incorrectDiv);
        var unansweredDiv = $("<p>");
        unansweredDiv.append("Unanswered: " + unanswered)
        $("#result").append(unansweredDiv);
    }







});