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
  /* add input title */
  const [addInput, setAddInput] = useState("");
  /* search input text */
  const [searchText, setSearchText] = useState("");
  /* todo list */
  const [taskList, setTaskList] = useState(INIT_DATA);
  /* todo 採番ID */
  const [uniqueId, setUniqueId] = useState(INIT_DATA.length + 1);
  // const newTasks = [...taskList, addInput];
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
    if (event.key === "Enter" && addInput !== "") {
      event.preventDefault();

      // 元の配列を破壊しないように配列のコピーを作成して、その値でstateを更新する
      // pushでの配列追加は元の配列の値を変更するのでエラーになる

      // スプレッド構文で展開することで、配列のコピーを作成
      // const newTask = [
      //   ...taskList,
      //   {
      //     id: uniqueId,
      //     title: addInput,
      //   },
      // ];

      // 配列のコピーはconcatでも可能
      // https://kskpblog.com/javascript-array-add/
      const newTask = taskList.concat({
        id: uniqueId,
        title: addInput,
      });

      setTaskList(newTask);

      // 採番IDを連番する
      setUniqueId(uniqueId + 1);

      // 入力値をリセット
      setAddInput("");
    }
  };

  // タスク検索
  const searchTaskInput = (event) => {
    setSearchText(() => event.target.value);

    // newTasks.map((inputSearch) => {
    //   if (inputSearch.startsWith(searchText) !== false) {
    //     console.log(inputSearch);
    //     console.log(searchText);
    //     console.log("remain tasks");
    //   } else {
    //     console.log("no here");
    //   }

    //   return "";
    // });
  };

  /**
   * タスク削除
   * @param {number} id
   */
  const onClickDelete = (id) => {
    // Todoのデータ構造を変更したので、処理を変更する (ただの配列ではなく、オブジェクト配列になったため)
    // const deleteTask = [...taskList];
    // deleteTask.splice(index, 1);

    const deletedNewTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(deletedNewTaskList);

    alert("todoを削除してもいいですか？");
  };

  // タスク完了
  const onClickDone = (index) => {};

  const onChangeInput = () => {
    // console.log("hello");
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
                    onClick={() => onClickDone(todo.id)}
                    className="task"
                  />
                  <i
                    className="fa fa-trash"
                    onClick={() => onClickDelete(todo.id)}
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
