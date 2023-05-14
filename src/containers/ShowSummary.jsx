import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/ShowSummary.css";
import { Link } from "react-router-dom";

function ShowSummary() {
  const { id } = useParams();
  const [summary, setSummary] = useState("");

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setSummary(data.summary));
  }, [id]);

  return (
    <div>
      <h1>Summary</h1>
      <p>{summary}</p>
      <Link to="/"><button>Go Back</button></Link>
    </div>
  );
}

export default ShowSummary;
