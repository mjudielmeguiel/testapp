document.addEventListener('DOMContentLoaded', () => {
    // Dynamically set the current year in the footer
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Dark Mode Toggle Logic
    const toggleBtn = document.getElementById('themeToggle');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Update button text based on current theme
            if (document.body.classList.contains('dark-mode')) {
                toggleBtn.textContent = 'Toggle Light Mode';
            } else {
                toggleBtn.textContent = 'Toggle Dark Mode';
            }
        });
    }

    console.log("Welcome to Judiel Meguiel Mescallado's personal website!");
});