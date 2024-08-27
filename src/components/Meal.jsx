const Meal = ({ title, description, price, picture, popular }) => {
  return (
    <div>
      <div className="meal-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="meal-price">{price} €</span>
        {popular && <span>Populaire</span>}
      </div>
      {picture && (
        <div className="meal-picture">
          <img src={picture} alt={title} />
        </div>
      )}
    </div>
  );
};

export default Meal;
