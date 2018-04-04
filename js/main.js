function dropnavActivator() {
    const activator = document.querySelector('.dropdown-nav__wrapper');
    if (activator.style.display === "none") {
        activator.style.display === "block";
        console.log('you hovered over it');
    } else {
        activator.style.display = "none";
    }
}