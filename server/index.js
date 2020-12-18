const express = require('express');
const bodyParser = require('body-parser');
// body-parser : app.post, app.get이랑 axios.get, axios.post 서로 이어주는거
const cors = require('cors')
// cors : Cross Origin Resource Sharing으로, 도메인 또는 포트 다른 거 서로 통신할때 쓰는 거
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "cruddatabase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Read
app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM movie_reviews";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})

// Create
app.post("/api/insert", (req, res) => {

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?, ?)"
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(result);
        if (err) console.log(err);
    });
})


// Delete
app.delete('/api/delete/:movieName', (req, res) => {
    const name = req.params.movieName;
    const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";
    db.query(sqlDelete, name, (err, result) => {
        if (err) console.log(err);
    })
})

// Update
app.put('/api/update', (req, res) => {
    const name = req.body.movieName;
    const review = req.body.movieReview
    const sqlUpdate = "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?";
    db.query(sqlUpdate, [review, name], (err, result) => {

    })
})

app.listen(5000, () => {
    console.log('running on port 5000');
})