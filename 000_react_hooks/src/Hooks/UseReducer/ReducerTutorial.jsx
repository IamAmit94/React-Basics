import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;


/**This is also another example of the reducer hook in this
 * we are increasing the value and displaying the text with the same button.
 * So at first it will display the count and as we click on it 2nd time it will display the text
 */


/**  dispatch is a function used to send actions to the reducer.
   When an action is dispatched, the reducer function is called with the 
   current state and the dispatched action. It then returns the new state
   based on the action.

*/