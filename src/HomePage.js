import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <header>
        <nav>
          <h1>My Clothes Shop</h1>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
          </div>
        </nav>
      </header>
      
      <main>
        <h2>Welcome to My Clothes Shop</h2>
        <p>Find the best second-hand clothes here!</p>
      </main>
    </div>
  );
}

export default HomePage;