// Registration Function
const handleRegister = async (userData) => {
  try {
      const response = await fetch('php/register.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(userData)
      });
      return await response.json();
  } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'Network error' };
  }
};

// Login Function
const handleLogin = async (userData) => {
  try {
      const response = await fetch('php/login.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(userData)
      });
      return await response.json();
  } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Network error' };
  }
};

// Signup Form Submission
document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const userData = {
      name: document.getElementById('signupName').value,
      email: document.getElementById('signupEmail').value,
      password: document.getElementById('signupPassword').value
  };

  const result = await handleRegister(userData);
  if (result.success) {
      window.location.href = 'login.html?registered=true';
  } else {
      alert(`Registration failed: ${result.message}`);
  }
});

// Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const userData = {
      email: document.getElementById('loginEmail').value,
      password: document.getElementById('loginPassword').value
  };

  const result = await handleLogin(userData);
  if (result.success) {
      window.location.href = 'index.html';
  } else {
      alert(`Login failed: ${result.message}`);
  }
});