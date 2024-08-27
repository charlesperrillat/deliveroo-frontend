const Cart = ({ cart }) => {
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-validate-button">
          <button>Valider mon panier</button>
        </div>
        <p>Votre panier est vide</p>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <div className="cart-validate-button">
          <button>Valider mon panier</button>
        </div>
        <div className="cart-items">
          {cart.map((item) => {
            return (
              <div className="cart-item">
                <div className="item-counter">
                  <button>-</button>
                  <span>{item.counter}</span>
                  <button>+</button>
                </div>
                <div className="item-info">
                  <div className="item-name">
                    <span>{item.title}</span>
                  </div>
                  <span>{item.price} €</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Cart;
