const navItems = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

//show sidebar
const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

//hide sidebar
const closeNav = () => {
    navItems.style.display = 'none';
    closeNavBtn.style.display = 'none';
    openNavBtn.style.display = 'inline-block';


}

openNavBtn.addEventListener('click', openNav)
closeNavBtn.addEventListener('click', closeNav)


/*==================Mobile sidebar=============*/


const sideIcons = document.querySelector('aside');
const openSidebt = document.querySelector('#show__sidebar-btn');
const closeSidebt = document.querySelector('#hide__sidebar-btn');

//show sidebar on small device
const openSide = () => {
    sideIcons.style.left = '0';
    openSidebt.style.display = 'none';
    closeSidebt.style.display = 'inline-block';
}

//hide sidebar on small device
const closeSide = () => {
    sideIcons.style.left = '-100%';
    openSidebt.style.display = 'inline-block';
    closeSidebt.style.display = 'none';
}

openSidebt.addEventListener('click', openSide)
closeSidebt.addEventListener('click', closeSide)