import "./UserCard.css";
import lightYagami from "../../public/lightYagami.jpg";
const UserCard = ({ title, style }) => {
  // console.log(props);
  // console.log(title);
  return (
    <div className="user-container" style={style}>
      {/* <h1 id="user-title">Light Yagami</h1> */}
      <h1 id="user-title">{title}</h1>
      <img id="user-image" src={lightYagami} alt="Death-Note-Character" />
      <p id="user-desc">Description</p>
    </div>
  );
};

export default UserCard;
