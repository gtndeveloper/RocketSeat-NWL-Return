function onScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
        document.body.style.overflow = "initial"
    }
    else {
        navigation.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}