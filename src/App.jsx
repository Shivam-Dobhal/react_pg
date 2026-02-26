//! 1
// function App() {
//   return (
//     <div>
//       <h1>Hello React!</h1>
//       <p>This is my first React component</p>
//     </div>
//   )
// }

// export default App

//!2
// function App() {
//   const name = "Shivam Dobhal";
//   const age = 23;
//   const city = "Ghaziabad";
//   const skills = ["HTML", "CSS", "JavaScript", "React"];
  
//   return (
//     <div className="card">
//       <h1>About Me</h1>
//       <h2>{name}</h2>
//       <p>Age: {age}</p>
//       <p>City: {city}</p>
//       <h3>Skills:</h3>
//       <ul>
//         {skills.map((skill, index) => (
//           <li key={index}>{skill}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App




//! 3
// function App() {
//   const num1 = 10;
//   const num2 = 5;
  
//   return (
//     <div className="calculator">
//       <h1>Simple Calculator</h1>
//       <p>{num1} + {num2} = {num1 + num2}</p>
//       <p>{num1} - {num2} = {num1 - num2}</p>
//       <p>{num1} × {num2} = {num1 * num2}</p>
//       <p>{num1} ÷ {num2} = {num1 / num2}</p>
//     </div>
//   )
// }

// export default App





// ! 3

// function App() {
//   const product = {
//     name: "iPhone 15",
//     price: 79999,
//     inStock: true,
//     rating: 4.5
//   };
  
//   return (
//     <div className="product-card">
//       <h2>{product.name}</h2>
//       <p>Price: ₹{product.price.toLocaleString()}</p>
//       <p>{product.inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
//       <p>Rating: {"⭐".repeat(Math.floor(product.rating))} {product.rating}/5</p>
//     </div>
//   )
// }

// export default App





//! 4

// function UserCard() {
//   const user = {
//     name: "Shivam Dobhal",
//     role: "React Developer",
//     location: "Ghaziabad",
//     email: "shivam@example.com"
//   };
  
//   return (
//     <div className="user-card">
//       <h2>{user.name}</h2>
//       <p>📍 {user.location}</p>
//       <p>💼 {user.role}</p>
//       <p>📧 {user.email}</p>
//     </div>
//   )
// }

// export default UserCard




// ! 5
import UserCard from "./UserCard.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>My React App</h1>
      <div className="cards-grid">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default App;


