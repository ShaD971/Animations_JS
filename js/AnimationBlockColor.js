var x = 700;
var y = 200;

function deplacer(dx, dy)
{
   var bloc = document.getElementById("carre");
   // on enregistre la nouvelle position

   x += dx;
   y += dy;
   // on place le bloc
   bloc.style.left = x + "px";
   bloc.style.top = y + "px";
}

    document.getElementById("carre").onclick = function()
{
     
    carre.style.backgroundColor = "#1ec5e5";
}


