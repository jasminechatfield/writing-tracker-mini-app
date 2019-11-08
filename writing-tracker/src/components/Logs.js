import React from "react";

// class Logs extends React.Component {
//   state = {};

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

//   getWords = id => {
//     return (
//       <form id={id} onSubmit={this.props.dealWithWords}>
//         <input type="text" name="words" id="words"></input>
//         <button>Submit</button>
//       </form>
//     );
//   };

//   storeDateInState = id => {
//     let date = new Date(id);
//     this.setState({ id: date });
//   };

//   render() {
//     let logObjects = this.props.completed;
//     let logRefArray = Object.keys(logObjects);
//     return (
//       <div id="logs">
//         <h2>Writing logs</h2>
//         {logRefArray.map(log => {
//           let logObj = logObjects[log];
//           return (
//             <div className="log" key={logObj.id}>
//               {logObj.date.toString()}:{" "}
//               {logObj.words
//                 ? `${logObj.words} words written`
//                 : this.getWords(logObj.id)}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

export default Logs;

// OLD LOG BEFORE STATE FORMAT UPDATED
// return (
//   <div id="logs">
//     <h2>Writing logs</h2>
//     {props.completed.map(item => {
//       return (
//         <div class="log" key={item.id}>
//           No. {item.id}:{" "}
//           {item.words ? `${item.words} words written` : getWords(item.id)}
//         </div>
//       );
//     })}
//   </div>
// );

// OLD FUNCTIONAL COMPONENT BEFORE TRANSFERRING TO CLASS
// const Logs = props => {
//   const getWords = id => {
//     return (
//       <form id={id} onSubmit={props.dealWithWords}>
//         <input type="text" name="words" id="words"></input>
//         <button>Submit</button>
//       </form>
//     );
//   };

//   let logObjects = props.completed;
//   let logRefArray = Object.keys(logObjects);

//   return (
//     <div id="logs">
//       <h2>Writing logs</h2>
//       {logRefArray.map(log => {
//         let logObj = logObjects[log];
//         return (
//           <div className="log" key={logObj.id}>
//             {new Date(logObj.id).toString()}:{" "}
//             {logObj.words
//               ? `${logObj.words} words written`
//               : getWords(logObj.id)}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
