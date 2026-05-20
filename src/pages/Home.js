import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Blue Dine</h1>
          <p>Experience Premium All-You-Can-Eat Dining</p>
          <Link to="/booking" className="btn btn-large">Book Your Table</Link>
        </div>
      </div>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Blue Dine?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🍽️ All You Can Eat</h3>
              <p>Unlimited servings of delicious cuisine</p>
            </div>
            <div className="feature-card">
              <h3>⭐ 4.0 Star Rating</h3>
              <p>663 satisfied customers</p>
            </div>
            <div className="feature-card">
              <h3>👨‍👩‍👧‍👦 Family Friendly</h3>
              <p>Perfect for all occasions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
