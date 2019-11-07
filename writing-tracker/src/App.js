import React from "react";
import "./App.css";

import Header from "./components/Header";
import Timer from "./components/Timer";

class App extends React.Component {
  state = {
    completedCount: 0,
    completed: []
  };

  addCompleted = () => {
    this.setState(currentState => {
      let newCompleted = [...currentState.completed];
      newCompleted.push({ id: currentState.completedCount + 1 });
      return {
        completedCount: currentState.completedCount + 1,
        completed: newCompleted
      };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div id="app">
        <Header />
        <Timer addCompleted={this.addCompleted} />
        <Logs />
      </div>
    );
  }
}

export default App;
