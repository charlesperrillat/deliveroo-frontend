import Meal from "./Meal";
import Cart from "./Cart";
import { useState } from "react";

const Main = ({ categories }) => {
  const [cart, setCart] = useState([]);
  return (
    <main>
      <div className="container main-content">
        <div className="menu">
          {categories.map((category, index) => {
            if (category.meals.length > 0) {
              return (
                <div key={category.name}>
                  <h2>{category.name}</h2>
                  <div className="category-items">
                    {categories[index].meals.map((meal) => {
                      return (
                        <div
                          key={meal.id}
                          className="meal"
                          onClick={() => {
                            const cartCopy = [...cart];

                            const isInCart = cartCopy.find((item) => {
                              return item.title === meal.title;
                            });
                            console.log(isInCart);
                            if (isInCart) {
                              isInCart.counter++;
                            } else {
                              cartCopy.push({
                                title: meal.title,
                                price: meal.price,
                                counter: 1,
                              });
                            }

                            setCart(cartCopy);
                          }}
                        >
                          <Meal
                            title={meal.title}
                            description={meal.description}
                            price={meal.price}
                            picture={meal.picture}
                            isPopular={meal.popular}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="cart-column">
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
    </main>
  );
};

export default Main;
