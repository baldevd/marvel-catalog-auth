const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


//import routes
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');

//app
const app = express();

// db
mongoose
 .connect('mongodb+srv://new-user:k9ZIVn9wTKIejqH1@cluster0.ykm5x.mongodb.net/Users?retryWrites=true&w=majority&ssl=true',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
 .then(() => console.log('DB Connected'))
 .catch(err => console.log(err));

//middlewares
app.use(bodyParser.json());
app.use(cors());

//routes middleware
app.use('/api', authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});
