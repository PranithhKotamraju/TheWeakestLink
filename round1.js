const questionbank =[
    {question:"what is the capital of Canada?",option1:"Toronto",option2:"Scarbrough",option3:"Ottawa",option4:"Barry",answer:"Ottawa"},

    {question:"What two colors are Canada's flag?",option1:"Red and White",option2:"Green and pink",option3:"Orange and purple",option4:"Yellow and blue",answer:"Red and White"},

    {question:"Who is Canada's Head of State?",option1:"The Queen",option2:"The Prime Minister",option3:"The Governor General",option4:"Jacques Cartier",answer:"The Queen"},

    {question:"Which topping is Canada well-known for?",option1:"Mustard",option2:"Maple syrup",option3:"Sweet and sour sauce",option4:"BBQ sauce",answer:"Maple syrup"},

    {question:"what is the capital of USA",option1:"New York",option2:"Washington D.C",option3:"Chicago",option4:"Seattle",answer:"Washington D.C"},

    {question:"How many official languages does Canada have?",option1:"Two",option2:"Four",option3:"Six",option4:"Ten",answer:"Two"},

    {question:"what is the capital of SriLanka",option1:"Colombo",option2:"Kandy",option3:"Galle",option4:"Dambulla",answer:"Colombo"},

    {question:"How many people live in Canada?",option1:"35million",option2:"2million",option3:"6million",option4:"10million",answer:"35million"},

    {question:"What animal is on the Canadian nickel?",option1:"A beaver",option2:"A moose",option3:"A seal",option4:"A bear",answer:"A beaver"},

    {question:"Which province is home to the most people who have French as a first language?",option1:"Quebec",option2:"Nunavut",option3:"The Northwest Territories",option4:"Yukon",answer:"Quebec"},

    {question:"what is the capital of Vietnam",option1:"Da Nang",option2:"Hanoi",option3:"Dalat",option4:"Can Tho",answer:"Hanoi"},

    {question:"What is the Canadian one dollar coin commonly called?",option1:"A canuck buck",option2:"A queen elizabeth",option3:"A loonie",option4:"A moose",answer:"A loonie"},

    {question:"The national flag of Canada, featuring a stylized red maple leaf with how many points?",option1:"9",option2:"11",option3:"13",option4:"7",answer:"11"},

    {question:"What's the world's highest mountain peak?",option1:"Mount Everest",option2:"Denali",option3:"Mount Kilimanjaro",option4:"Nanga Parbat",answer:"Mount Everest"},

    {question:"what is the capital of Vietnam",option1:"Da Nang",option2:"Hanoi",option3:"Dalat",option4:"Can Tho",answer:"Hanoi"},

    {question:"What type of alcohol is traditionally used in a margarita?",option1:"Tequila",option2:"Gin",option3:"Whiskey",option4:"Vodka",answer:"Tequila"},

    {question:"What are the bones in your spine called?",option1:"Vertebrae",option2:"Spleens",option3:"Radii",option4:"Patellae",answer:"Vertebrae"},

    {question:"Who was the first president of the United States (now featured on the US one-dollar bill)?",option1:"Thomas Jefferson",option2:"George Washington",option3:"Ronald Reagan",option4:"James K. Polk",answer:"George Washington"},

    {question:"Three of the answers below are spices. Which one is an herb?",option1:"Ginger",option2:"Mint",option3:"Clove",option4:"Mustard  Seed",answer:"Mint"},

    {question:"How many Apollo missions landed men on the moon?",option1:"2",option2:"5",option3:"6",option4:"9",answer:"6"},

];
const imgbank=["special/2.gif","special/3.gif","special/4.gif","special/5.gif","special/6.gif","special/7.gif","special/8.gif","special/9.gif","special/12.gif","special/13.gif"];
$(document).ready(function(){
    alert("Welcome to Round1");
    $('audio#pop')[0].play()
    let picked_question_bank=[];
    let currentNumber=120;
    let randomanswer;
    let counterarray=[];
    let bank_amount=0;
    let counter=5;
    const updateDisplay = function() {
        $("#clock").text(currentNumber);
        currentNumber = currentNumber -1;
        if(currentNumber<10){
            $("#clock").css("background-color","red");
        }
        pagechanging();
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
        let index= questionbank.indexOf(randomquestion);
        picked_question = questionbank.splice(index,1);
        picked_question_bank.push(picked_question);
    }

    function backgroundimage(){
        var randomimg=imgbank[Math.floor(Math.random()*imgbank.length)];
        $(".bg").css("background-image","url("+randomimg+")");
    }
    backgroundimage();
    getrandomquestion();
    
   
    function changingcss(){
        for(i=0;i<counterarray.length;i++){
            let elements = counterarray[i];
            $("#"+elements).css("box-shadow", "0px 0px" );
        }
        while(counterarray.length>0){
            counterarray.pop();
        }
        counter=5;
    }
    
    function bank(){
        $("#5").text(0);
        current_amount = parseInt($("#"+counter).text());
        $("#Bank_amount").text(current_amount+bank_amount);
        bank_amount=parseInt($("#Bank_amount").text());
        changingcss();
    };

    function pagechanging(){
        let time=parseInt($("#clock").text());
        if(time===0){
            if(bank_amount!=0){
                window.location.href="file:///Users/saipraneethkrishnakotamraju/Desktop/JAVASCRRIPT%20FINAL%20PROJECT/project%20final/round2.html";
                localStorage.setItem("Amount",bank_amount);
            }
            else if(bank_amount===0){
                window.location.href="file:///Users/saipraneethkrishnakotamraju/Desktop/JAVASCRRIPT%20FINAL%20PROJECT/project%20final/looser.html";
            }
        }
        if(counter===13){
                window.location.href="file:///Users/saipraneethkrishnakotamraju/Desktop/JAVASCRRIPT%20FINAL%20PROJECT/project%20final/round2.html";
                localStorage.setItem("Amount",bank_amount);
        }
        if(bank_amount>=500000){
            window.location.href="file:///Users/saipraneethkrishnakotamraju/Desktop/JAVASCRRIPT%20FINAL%20PROJECT/project%20final/round2.html";
            localStorage.setItem("Amount",bank_amount);
        }
        
    }
    
    
    function target(event){
        let option_selected=event.target;
        let option=$("#"+option_selected.id).text();
        if(option===randomanswer){
            counter=counter+1;
            $("#"+counter).css("box-shadow", "10px 10px grey");
            amount = parseInt($("#"+counter).text());
            $("#5").text(amount);
            getrandomquestion();
            counterarray.push(counter);
            backgroundimage();
            bankoption=confirm("You got right do you want to bank?");
            if(bankoption===true){
                bank();
                changingcss();
            }else{
                getrandomquestion();
            }
        }else{
            alert("Youv'e answered Wrong");
            getrandomquestion();
            changingcss();
            $("#5").text(0);
        }
        pagechanging();
    }
    $("#options").click(target);
    
    $('audio#pop')[0].play()
    
});