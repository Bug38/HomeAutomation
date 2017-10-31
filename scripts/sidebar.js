function openNav(){
    document.getElementById("sidebar").style.width = "20%";
    document.getElementById("sidebar").style.opacity = "1";
    document.getElementById("main").style.marginRight = "20%";
    document.getElementById("sidebarButton").style.opacity = "0";
}
function closeNav(){
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.opacity = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("sidebarButton").style.opacity = "1";
}