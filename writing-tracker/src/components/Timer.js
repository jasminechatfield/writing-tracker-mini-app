import React from "react";

class Timer extends React.Component {
  state = {
    minutes: 0,
    seconds: 5,
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
      if (this.state.minutes === 0 && this.state.seconds <= 1) {
        clearInterval(myTimer);
      }
      if (this.state.minutes === 0 && this.state.seconds === 1) {
        this.props.addCompleted();
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

  displayTime = unit => {
    // the following 2 if statements are to combat the time showing as 0-1.59 after cancelling...
    if (unit === "minutes" && this.state[unit] === -1) {
      return "00";
    }
    if (unit === "seconds" && this.state.minutes === -1) {
      return "00";
    }
    if (this.state[unit] >= 10) {
      return this.state[unit];
    } else {
      return "0" + this.state[unit].toString();
    }
  };

  resetTimer = () => {
    this.setState({ minutes: 0, seconds: 5, counting: false });
  };

  endSession = () => {
    this.setState({ minutes: 0, seconds: 0, counting: false });
    this.props.addCompleted();
  };

  render() {
    return (
      <div id="timer">
        <button onClick={this.resetTimer}>Reset time</button>
        <button onClick={this.toggleCountDown}>Start/Pause</button>
        <button onClick={this.endSession}>End session early</button>
        <p>
          {" "}
          {this.displayTime("minutes")} : {this.displayTime("seconds")}
        </p>
      </div>
    );
  }
}

export default Timer;
