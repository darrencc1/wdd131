
const themeSelector = document.getElementById('themeSelector');
themeSelector.addEventListener('change', changeTheme);
function changeTheme() { 
    const selectedTheme = themeSelector.value;  
    if (selectedTheme === 'dark') {       
        document.body.classList.add('dark');      
        document.getElementById('logo').src = 'byui-logo.webp';
    } else {   
        document.body.classList.remove('dark');
        document.getElementById('logo').src = 'byui-logo.webp';
    }
}