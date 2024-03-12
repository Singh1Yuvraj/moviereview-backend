const mongoose =require('mongoose')
const cors =require('cors')
const express = require('express');
const { moviesModel } = require('./Model/moviesModel');
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://Yuvraj:Yuvraj@cluster0.ahx8oeo.mongodb.net/moviesreview?retryWrites=true&w=majority&appName=Cluster0" );
mongoose.connection.on('connected', () => {
  console.log('Database connected successfully');
});
mongoose.connection.on('error', (err) => {
  console.error('Database connection error:', err);
});
app.use(cors());
app.use(express.json());
console.log(process.env.MONGO_URI);

app.post('/add-movie', async(req, res) => {
  try {
    console.log(req.body);
    let data=await new moviesModel(req.body).save();
    // await data.save();
    res.send({message:'Data added',data:data})
  } catch (error) {
    res.send(error)
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
