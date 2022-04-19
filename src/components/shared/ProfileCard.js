import React from "react";
import "./ProfileCard.css";
import { useNavigate } from "react-router-dom";

function ProfileCard(props) {
  let history = useNavigate();
  return (
    <div className="card-container-profile">
      <div className="header-profile">
        <img
          className="profile-img"
          src={`/assets/images/profile.jpg`}
          alt={props.name}
        />
      </div>
      <h1 className="bold-text">
        {props.name} <span className="normal-text">{props?.age}</span>
      </h1>
      <h2 className="normal-text">{props?.city}</h2>
      <div className="social-container">
        <div className="followers">
          <h1 className="bold-text">{props?.point}</h1>
          <h2 className="smaller-text">Point earned</h2>
        </div>
        <div className="likes">
          <h1 className="bold-text">{props?.training}</h1>
          <h2 className="smaller-text">Training done</h2>
        </div>

        {!props?.buttonHide ? (
          <button
            className="btn btn-default btn-secondary"
            style={{ float: "right", margin: 10 }}
            type="button"
            onClick={() => history("/profile")}
          >
            View profile
          </button>
        ) : (
          <div className="photos">
            <h1 className="bold-text">{props?.task}</h1>
            <h2 className="smaller-text">Account opened</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
