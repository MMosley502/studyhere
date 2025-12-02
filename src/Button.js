import React, { useState } from "react";
import ReactDOM from "react-dom";

const Input = () => {
  return <input placeholder="Your input here" />;
};

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div>
      <h1>Button</h1>
      <button onClick={onAddBtnClick}>Add input</button>
      {inputList}
    </div>
  );
};

//ReactDOM.render(<Form />, document.getElementById("form"));
const button = ReactDOM.createRoot(document.getElementById('form'));
button.render(
  <React.StrictMode>
     <Form />
   </React.StrictMode>
);
export default Form;
// onst root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );