import React from "react";
import "./List.css";
import Card from "./UI/Card";

const List = (props) => {
  return (
    <Card className="list-container">
      {props.records.map((item) => (
        <div className="list" key={item.id}>
          <div className="text">{item.name}</div>
          <div className="text">{`(${item.age} Years Old)`}</div>
        </div>
      ))}
    </Card>
  );
};

export default List;