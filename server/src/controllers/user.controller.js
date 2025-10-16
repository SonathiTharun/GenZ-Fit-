exports.register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body
    // Save user to database
    // Return success response
    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' })
  }
}