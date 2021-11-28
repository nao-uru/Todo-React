/**
 * App
 */
import React, { useState } from "react";

/**
 * Todo初期値
 */
const INIT_DATA = [
  {
    id: 1,
    title: "aaa",
  },
  {
    id: 2,
    title: "bbb",
  },
  {
    id: 3,
    title: "React",
  },
];

/**
 * App
 * @returns
 */
export const App = () => {
  /* state */
  const [addInput, setAddInput] = useState("");
  const [searchText, setSearchText] = useState("");
  const [taskList, setTaskList] = useState(INIT_DATA);
  const newTasks = [...taskList, addInput];
  // const [inputDone, setInputDone] = useState('task-done');

  /**
   * addInputの変更処理
   * @param {*} event
   * @returns
   */
  const onChangeAddInput = (event) => setAddInput(event.target.value);

  /**
   * タスク追加処理
   * @param {*} event
   * @returns
   */
  const addTask = (event) => {
    if (event.key === "Enter" && addInput === "") {
      event.preventDefault();

      setTaskList(newTasks);
      setAddInput("");
    }
  };

  // タスク検索
  const searchTaskInput = (event) => {
    setSearchText(() => event.target.value);

    newTasks.map((inputSearch) => {
      // if (inputSearch.startsWith(searchText) !== false) {
      //   console.log(inputSearch);
      //   console.log(searchText);
      //   console.log("remain tasks");
      // } else {
      //   console.log("no here");
      // }

      return "";
    });
  };

  // タスク削除
  const onClickDelete = (index) => {
    const deleteTask = [...taskList];
    deleteTask.splice(index, 1);
    setTaskList(deleteTask);

    alert("todoを削除してもいいですか？");
  };

  // タスク完了
  const onClickDone = (index) => {};

  const onChangeInput = () => {
    console.log("hello");
  };

  return (
    <>
      <h1 className="title">Todo List</h1>
      <p className="content">ADD TASK</p>

      <div className="wrapper">
        <div className="input-area">
          <form id="add-form" method="get">
            <input
              id="add-input"
              placeholder="New Task"
              type="text"
              autoComplete="off"
              onKeyPress={addTask}
              value={addInput}
              onChange={onChangeAddInput}
            />
          </form>
        </div>

        <div className="input-area">
          <form id="search-form" method="get">
            <input
              id="search-input"
              type="text"
              placeholder="Search Keyword"
              autoComplete="off"
              onChange={searchTaskInput}
              value={searchText}
            />
          </form>
        </div>

        <div className="task-area">
          <ul id="task-area-list">
            {taskList.map((todo, index) => {
              return (
                // keyにindexを扱うことはお勧めしない
                // 参考: https://ja.reactjs.org/docs/lists-and-keys.html#keys
                // 参考2: https://zenn.dev/luvmini511/articles/f7b22d93e9c182
                <li className="task-area-list" key={todo.id}>
                  <input
                    type="text"
                    value={todo.title}
                    onChange={onChangeInput}
                    onClick={() => onClickDone(index)}
                    className="task"
                  />
                  <i
                    className="fa fa-trash"
                    onClick={() => onClickDelete(index)}
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
