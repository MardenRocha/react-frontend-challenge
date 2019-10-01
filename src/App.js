import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import User from "./components/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Repos from "./components/Repos";
import RepoDetail from "./components/RepoDetail";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  onChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-4">
              <h1 className="display-4">
                GitHub <em className="text-success">finder</em>
              </h1>
            </div>
          </div>
        </div>
        <Route
          path="/"
          exact={true}
          render={() => (
            <Search onChange={this.onChange} value={this.state.search} />
          )}
        />

        <Route path="/user/:username" exact={true} component={User} />

        <Route path="/user/:username/repos" component={Repos} />

        <Route path="/repos/:full_name" component={RepoDetail} />
      </Router>
    );
  }
}

export default App;
