import React from "react";

class Timer extends React.Component {
  state = {
    minutes: 0,
    seconds: 10,
    counting: false
  };

  toggleCountDown = () => {
    if (this.state.counting === false) {
      this.countDown();
      this.setState({ counting: true });
    } else {
      this.setState({ counting: false });
    }
  };

  countDown = () => {
    let myTimer = setInterval(() => {
      if (this.state.counting === false) {
        clearInterval(myTimer);
      }
      if (this.state.minutes === 0 && this.state.seconds === 1) {
        clearInterval(myTimer);
      }
      if (this.state.seconds === 0) {
        this.setState(currentState => {
          return { seconds: 60, minutes: currentState.minutes - 1 };
        });
      }
      this.setState(currentState => {
        return { seconds: currentState.seconds - 1 };
      });
    }, 1000);
  };

  render() {
    return (
      <div id="timer">
        <button onClick={this.toggleCountDown}>Start timer</button>
        <p>
          {" "}
          {this.state.minutes} : {this.state.seconds}{" "}
        </p>
      </div>
    );
  }
}

export default Timer;
