import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDO, removeToDO } from "./actions/Index.js";

function ToDoList() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.toDoReducers.list);
  console.log(lists);

  return (
    <div className="main_div text-center">
      <div className="child_div">
        <figure>
          <figcaption>Add your List Here</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="✍️ Add Items..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            type="submit"
            disabled={inputData === "" ? true : false}
            title="add-list"
          >
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addToDo(inputData), setInputData(""))}
            ></i>
          </button>
        </div>

        <div className="items">
          {lists.map((item) => {
            return (
              <div
                key={item.id}
                className="child_item d-flex justify-content-between"
              >
                <h3>{item.data}</h3>
                <i
                  className="far fa-trash-alt text-danger pe-auto"
                  title="Delete Item"
                  onClick={() => dispatch(deleteToDO(item.id))}
                ></i>
              </div>
            );
          })}

          <button
            className="btn btn-primary fs-5 my-4 px-4 py-2"
            onClick={() => dispatch(removeToDO())}
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
