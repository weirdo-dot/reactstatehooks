import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Akeju Mariam',
        bio: 'A software developer from Nigeria.',
        imgSrc: 'https://avatars.githubusercontent.com/u/159588898?v=4',
        profession: 'Software Engineer'
      },
      shows: false,
      lastMountedTime: Date.now(),
      timeSinceMounted: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeSinceMounted: Math.floor((Date.now() - this.state.lastMountedTime) / 1000) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, timeSinceMounted } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <h2>{person.profession}</h2>
          </div>
        )}

        <p>Time since last mount: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
