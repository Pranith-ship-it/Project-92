function back(){
    window.location="activity_1.html";
}
 function Getscore(){
     score=localStorage.getItem("score");
     document.getElementById("update").innerHTML="<h1> score: " +score+"</h1>";
 }