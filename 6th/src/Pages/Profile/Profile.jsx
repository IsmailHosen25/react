import React from "react";
import user from "../../assets/user.png";
export default function Profile() {
  return (
    <div>
      <div class="image-upload">
        <label for="file-input">
          <img src={user} />
        </label>

        <input id="file-input" type="file" className="inp" />
      </div>
      <div>
        <p>Name: </p>
        <p>Email: </p>
        <p>Age: </p>
      </div>
    </div>
  );
}
