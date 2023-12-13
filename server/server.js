const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000' // replace with your client's origin
}));
app.use(express.json());

app.post('/register', (req, res) => {
    console.log(req.body);

    res.json({message: 'Registration Successful'});
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});