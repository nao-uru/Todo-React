import React from "react";

export const AddInput = (props) => {
  const {addTask,inputValue,onChange} = props;

  return (
    <div className="input-area">
      <form id="add-form" method="get">
        <input id="add-input" placeholder="New Task" type="text" autoComplete="off" onKeyPress={addTask} value={inputValue} onChange={onChange} />
      </form>
    </div>
  )
}
