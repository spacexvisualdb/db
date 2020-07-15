import React, { Component ,lazy,Suspense} from 'react';
import axios from 'axios';
import Banner from './banner';
//import LaunchList from './LaunchList';
 
const LaunchList = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./LaunchList")), 100)
    )
);



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
       <Suspense fallback={<div>Loading...</div>}>
       <div className="next-launch-box">
       <Banner nextLaunch={this.state.next} />
       </div>
        <LaunchList allLaunchs={this.state.launchs} />
        </Suspense>
      </>
    );
  }
}
export default Home;
