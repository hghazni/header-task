function dropnavActivator() {
    const activator = document.querySelector('.dropdown-nav__wrapper');
    console.log(activator);
    if (activator.style.display === "none") {
        activator.style.display === "block";
    } else {
        activator.style.display = "none";
    }
}