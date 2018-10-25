import React, { Component } from 'react';
import logo from './logo.svg';
import FBLogin from './facebook/FBLogin';
import FBPost from './facebook/FBPost';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {fbData: null};
  }
  componentDidMount(){
    this.FB = window.FB;
    this.FB.init({
      appId: 340131399878170,
      cookie: true,
      xfbml: true,
      version: 'v3.2'
    });

    this.FB.AppEvents.logPageView();

    this.FB.getLoginStatus((response) => {
      this.FB.api(
        '/me',
        'GET', {
          "fields": "feed{link,message,full_picture,picture,created_time,updated_time}"
        },
        (response) => {
          this.setState({fbData: response.feed.data});
        }
      );
    });
  }
  render() {
    console.log(this.state.fbData);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FBLogin />
          <div className="postContainer">
            {
              this.state.fbData !== null ? 
              this.state.fbData.map(post => 
              <FBPost post={post}/>)
              : 
              <p>You must log in then refresh the page to view your posts</p>
            }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
