//HEADER
var b="<div class='header'>";
document.write(b);
//Topnav
var c="<div class='topnav'><a href='../index.html' alt='Home'>"+site_name+"</a>";
document.write(c);
//Open Sidebar
var d="<img onclick='opensidebar()' src='../img/bars.svg' class='active'  id='nodisplay' alt='Menu'>";
document.write(d);
//Close Sidebar
var e="<img onclick='closesidebar()' src='../img/xmark.svg' class='active'  id='displayit' alt='Exit Menu'></div>";
document.write(e);
//End Topnav

//Sidebar Navigations
var f="<nav id='openav'><h3><strong>"+site_name+"</strong></h3><div class='block-1'>";
document.write(f);
//Links
var g="<span><img src='../img/house-chimney-window.svg' alt='Home icon'><a href='../index.html' rel='tags' alt='Home'>Home</a></span></br>";
document.write(g);

var h="<span><img src='../img/book-open-reader.svg' alt='Home icon'><a href='#manga' rel='tags' alt='Manga'>Manga</a></span></br>";
document.write(h);

var i="<span><img src='../img/play.svg' alt='Home icon'><a href='#seasons' rel='tags' alt='Episode'>Episodes</a></span></br>";
document.write(i);

var j="<span><img src='../img/infinity.svg' alt='Home icon'><a href='#footer' rel='tags' alt='About us'>About Us</a></span></br>";
document.write(j);
//End Links
var k="</div></nav><div id='closenav' onclick='closesidebar()'></div>";
document.write(k);
//End Sidebar Navigations
