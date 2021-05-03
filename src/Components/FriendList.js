import React from "react";
import friendsCardData from "../data/friendsData";

function FriendList(friends) {
  return (
    <div className="friendList">
      {friendsCardData.map((item) => (
        <div class="card discover__card__style ml-5 mb-5">
          <div class="row no-gutters">
            <div class="col-auto">
              <img src={item.userImg} class="img-fluid discover_img" alt="" />
            </div>
            <div class="col">
              <div class="card-block px-2">
                <h4 class="card-title">{item.userName}</h4>
                <p class="card-text">{item.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendList;
