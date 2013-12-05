
blowMinds = function() {
  document.body.className = 'mindblown';
}

getLame = function() {
  document.body.className = '';
}

tieThisShitToTheDom = function() {
  document.getElementById('header').onmouseover = blowMinds
  document.getElementById('header').onmouseout = getLame
  console.log('tied!');
}

window.onload = tieThisShitToTheDom
