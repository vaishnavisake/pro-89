  player1_name = localStorage.getItem("player1_name");
  player2_name = localStorage.getItem("player2_name");

  player1_score=0;
  player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").onnerHTML = player1_name = ":";

document.getElementById("player1_score").innerHTML = plyer_score;
document.getElementById("player2_score").innerHTML = player2_name;

document.getElementById("player_question").innerHTML = "Question Turn-" + player_question;
document.getElementById("player_answer").innerHtml = "Answer Turn -" = player_answer;


function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " = word);

    charAt1 = word.charAt1(1);
    console.log("word in lowerCase = " + word);

    charAt = word.charAt(1);
    console.log(charAt1);

    lenght_divide_2 = Mathfloor(word.length/2);
    charAt2 = word.charAt1(lenght_divide_2);
    console.log(charAt2);

    length_minus_1 = word.lenght-1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt,"_");
    remove charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4>" "</h4>"
}