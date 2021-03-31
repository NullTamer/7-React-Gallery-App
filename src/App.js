import React, { Component } from "react";
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import apiKey from "./config/config.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      cats: [],
      dogs: [],
      birds: [],
    };
  }

  componentDidMount() {
    // Load States
    this.performSearch();
    this.performSearch("cats");
    this.performSearch("dogs");
    this.performSearch("birds");
  }

  performSearch = (query) => {
    //Handle Search states
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (query === "cats") {
          this.setState({
            cats: response.data.photos.photo,
          });
        } else if (query === "dogs") {
          this.setState({
            dogs: response.data.photos.photo,
          });
        } else if (query === "birds") {
          this.setState({
            birds: response.data.photos.photo,
          });
        } else {
          this.setState({
            photos: response.data.photos.photo,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    //Render Elements
    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <SearchForm onSearch={this.performSearch} />
            <Nav />
            <Switch>
              <Route
                exact
                path="/search/cats"
                render={() => <PhotoContainer data={this.state.cats} />}
              />
              <Route
                exact
                path="/search/dogs"
                render={() => <PhotoContainer data={this.state.dogs} />}
              />
              <Route
                exact
                path="/search/birds"
                render={() => <PhotoContainer data={this.state.birds} />}
              />
              <Route
                exact
                path="/search/:query"
                render={() => <PhotoContainer data={this.state.photos} />}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
