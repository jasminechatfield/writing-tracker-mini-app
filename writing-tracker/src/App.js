import React from "react";
import "./App.css";

import Header from "./components/Header";
import Timer from "./components/Timer";
import Logs from "./components/Logs";

class App extends React.Component {
  state = {
    completedCount: 0,
    completed: {},
    history: {}
  };

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

  saveAndClearLogs = () => {
    this.saveLogToHistory();
    this.clearState();
  };

  saveLogToHistory = () => {
    localStorage.setItem(
      Date.now().toString,
      JSON.stringify({
        completedCount: this.state.completedCount,
        completed: this.state.completed
      })
    );
  };

  clearState = () => {
    this.setState(currentState => {
      return { ...currentState, completedCount: 0, completed: {} };
    });
  };

  render() {
    console.log(localStorage);
    console.log(this.state);
    return (
      <div id="app">
        <Header />
        <Timer addCompleted={this.addCompleted} />
        <div id="save">
          <button onClick={this.saveAndClearLogs}>Save and clear logs</button>
        </div>
        <Logs
          completed={this.state.completed}
          dealWithWords={this.dealWithWords}
        />
      </div>
    );
  }

  componentDidMount = () => {
    let historyArray = Object.keys(localStorage).sort((a, b) => a - b);
    let historyObj = {};
    historyArray.forEach(session => {
      historyObj[session] = JSON.parse(localStorage.session);
    });
    this.setState(currentState => {
      return { ...currentState, history: { ...historyObj } };
    });
  };
}

export default App;
