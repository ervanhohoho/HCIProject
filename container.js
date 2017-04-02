var page = 1;
function click(n)
{
	showPage(page = n);
}


function showPage(n)
{
	var i;
	var x = document.getElementsByClassName("container");
	for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    x[n].style.display = "block";
}