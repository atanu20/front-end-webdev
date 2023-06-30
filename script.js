const sidebar = document.querySelector('.sidebar');
const submenuItems = document.querySelectorAll('.submenu_item');
const sidebarOpen = document.querySelector('#sidebarOpen');
const loc = location.href;
const activemanu = document.querySelectorAll('.menu_items li a');
// console.log(activemanu[0].href);

sidebarOpen.addEventListener('click', () => sidebar.classList.toggle('close'));

sidebar.addEventListener('mouseenter', () => {
  if (sidebar.classList.contains('hoverable')) {
    sidebar.classList.remove('close');
  }
});
sidebar.addEventListener('mouseleave', () => {
  if (sidebar.classList.contains('hoverable')) {
    sidebar.classList.add('close');
  }
});

if (window.innerWidth < 768) {
  sidebar.classList.add('close');
} else {
  sidebar.classList.remove('close');
}

for (let i = 0; i < activemanu.length; i++) {
  if (activemanu[i].href === loc) {
    activemanu[i].className = 'activenav';
  }
}
