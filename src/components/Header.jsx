import deliverooLogo from "../assets/images/logo-teal.svg";

const Header = ({ name, description, picture }) => {
  return (
    <header>
      <div className="top-bar">
        <div className="container logo">
          <img src={deliverooLogo} alt="Deliveroo logo" />
        </div>
      </div>
      <div className="container header-div">
        <div className="header-text">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="header-image">
          <img src={picture} alt={name} />
        </div>
      </div>
    </header>
  );
};

export default Header;
