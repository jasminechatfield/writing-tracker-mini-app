import React from "react";

const Logs = props => {
  const getWords = id => {
    return (
      <form id={id} onSubmit={props.dealWithWords}>
        <input type="text" name="words" id="words"></input>
        <button>Submit</button>
      </form>
    );
  };

  let logObjects = props.completed;
  let logRefArray = Object.keys(logObjects);

  return (
    <div id="logs">
      <h2>Writing logs</h2>
      {logRefArray.map(log => {
        let logObj = logObjects[log];
        return (
          <div className="log" key={logObj.id}>
            {logObj.date
              .toString()
              .split(" ")
              .slice(0, 5)
              .join(" ")}
            :{" "}
            {logObj.words
              ? `${logObj.words} words written`
              : getWords(logObj.id)}
          </div>
        );
      })}
    </div>
  );
};

export default Logs;
