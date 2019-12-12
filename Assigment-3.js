var buttonQ3 = document.getElementsByClassName("mc1");


function checker() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;
    /** change path to getElementById("submit")  */
    if (question1 == "San Francisco" ||
        question1 == "San-Francisco") {
        correct++;
    }
    if (buttonQ3.click == true) {
        if (question2 == "Everest") {

            correct++;
        }
    }

    if (question3 == "8") {
        correct++;
    }
    if (question4 == "Avesta") {
        correct++;
    }
    if (question5 == "African bush elephant") {
        correct++;
    }

    var pictures = ["https://www.ynetnews.com/PicServer5/2018/05/13/8527500/852749801001095640360no.jpg", "https://cargar.org/imagen/okay-meme-gif-tumblr-image-memes-at-relatably-com-myid-OIP.r_iWXcF8v22gg6peC3tYcQHaHa.jpg", "https://i.ytimg.com/vi/W1-qbiMbUUk/maxresdefault.jpg"];
    var messages = ["Great job!", "Still, good job!", "You need read more books, player"];
    var score;

    if (correct < 2) {
        score = 2;
    }

    if (correct > 2 && correct <= 3) {
        score = 1;
    }
    /** work with value above  */
    if (correct > 3) {
        score = 0;
    }

    document.getElementById("submit").style.visibility = "visible";
    document.getElementById("feedback").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct answers!";
    document.getElementById("picture").src = pictures[score];
}