// routes/user.js
const token = req.cookies.token;

if (!token) {
  return res.status(401).json({ message: 'Unauthorized' });
}

try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // Rest of your code...
} catch (error) {
  console.error('JWT Verification Error:', error.message);
  return res.status(401).json({ message: 'Unauthorized' });
}
