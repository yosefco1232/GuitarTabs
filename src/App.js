import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showFeatured, setShowFeatured] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  
  const guitarTabs = [
    { 
      id: 1, 
      name: "Sweet Child O' Mine - Guns N' Roses", 
      price: 5,
      difficulty: "Intermediate",
      duration: "4:32",
      description: "Complete guitar tab with solo sections"
    },
    { 
      id: 2, 
      name: "Nothing Else Matters - Metallica", 
      price: 5,
      difficulty: "Advanced",
      duration: "6:15",
      description: "Includes fingerpicking pattern and solo"
    },
    { 
      id: 3, 
      name: "Wonderwall - Oasis", 
      price: 5,
      difficulty: "Beginner",
      duration: "3:45",
      description: "Complete chord progression and strumming pattern"
    },
    { 
      id: 4, 
      name: "Hotel California - Eagles", 
      price: 5,
      difficulty: "Advanced",
      duration: "5:30",
      description: "Full tab including the iconic solo"
    }
  ];

  const addToCart = (tab) => {
    if (!cart.find(item => item.id === tab.id)) {
      setCart([...cart, tab]);
    }
  };

  const removeFromCart = (tabId) => {
    setCart(cart.filter(tab => tab.id !== tabId));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="App">
      {showCart && (
        <div 
          className="cart-overlay show" 
          onClick={() => setShowCart(false)}
        />
      )}
      
      <header className="header">
        <nav className="nav">
          <div className="logo">GuitarTabs</div>
          <div className="nav-links">
            <button className="nav-button">All Tabs</button>
            <button className="nav-button">Difficulty</button>
            <button className="nav-button">About</button>
            <button className="nav-button">Login</button>
            <button 
              className="nav-button cart-button"
              onClick={() => setShowCart(!showCart)}
            >
              Cart ({cart.length})
            </button>
          </div>
        </nav>
      </header>

      <div className={`cart-sidebar ${showCart ? 'show' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button 
            className="close-cart"
            onClick={() => setShowCart(false)}
          >
            ×
          </button>
        </div>
        
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(tab => (
                <div key={tab.id} className="cart-item">
                  <div className="cart-item-details">
                    <h3>{tab.name}</h3>
                    <p>${tab.price}</p>
                  </div>
                  <button 
                    className="remove-item"
                    onClick={() => removeFromCart(tab.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button 
                className="checkout-button"
                onClick={() => alert('Proceeding to checkout!')}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>

      <main className="main">
        <section className="hero">
          <h1>Learn Your Favorite Songs</h1>
          <p>High-quality guitar tabs with video demonstrations</p>
          <button 
            className="cta-button"
            onClick={() => {
              setShowFeatured(true);
              document.querySelector('.featured-items').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Browse Tabs
          </button>
        </section>

        <section className="featured-items">
          <h2>Available Tabs</h2>
          <div className="tabs-grid">
            {showFeatured && guitarTabs.map(tab => (
              <div key={tab.id} className="tab-card">
                <div className="video-container">
                  <button className="play-button">▶</button>
                </div>
                <div className="tab-details">
                  <h3>{tab.name}</h3>
                  <div className="tab-info">
                    <span className="difficulty-badge">{tab.difficulty}</span>
                    <span className="duration">{tab.duration}</span>
                  </div>
                  <p className="tab-description">{tab.description}</p>
                  <div className="tab-price-row">
                    <span className="price">${tab.price}</span>
                    <button 
                      className="buy-button"
                      onClick={() => {
                        addToCart(tab);
                        setShowCart(true);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 GuitarTabs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;