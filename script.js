const form = document.forms.quiz;
const Q1 = form.Q1;
const Q2 = form.Q2;
const Q3 = form.Q3;

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkQuestion1();
    checkQuestion2();
    checkQuestion3();

});

form.addEventListener('reset', function(event){

      // Add more reset of inputs here
      document.getElementById('result-Q1').innerText = "";
      document.getElementById('result-Q2').innerText = "";
      document.getElementById('result-Q3').innerText = "";

      //reset Q1
      Q1.value = "";
      //reset Q2
      document.querySelector('input[name="Q2"]:checked').checked = false;
      //reset Q3
      var uncheck=document.querySelectorAll("input[type=checkbox][name=Q3]:checked");
        for(var i=0;i<uncheck.length;i++)
        {
          uncheck[i].checked=false;
        }   
  })

  function checkQuestion1(){
    if(!Q1.value) {
        setError('Q1', 'You must enter an answer!');
        return;
    }
    if(Q1.value.toLowerCase()!="manila") {
        setError('Q1', 'Question 1 answer is incorrect!');
    } else {
        setCorrect('Q1', 'Question 1 answer is correct!');
    }
  }

  function checkQuestion2(){
    if(document.querySelector('input[name="Q2"]:checked') ) {
        if(Q2.value==="B")
        {
        setCorrect('Q2', 'Question 2 answer is correct!');
        } else {
        setError('Q2', 'Question 2 answer is incorrect!');
        }
      } else {
        setError('Q2', 'You must enter an answer!');
      }

  }

  function checkQuestion3(){
    if(document.querySelector('input[name="Q3"]:checked') ) {
       var getCheckedBox = Array.from(document.querySelectorAll("input[type=checkbox][name=Q3]:checked"), e => e.value);
        if(String(getCheckedBox)==="A,B,D"){
            setCorrect('Q3', 'Question 3 answer is correct!');
        } else {
            setError('Q3', `Question 3 answer is incorrect!`);
        }
    } else {
        setError('Q3', 'You must enter an answer!');
    }
  }

  function setError(divID, errorMsg){
    var divbox = document.getElementById('result-' + divID);
    divbox.style.color = "#FF7777";
    divbox.innerText = errorMsg;
  }

  function setCorrect(divID, correctMsg){
    var divbox = document.getElementById('result-' + divID);
    divbox.style.color = "#86E5FF";
    divbox.style.fontWeight = "bold";
    divbox.innerText = correctMsg;
  }
