import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieReview, setMovieReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);

  const [newMovieReview, setNewMovieReview] = useState("");

  // useEffect는 시작하자마자 하는 거라 생각하면 편함.
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/get`).then((response) => {
      // console.log(response.data);
      setMovieReviewList(response.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post(`${process.env.REACT_APP_API_URL}/insert`, {
      movieName: movieName,
      movieReview: movieReview,
    });

    setMovieReviewList([
      ...movieReviewList,
      { movieName: movieName, movieReview: movieReview },
    ]);
    window.location.reload();
  };

  const deleteReview = (movieName) => {
    Axios.delete(`${process.env.REACT_APP_API_URL}/delete/${movieName}`);
    window.location.reload();
  };

  const updateReview = (movieName) => {
    Axios.put(`${process.env.REACT_APP_API_URL}/update`, {
      movieName: movieName,
      movieReview: newMovieReview,
    });
    setNewMovieReview("");
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Movie Name:</label>
        <input
          type="text"
          name="movieName"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
        <label>Review:</label>
        <input
          type="text"
          name="review"
          onChange={(e) => {
            setMovieReview(e.target.value);
          }}
        />
        <button onClick={submitReview}>Submit</button>
        {movieReviewList &&
          movieReviewList.map((val) => {
            return (
              <div className="card">
                <h1>{val.movieName}</h1>
                <p>{val.movieReview}</p>
                <button
                  onClick={() => {
                    deleteReview(val.movieName);
                  }}
                >
                  Delete
                </button>
                <input
                  type="text"
                  id="updateInput"
                  onChange={(e) => {
                    setNewMovieReview(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateReview(val.movieName);
                  }}
                >
                  Update
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
