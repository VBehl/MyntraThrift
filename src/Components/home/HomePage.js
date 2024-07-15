// import React from "react";
// import items from "../../mockData/items.json";
// import Item from "../item/Item"; 
// import "./HomePage.css"; 

// function HomePage() {
//   console.log("Items:", items); 

//   return (
//     <section className="item-list">
//       {items.map((item) => (
//         <Item
//           key={item.id} // Ensure each item has a unique key
//           name={item.name}
//           rating={item.rating}
//           price={item.price}
//           saleDiscount={item.saleDiscount}
//           image={item.image}
//           brand={item.brand}
//         />
//       ))}
//     </section>
//   );
// }

// export default HomePage;
import React from "react";
import { Link } from "react-router-dom";
import items from "../../mockData/items.json";
import Item from "../item/Item";
import "./HomePage.css";

function HomePage() {
  return (
    <section className="item-list">
      {items.map((item) => (
        <Link key={item.id} to={`/item/${item.id}`}>
          <Item
            name={item.name}
            rating={item.rating}
            price={item.price}
            saleDiscount={item.saleDiscount}
            image={item.image}
            brand={item.brand}
          />
        </Link>
      ))}
    </section>
  );
}

export default HomePage;
