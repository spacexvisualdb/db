import React, { Component } from 'react';
import axios from 'axios';
import Banner from './banner';
import LaunchList from './LaunchList';
 
const URL_LAUNCH_PAST = 'https://api.spacexdata.com/v3/launches/past';
const URL_LAUNCH_NEXT = 'https://api.spacexdata.com/v3/launches/next';

class Home extends Component {
  state = {
    launchs: [],
    next:[]
  };

  componentDidMount() {
    axios.get(URL_LAUNCH_PAST).then(response => {
      this.setState({
        launchs: response.data
      });
    });
    axios.get(URL_LAUNCH_NEXT).then(response => {
      this.setState({
        next: response.data
      });
    });
  }

  render() {
    return (
      <>
       <div className="next-launch-box">
       <Banner nextLaunch={this.state.next} />
       </div>
        <LaunchList allLaunchs={this.state.launchs} />
      </>
    );
  }
}
export default Home;
