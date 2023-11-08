var navLinks = document.getElementById("navLinks");
function showMenu() 
{
    navLinks.style.right = "0";
}
function hideMenu() 
{
    navLinks.style.right = "-200px";
}


var mybutton = document.getElementById("myBtn");


window.onscroll = function () 
{ 
    scrollFunction() 
};
function scrollFunction() 
{
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) 
    {
        mybutton.style.display = "block";
    } 
    else 
    {
        mybutton.style.display = "none";
    }
}


function topFunction() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}