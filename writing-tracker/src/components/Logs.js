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

  return (
    <div id="logs">
      {props.completed.map(item => {
        return (
          <div key={item.id}>
            No. {item.id}:{" "}
            {item.words ? `${item.words} words written` : getWords(item.id)}
          </div>
        );
      })}
    </div>
  );
};

export default Logs;
