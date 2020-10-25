import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/users/currentuser', (req, res) => {
    res.send("Hey there!");
});

app.listen(3000, () => {
    console.log(":: AUTH :: ACTIVE :: 3000");
});


