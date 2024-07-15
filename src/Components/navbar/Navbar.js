import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const { cart } = useContext(GlobalContext);

  const openNewTab = () => {
    const newWindow = window.open();
    newWindow.document.write(`
      <html>
        <head>
          <style>
            body {
              background-color: pink;
              font-family: Arial, sans-serif;
              padding: 20px;
            }
            h1 {
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
            }
            .container p {
              margin-bottom: 15px;
            }
            .container ul {
              list-style-type: disc;
              margin-left: 20px;
              margin-bottom: 15px;
            }
            .form-group {
              margin-bottom: 20px;
            }
            .form-group label {
              display: block;
              margin-bottom: 5px;
              font-weight: bold;
            }
            .form-group input[type="text"],
            .form-group input[type="email"] {
              width: 100%;
              padding: 8px;
              font-size: 16px;
              border: 1px solid #ccc;
              border-radius: 4px;
            }
            .form-group textarea {
              width: 100%;
              padding: 8px;
              font-size: 16px;
              border: 1px solid #ccc;
              border-radius: 4px;
              resize: vertical;
              height: 100px;
            }
            button {
              background-color: #f436ae;
              color: white;
              padding: 10px 20px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              margin-top: 20px;
              font-size: 16px;
            }
            button:hover {
              background-color: #c62828;
            }
            .message {
              background-color: #4caf50;
              color: white;
              padding: 10px 20px;
              border-radius: 4px;
              margin-top: 10px;
            }
            .image-container {
              text-align: center;
              margin-bottom: 20px;
            }
            .image-container img {
              max-width: 100%;
              height: auto;
              border-radius: 4px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to #DonateMyntra</h1>
            <p>We're excited to have you join our initiative to make a positive impact through fashion. #DonateMyntra is all about giving your gently-used clothing a second life while helping those in need. Together, we can reduce waste, support our communities, and promote sustainable fashion choices.</p>
            <h2>#DonateMyntra: Give Back, Get Rewarded</h2>
            <p>Donating your gently-used clothes has never been easier:</p>
            <ul>
              <li>Apply for our donate service</li>
              <li>Our team will come to your location to pick up the clothes</li>
              <li>Earn cashpoints for your generous initiative</li>
            </ul>
            
            <div class="image-container">
              <img src="https://images.indianexpress.com/2021/01/myntra.png" alt="DonateMyntra Image">
            </div>

            <form>
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required>
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required>
              </div>
              <div class="form-group">
                <label for="address">Pickup Address</label>
                <textarea id="address" name="address" placeholder="Enter your pickup address" required></textarea>
              </div>
              <button type="button" onclick="showMessage()">Request Donation Service</button>
              <div class="message" id="successMessage" style="display: none;">Applied Successfully</div>
              <script>
                function showMessage() {
                  const message = document.getElementById('successMessage');
                  message.style.display = 'block';
                }
              </script>
            </form>
          </div>
        </body>
      </html>
    `);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <h2>MyntraThriftStore</h2>
      </Link>
      <ul className="navbar-ul">
        <li onClick={openNewTab}>Donate</li>
        <li onClick={() => window.open("https://example.com/sell", "_blank")}>Sell</li>
        <li onClick={() => window.open("https://example.com/thriftstore", "_blank")}>ThriftStore</li>
        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li className="order">Orders</li>
        </Link>
        <button className="nav-btn">Hi, Vidhi</button>
      </ul>
    </div>
  );
};

export default Navbar;
