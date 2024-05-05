
const themeSelector = document.getElementById('themeSelector');
themeSelector.addEventListener('change', changeTheme);
function changeTheme() { 
    const selectedTheme = themeSelector.value;  
    if (selectedTheme === 'dark') {       
        document.body.classList.add('dark');      
        document.querySelector('.logo').src = 'white-logo.webp';
    } else {   
        document.body.classList.remove('dark');
        document.querySelector('.logo').src = 'blue-logo.webp';
    }
}