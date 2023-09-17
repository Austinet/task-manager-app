import profile from "../../assets/profile.jpg";
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h2>Task Manager</h2>
        <div className="profile">
          <i className="fas fa-bell"></i>
          <img src={profile} alt="profile picture" />
        </div>
      </div>
    </header>
  );
};

export default Header;
