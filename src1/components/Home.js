import React from 'react';
import "./Home.css";
import CardView from "./CardView";

function Home() {
  return (
    <div class="action">
      <div class="form">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="image/a.jpg" class="d-block w-100" alt="image/a.jpg" />
          </div>
          <div class="carousel-item">
            <img src="image/b.jpg" class="d-block w-100" alt="image/b.jpg" />
          </div>
          <div class="carousel-item">
            <img src="image/c.jpg" class="d-block w-100" alt="image/c.jpg" />
          </div>
          <div class="carousel-item">
            <img src="image/d.jpg" class="d-block w-100" alt="image/d.jpg" />
          </div>
          <div class="carousel-item">
            <img src="image/e.jpg" class="d-block w-100" alt="image/e.jpg" />
          </div>
          <div class="carousel-item">
            <img src="image/f.jpg" class="d-block w-100" alt="image/f.jpg" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <CardView />
    </div>
    
  );
};

export default Home;