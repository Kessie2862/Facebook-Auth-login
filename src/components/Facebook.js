import React, { Component } from "react";
import FacebookLoginBtn from "react-facebook-login";

export default class LogInFacebook extends Component {
  state = {
    auth: false,
    name: "",
    picture: ""
  };

  componentClicked = () => {
    console.log("Facebook btn Clicked");
  };

  responseFacebook = response => {
    console.log(response);
    if (response.status !== "unknown")
      this.setState({
        auth: true,
        name: response.name,
        picture: response.picture.data.url
      });
  };

  render() {
    let facebookData;

    this.state.auth
      ? (facebookData = (
          <div>
            <img src={this.state.picture} alt={this.state.name} />
            <h2>Welcome {this.state.name}</h2>
          </div>
        ))
      : (facebookData = (
          <FacebookLoginBtn
            appId="2621040624799050"
            autoLoad={true}
            fields="name,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        ));

    return <>{facebookData}</>;
  }
}
