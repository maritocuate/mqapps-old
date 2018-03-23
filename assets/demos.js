document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    strings: [
    document.getElementsByTagName('p')[0].innerHTML +'^10\n'+
    document.getElementsByTagName('p')[1].innerHTML +'^10\n'+
    document.getElementsByTagName('p')[2].innerHTML +'^10\n'+
    document.getElementsByTagName('p')[3].innerHTML +'^10\n'+
    document.getElementsByTagName('p')[4].innerHTML],
    typeSpeed: 8,
    backSpeed: 0,
    startDelay: 1000/*,
    cursorChar: '▓'*/
  });
});