const users = []; // Simulating user data storage (replace with a database in a real application)

const login = (req, res) => {
  const { username, password } = req.body;

  // Find user by username (replace with database query)
  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful' });
};

const register = (req, res) => {
  const { username, password } = req.body;

  // Check if username is taken (replace with database query)
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ error: 'Username is already taken' });
  }

  // Simulate user registration (replace with database insert)
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);

  res.json({ message: 'Registration successful' });
};

module.exports = {
  login,
  register,
};
