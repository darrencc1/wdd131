
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu-button');
    const menu = document.querySelector('nav ul');
    const viewer = document.querySelector('.viewer');
    const closeViewerButton = viewer.querySelector('.close-viewer');
    const viewerImage = viewer.querySelector('img');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hide');
    });

    // Handle the window resize event
    function handleResize() {
        if (window.innerWidth > 1000) {
            menu.classList.remove('hide');
        } else {
            menu.classList.add('hide');
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    // Function to handle image click and show the viewer
    function viewHandler(event) {
        const target = event.target;
        if (target.tagName === 'IMG') {
            const src = target.src.replace('-sm', '-full');
            const alt = target.alt;
            viewerImage.src = src;
            viewerImage.alt = alt;
            viewer.classList.remove('hide');
        }
    }

    // Function to close the viewer
    function closeViewer() {
        viewer.classList.add('hide');
    }

    // Add event listener to the gallery section
    document.querySelector('.gallery').addEventListener('click', viewHandler);

    // Add event listener to the close button
    closeViewerButton.addEventListener('click', closeViewer);
});

const year = document.querySelector('#year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;