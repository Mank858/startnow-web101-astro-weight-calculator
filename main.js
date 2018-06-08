
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

planets.forEach(function(planet) {
  var Ops = document.createElement('option');
  Ops.text = planet[0];
  Ops.value = planet[0];
document.getElementById('planets').appendChild(Ops);
});

function calculateWeight(userWeight, planetName) {
    for (i=0;i<planets.length; i++) {
      if(planets[i][0] == planetName) {
        var gravity = planets[i][1] 
        result = userWeight * gravity
      }
    }
    return result
  }

function handleClickEvent() {
  var userWeight = $('#user-weight').val();
  var planetName = $('#planets').val();
  var result = calculateWeight(userWeight,planetName);
  $('#output').text('If you were on ' + planetName + ', you would weigh '+ result + 'lbs!');
}

$('#calculate-button').click(handleClickEvent)