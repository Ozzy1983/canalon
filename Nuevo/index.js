

// NAV EFFECT

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px"

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "450px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}

//DESPLEGABLE HEADER DROPDOWN

document.addEventListener("DOMContentLoaded", function() {
    let dropdownIcons = document.querySelectorAll(".submenu .dropdown-icon");

    dropdownIcons.forEach(icon => {
        icon.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation(); // Evita que el evento se propague al enlace "Servicios"
            let submenu = this.closest('.submenu').querySelector(".dropdown");

            if (submenu) {
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Cierra el dropdown si se hace clic fuera de él
    document.addEventListener("click", function(event) {
        let dropdowns = document.querySelectorAll(".dropdown");
        dropdowns.forEach(dropdown => {
            if (dropdown.style.display === "block" && !dropdown.contains(event.target)) {
                dropdown.style.display = "none";
            }
        });
    });
});


