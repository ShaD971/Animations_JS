/*Animation carré rouge*/
function myMove() {
    var elem = document.getElementById("animate");
     var elem2 = document.getElementById("animate2"); 
    var pos = 0;
    var pos2= 0; 
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350 ) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
            elem2.style.top = pos + 'px';
            elem2.style.right = pos + 'px';
 
        }
    }
}
