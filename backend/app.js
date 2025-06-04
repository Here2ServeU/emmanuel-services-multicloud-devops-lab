const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Emmanuel-Services Backend');
});

app.post('/signup', (req, res) => {
  const { firstName, lastName, phone, email, service } = req.body;

  if (!firstName || !lastName || !phone || !email || !service) {
    return res.status(400).send({ message: 'Missing required fields' });
  }

  console.log('New Signup:', req.body);
  res.status(200).send({ message: 'Signup successful' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
