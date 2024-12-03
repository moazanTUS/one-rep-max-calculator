
function $ (id) {
  return document.getElementById(id);
}



window.onload = function(){
  $("calculate").addEventListener('click', function(){
  calculateonerepmax()})
  $("reset").onclick = function(){resetorm();}
}



function resetorm() { 
  $("weight").value = " ";
  $("reps").value = " ";
  $("resultText").innerHTML = "";
  $("squat").checked = false;
  $("bench").checked = false;
  $("deadlift").checked = false;
  $("select").value = "choose";
}
function calculateonerepmax ()
{
  var error = []; 
  var exercises = [];
  const lift = parseFloat($('weight').value )
  var units = []; 
  const reps=   $('reps').value
  var result = (lift*(36/(37-reps))).toFixed(2) ;  // Brzycki formula  ORM
  
  if ($('choose').selected) {
    error.push("error");
  }
  
 
  if (!$('bench').checked && !$('squat').checked && !$('deadlift').checked)
   {
      alert ("select an exercise")
      return; 
  }

  if(isNaN(lift) || lift < 0)
  {
  alert("Please enter a numerical positive value for weight");
  return;
  }

  else if( error.length > 0 )
  { 
    alert (" please select a unit"); 
    return; 
  }

  else if(isNaN(reps) || reps <= 0 || reps > 35) 
  { 
    alert ("enter a numeric positive value in the range of 1 - 35 for reps"); // limitaions the result goes into minus aftere 37
    return; 
  }



  else{

  if ($('squat').checked) {
    exercises.push("SQUAT");
  } else if ($('bench').checked) {
    exercises.push("BENCH");
  } else if ($('deadlift').checked) {
    exercises.push("DEADLIFT");
  }


    if ($('lbs').selected) {
      units.push("LBS");
    } else if ($('kgs').selected) {
      units.push("KGS");
    }

  
   
    $("resultText").innerHTML = "YOUR ESTIMATED ONE REP MAX FOR  " + exercises+ "  IS " + result + " " + units
  
  }

}

