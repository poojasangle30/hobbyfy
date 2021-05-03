import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery/dist/jquery.js";
import LandingPage from "./Components/LandingPage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Carousel from "./Components/Carousel";
import ExploreHobbies from "./Components/ExploreHobbies";
import AddHobbies from "./Components/AddHobbies";
import ActivityDetail from "./Components/ActivityDetail";
import BuyMaterials from "./Components/BuyMaterials";
import Payment from "./Components/Payment";
import Discover from "./Components/Discover";
import Sellitems from "./Components/Sellitems";
import Friends from "./Components/Friends";
import BuyItems from "./Components/BuyItems";
import BuyItemDetails from "./Components/BuyItemDetails";
import MyHobbies from "./Components/MyHobbies";

global.jQuery = require("jquery");
require("bootstrap");

function App() {
  return (
    <div className="app">
      <head>
        <title>Bootstrap Example</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"></link>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css"
        />
      </head>
      <body>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/carousel" exact component={Carousel} />
            <Route path="/explore" exact component={ExploreHobbies} />
            <Route path="/addHobbies" exact component={AddHobbies} />
            <Route path="/activityDetail" exact component={ActivityDetail} />
            <Route path="/buyMaterials" exact component={BuyMaterials} />
            <Route path="/payment" exact component={Payment} />
            <Route path="/discover" exact component={Discover} />
            <Route path="/sellItems" exact component={Sellitems} />
            <Route path="/friends" exact component={Friends} />
            <Route path="/buyItems" exact component={BuyItems} />
            <Route path="/buyItemDetails" exact component={BuyItemDetails} />
            <Route path="/myHobbies" exact component={MyHobbies} />
          </Switch>
        </Router>
      </body>
    </div>
  );
}

export default App;
