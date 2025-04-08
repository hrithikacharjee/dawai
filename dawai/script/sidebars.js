// script/sidebars.js

document.addEventListener('DOMContentLoaded', function() {
    // Pincode Sidebar Elements
    const pincodeSidebar = document.querySelector('.pincode-sidebar');
    const openPincodeButton = document.getElementById('pick_address');
    const closePincodeButton = pincodeSidebar ? pincodeSidebar.querySelector('.close') : null;

    // Login Sidebar Elements
    const sidebarBackground = document.querySelector('.sidebar-background');
    const loginSidebar = document.getElementById('login-sidebar');
    const openLoginButton = document.getElementById('open_login');
    const loginCloseButton = loginSidebar ? loginSidebar.querySelector('.login-close') : null;
    const toggleForms = loginSidebar ? loginSidebar.querySelectorAll('.toggle-form') : [];
    const loginFormDiv = loginSidebar ? loginSidebar.querySelector('.login-form') : null;
    const registerFormDiv = loginSidebar ? loginSidebar.querySelector('.register-form') : null;

    // Function to open the sidebar (both pincode and login use this background)
    function openSidebar() {
        if (sidebarBackground) {
            sidebarBackground.classList.add('open');
        }
    }

    // Function to close the sidebar
    function closeSidebar() {
        if (sidebarBackground) {
            sidebarBackground.classList.remove('open');
        }
        if (loginSidebar) {
            loginSidebar.classList.remove('open');
            // Reset to login form on close
            if (loginFormDiv && registerFormDiv) {
                loginFormDiv.style.display = 'block';
                registerFormDiv.style.display = 'none';
            }
        }
        if (pincodeSidebar) {
            pincodeSidebar.classList.remove('open');
        }
    }

    // Event listener for opening the pincode sidebar
    if (openPincodeButton && pincodeSidebar) {
        openPincodeButton.addEventListener('click', () => {
            openSidebar();
            pincodeSidebar.classList.add('open');
            if (loginSidebar) {
                loginSidebar.classList.remove('open'); // Close login sidebar if open
            }
        });
    }

    // Event listener for closing the pincode sidebar
    if (closePincodeButton) {
        closePincodeButton.addEventListener('click', closeSidebar);
    }

    // Event listener for opening the login sidebar
    if (openLoginButton && loginSidebar) {
        openLoginButton.addEventListener('click', () => {
            openSidebar();
            loginSidebar.classList.add('open');
            if (pincodeSidebar) {
                pincodeSidebar.classList.remove('open'); // Close pincode sidebar if open
            }
        });
    }

    // Event listener for closing the login sidebar
    if (loginCloseButton) {
        loginCloseButton.addEventListener('click', closeSidebar);
    }

    // Event listeners to toggle between login and register forms
    toggleForms.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            if (loginFormDiv && registerFormDiv) {
                if (target === 'register-form') {
                    loginFormDiv.style.display = 'none';
                    registerFormDiv.style.display = 'block';
                } else if (target === 'login-form') {
                    registerFormDiv.style.display = 'none';
                    loginFormDiv.style.display = 'block';
                }
            }
        });
    });

    // Close sidebar when clicking outside (on the background)
    if (sidebarBackground) {
        sidebarBackground.addEventListener('click', (event) => {
            if (event.target === sidebarBackground) {
                closeSidebar();
            }
        });
    }
});