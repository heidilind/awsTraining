import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";
import { API } from "aws-amplify";
import PullupCard  from "./PullupCard";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      pullups: []
    };
  }

  async componentDidMount() {
    console.log("component did mount")
    console.log(this.props.isAuthenticated)
    if (!this.props.isAuthenticated) {
      return;
    }
  
    try {
      const pullups = await this.pullups();
      this.setState({ pullups});
    } catch (e) {
      alert(e);
    }
  
    this.setState({ isLoading: false });
  }
  
  pullups() {
    return API.get("pullups", "/pullups");
  }

  renderPullupsList(pullups) {
    console.log("pullupit", pullups)
    return [{}].concat(pullups).map(
      (pullup, i) =>
        i !== 0
          ? <PullupCard
              key={pullup.pullupId} 
              title={pullup.content.trim().split("\n")[0]}
              onClick={this.handlePullupClick}
              />
          : <ListGroupItem
              key="new"
              href="/pullups/new"
              onClick={this.handlePullupClick}
            >
              <h4>
                <b>{"\uFF0B"}</b> Create a new pullup
              </h4>
            </ListGroupItem>
    );
  }
  
  handlePullupClick = event => {
    event.preventDefault();
    
    //console.log(this.props.history);
    //this.props.history.push(event.currentTarget.getAttribute("href"));
    console.log('card clicked')
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Pullup Tracker</h1>
        <p>An efficient application to track upper body muscle build progress</p>
      </div>
    );
  }

  renderPullups() {
    return (
      <div className="pullups">
        <PageHeader>Your Tracks</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderPullupsList(this.state.pullups)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderPullups() : this.renderLander()}
      </div>
    );
  }
}