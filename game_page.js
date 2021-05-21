player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player_1_score=0;
player_2_score=0;

document.getElementById("player1_name").innerHTML= player1_name + " : " ;
document.getElementById("player2_name").innerHTML= player2_name + " : " ;

document.getElementById("player_1_score").innerHTML= player_1_score; 
document.getElementById("player_2_score").innerHTML= player_2_score; 

document.getElementById("player_question").innerHTML="Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - " + player2_name;

function send(){
Number1= document.getElementById("Number1").value;
Number2= document.getElementById("Number2").value;
actual_answer = parseInt(Number1) * parseInt(Number2);

question_number= "<h4>" + Number1 + "X" +Number2+ "</h4>";
input_box= "<br> Answer: <input type=' text' id='input_check_box'>";
check_button="<br><br><button class=' btn btn-info' onclick='check()'>Check </button> ";
row= question_number +input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("Number1").value="";
document.getElementById("Number2").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer= document.getElementById("input_check_box").value;
    

    
    if(get_answer=actual_answer){
        if(answer_turn=="player1"){
            update_player_1_score= player_1_score+1;
            document.getElementById("player_1_score").innerHTML =update_player_1_score;
        }
        
        else{
            update_player_2_score=player_2_score+1;
            document.getElementById("player_2_score").innerHTML =update_player_2_score;
        }
    }

    
        if(question_turn=="player1"){
            question_turn="player2"
            document.getElementById("player_question").innerHTML = "Qusetion Turn -" + player2_name;
        }
        
        else{
            question_turn="player1"
            document.getElementById("player_question").innerHTML = "Question turn -" +player1_name;
        }

        if(answer_turn=="player1"){
            answer_turn="player2"
            ocument.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;
        }
        
        else{
           answer_turn="player1"
            document.getElementById("player_answer").innerHTML = "Answer turn -" +player1_name;
        }

        document.getElementById("output").innerHTML="";

    
}  

