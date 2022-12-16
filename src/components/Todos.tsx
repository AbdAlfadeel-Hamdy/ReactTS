import React from "react";
const Todos: React.FC<{ items: string[]; children: any }> = (props) => {
  return (
    <ul>
      <li>{props.children}</li>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
