import React, { useState } from "react";
import Header from "./Header";
import "../Friends.css";
import FriendList from "./FriendList";
import friendsCardData from "../data/friendsData";
// import React, { useState } from "react";

function Friends() {
  const [friendState, setFriendsState] = useState({
    friendsCardData,
    searchTerm: "",
  });
  const editSearchTerm = (e) => {
    setFriendsState({
      friendsCardData: friendsCardData,
      searchTerm: e.target.value,
    });
  };

  const dynamicSearch = () => {
    return friendState.friendsCardData.filter((friend) =>
      friend.userName
        .toLowerCase()
        .includes(friendState.searchTerm.toLowerCase())
    );
  };
  return (
    <div className="friends">
      <Header />
      <div className="row remove__scrollbar ml-5 mr-5">
        <div className="col-md-1 exploreHobbies__title mb-5 mt-5 ml-5 mr-5">
          <p>Friends</p>
        </div>
        <div className="col-md-4">
          <div class="input-group mb-3 mt-5">
            <input
              type="text"
              class="form-control addHobbies__searchInput"
              placeholder="Search Friends"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              //   value={friendsCardData.searchTerm}
              onChange={editSearchTerm}
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-primary addHobbies_search_button"
                type="button">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row remove__scrollbar ml-5 mr-5">
        <div className="col-md-6 mb-3">
          <FriendList friends={dynamicSearch()} />
        </div>
        <div className="col-md-6">
          <div class="card discover__createPost">
            <div class="card-body">
              <h4 class="card-title title__color">Arya Stark</h4>
              <hr />
              <p class="card-text">
                <div className="row remove__scrollbar">
                  <div className="col-md-4 mb-3">
                    <input
                      type="text"
                      class="form-control discover_input_addTitle"
                      placeholder="Add a title"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </div>
                <div className="row remove__scrollbar mb-3">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <textarea
                      className="friends__textArea"
                      placeholder="   What would you like to share ?"></textarea>
                  </div>
                </div>
                <div className="row remove__scrollbar">
                  <div className="col-md-2">
                    <textarea
                      className="friends__textArea"
                      placeholder="   What would you like to share ?"></textarea>
                  </div>
                </div>
                <div className="row remove__scrollbar">
                  <div className="col-md-8"></div>
                  <div className="col-md-2">
                    <input
                      type="text"
                      class="form-control discover_input_addTitle"
                      placeholder="Add a title"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friends;
