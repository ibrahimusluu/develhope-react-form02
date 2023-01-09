import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    const checked = e.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
      // [name]: name !== "remember" ? value : checked,
    });
  };

  // Second Way
  // handleChangeInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   const checked = e.target.checked;

  //   this.setState({
  //     [name]: value,
  //     remember: checked,
  //   });
  // };

  componentDidUpdate() {
    console.log("username: ", this.state.username);
    console.log("password: ", this.state.password);
    console.log("remember: ", this.state.remember);
  }

  handleChangeChecked = (e) => {
    const checked = e.target.checked;

    this.setState({
      remember: checked,
    });

    console.log(this.state.remember);
  };

  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleChangeInput}
        />
        <br />
        <br />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChangeInput}
        />
        <br />
        <br />
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleChangeInput}
        />
      </div>
    );
  }
}
