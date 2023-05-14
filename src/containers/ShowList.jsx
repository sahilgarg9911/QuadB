import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/showlist.css";

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    
    <div className="showlistdiv">
      <h1>TV Shows</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <Link to={`/shows/${show.show.id}`}>{show.show.name}</Link>
            <button>
              <Link to={`/shows/${show.show.id}`}>Show Summary</Link>
            </button>
            <p>{show.show.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
