const questionbank =[
    {question:"What Pokemon does Pikachu evolve into??",option1:"Raichu",option2:"Meowstic",option3:"Jolteon",option4:"Electvire",answer:"Raichu"},

   {question:"What's the most effective Poke Ball in the game?",option1:"Master Ball",option2:"Great Ball",option3:"Timer Ball",option4:"Ultra Ball",answer:"Master Ball"},

   {question:"What country is sushi from?",option1:"Japan",option2:"Thailand",option3:"china",option4:"Vietnam",answer:"Japan"},

   {question:"Which is the world's most populous country?",option1:"China",option2:"America",option3:"Indiaa",option4:"Russia",answer:"China"},

   {question:"When should you take antibiotics?",option1:"For viruses",option2:"For bacterial infections",option3:"Never",option4:"Whenever you feel sick",answer:"For bacterial infections"},

   {question:"If you need to revive your fainted Pokemon to full health, where do you go?",option1:"Mount Fuji",option2:"Gym",option3:"Pokemon Mansion",option4:"Pokemon Center",answer:"Pokemon Center"},

   {question:"What color do about 75 percent of national flags contain?",option1:"Blue",option2:"Red",option3:"Yellow",option4:"Green",answer:"Red"},

   {question:"What type of attacks are Normal type Pokemon immune to?",option1:"Fire",option2:"Ghost",option3:"Dark",option4:"Fighting",answer:"Ghost"},
];

$(document).ready(function(){
    $('audio#pop')[0].play()
    alert("Welcome to Round Two");
    let currentNumber=60;
    let picked_question_bank=[]
    const updateDisplay = function() {
        $("#clock").text(currentNumber);
        currentNumber = currentNumber -1;
        if(currentNumber===0){
            window.location.href="file:///C:/Users/sai/Desktop/project%20final/project%20final/looser.html";
        }
        }
    stopwatch = setInterval(updateDisplay, 1000);
    const getrandomquestion = function(){
        var randomquestion = questionbank[Math.floor(Math.random()*questionbank.length)];
        $("#question").text(randomquestion.question);
        $("#1").text(randomquestion.option1);
        $("#2").text(randomquestion.option2);
        $("#3").text(randomquestion.option3);
        $("#4").text(randomquestion.option4);
        randomanswer = randomquestion.answer;
        ques = randomquestion;
        let index = questionbank.indexOf(randomquestion);
        picked_question = questionbank.splice(index,1);
        picked_question_bank.push(picked_question);
    }
    getrandomquestion();
    function target(event){
        let option_selected=event.target;
        let option=$("#"+option_selected.id).text();
        console.log(option);
            if(option===randomanswer){
                alert("Youve answered correctly");
                getrandomquestion();
                if(questionbank.length===0){
                    console.log("over");
                    window.location.href="file:///Users/saipraneethkrishnakotamraju/Desktop/JAVASCRRIPT%20FINAL%20PROJECT/project%20final/congos.html";
                }
            }else{
                alert("Wrong");
                getrandomquestion();
                window.location.href="file:///Users/saipraneethkrishnakotamraju/Desktop/JAVASCRRIPT%20FINAL%20PROJECT/project%20final/looser.html";
            }
    }
    $("#options").click(target);

    $('audio#pop')[0].play()

    
});
       
