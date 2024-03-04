// script.js

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

function selectNavItem(sectionId) {
    const navLinks = document.querySelectorAll('#sidebar a');
    navLinks.forEach(link => link.classList.remove('active'));

    const selectedLink = document.querySelector(`#sidebar a[href="#${sectionId}"]`);
    selectedLink.classList.add('active');

    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('collapsed');
}

document.addEventListener('DOMContentLoaded', function () {
    const currentSection = window.location.hash.substring(1);
    if (currentSection) {
        selectNavItem(currentSection);
    }
});
