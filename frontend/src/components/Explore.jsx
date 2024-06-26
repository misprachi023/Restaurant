import React, { useState } from 'react';

const Menu = () => {
  const [cart, setCart] = useState([]);

  const menuItems = [
    { img: "./dinner1.jpeg", name: "Grilled Chicken", price: 45 },
    { img: "./dinner2.png", name: "Chocolate Lava", price: 10 },
    { img: "./breakfast1.png", name: "Grilled Pork", price: 65 },
    { img: "./dinner3.png", name: "Spaghetti with grilled mackerel", price: 50 },
    { img: "./lunch1.png", name: "Chicken Nuggets with Potato", price: 30 },
    { img: "./dinner4.png", name: "Chicken in Teriyaki Sauce", price: 57 },
    { img: "./dinner5.png", name: "Grilled mackerel steak", price: 45 },
    { img: "./dinner6.png", name: "Grilled salmon fillet with salad", price: 38 },
    { img: "./reservation.png", name: "Grilled and Fried Chicken", price: 25 },
    { img: "./hero1.png", name: "Pancakes", price: 60 },
    { img: "./hero2.png", name: "Burger", price: 60 },
    { img: "./about.png", name: "Paneer Vegetable", price: 60 },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <section className="menu">
      <div className="container">
        <h1 className="heading">Our Menu</h1>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
              <p>${item.price}</p>
              <button className="order-button" onClick={() => addToCart(item)}>Order Now</button>
            </div>
          ))}
        </div>
        <Cart cart={cart} />
      </div>
    </section>
  );
};

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.img} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
      <div className="total">
        <h3>Total: ${total}</h3>
      </div>
      <button className="check-button">CHECK OUT</button>
    </div>
  );
};

export default Menu;
