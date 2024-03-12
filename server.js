const mongoose =require('mongoose')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://rajnish:rajnish@cluster1.cbv7x36.mongodb.net/movies" , { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
  console.log('Database connected successfully');
});
mongoose.connection.on('error', (err) => {
  console.error('Database connection error:', err);
});
app.use(express.json());
console.log(process.env.MONGO_URI);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
