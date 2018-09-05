var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image.jpg') {
        
      myImage.setAttribute ('src','images/23754652_1357056507753059_1675349493954275710_n.jpg');
    } else {
      myImage.setAttribute ('src','images/image.jpg');
    }
}
