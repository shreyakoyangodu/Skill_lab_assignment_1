const login = (req, res) => {
    // Authentication logic
    res.json({ message: 'Login successful' });
  };
  
  const register = (req, res) => {
    // Registration logic
    res.json({ message: 'Registration successful' });
  };
  
  module.exports = {
    login,
    register,
  };
  