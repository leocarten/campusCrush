const handleLogin = async (usernameInput, passwordInput) => {
    try {
      const apiUrl = 'http://18.188.112.190:5001/login';
      const credentials = {
        username: usernameInput,
        password: passwordInput,
      };
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (response.ok) {
        const data = await response.json();
        // console.log('Login successful:', data);
        if (data == 'Successful!!'){
            return true;
        }
      } else {
        console.error('Login failed:', response.status, await response.text());
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  export { handleLogin };  