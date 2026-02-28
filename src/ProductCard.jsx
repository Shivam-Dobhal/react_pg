function App() {
  const product = {
    name: "iPhone 15 Pro",
    price: 134900,
    originalPrice: 159900,
    inStock: true,
    rating: 4.5,
    reviews: 128,
    image: "📱"
  };
  
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  
  return (
    <div className="app-container">
      <div className="product-card">
        <div className="product-image">
          <span className="product-icon">{product.image}</span>
          {discount > 0 && (
            <div className="discount-badge">-{discount}%</div>
          )}
        </div>
        
        <div className="product-details">
          <h2 className="product-name">{product.name}</h2>
          
          <div className="rating-section">
            <div className="stars">
              {"⭐".repeat(Math.floor(product.rating))}
            </div>
            <span className="rating-text">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          
          <div className="price-section">
            <div className="current-price">
              ₹{product.price.toLocaleString('en-IN')}
            </div>
            {product.originalPrice > product.price && (
              <div className="original-price">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </div>
            )}
          </div>
          
          <div className="stock-status">
            {product.inStock ? (
              <span className="in-stock">✅ In Stock</span>
            ) : (
              <span className="out-stock">❌ Out of Stock</span>
            )}
          </div>
          
          <button className="buy-button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default App