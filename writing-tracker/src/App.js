import React from "react";
import "./App.css";

import Header from "./components/Header";
import Timer from "./components/Timer";
import Logs from "./components/Logs";

class App extends React.Component {
  // state = {
  //   completedCount: 0,
  //   completed: []
  // };

  state = {
    completedCount: 0,
    completed: {}
  };

  // addCompleted = () => {
  //   this.setState(currentState => {
  //     let newCompleted = [...currentState.completed];
  //     newCompleted.push({ id: currentState.completedCount + 1 });
  //     return {
  //       completedCount: currentState.completedCount + 1,
  //       completed: newCompleted
  //     };
  //   });
  // };

  addCompleted = () => {
    this.setState(currentState => {
      return {
        completedCount: currentState.completedCount + 1,
        completed: {
          ...currentState.completed,
          [Date.now()]: { id: Date.now(), date: new Date(Date.now()) }
        }
      };
    });
  };

  dealWithWords = event => {
    event.preventDefault();
    let words = event.target[0].value;
    let id = event.target.id;
    this.updateWordsWritten(id, words);
  };

  updateWordsWritten = (id, words) => {
    this.setState(currentState => {
      return {
        completed: {
          ...currentState.completed,
          [id]: { ...currentState.completed[id], id, words }
        }
      };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div id="app">
        <Header />
        <Timer addCompleted={this.addCompleted} />
        <Logs
          completed={this.state.completed}
          dealWithWords={this.dealWithWords}
        />
      </div>
    );
  }
}

export default App;
