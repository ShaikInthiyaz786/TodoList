import React, { Component } from "react";
import "./style.css";

// get the localStorage data back
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputdata: "",
      items: getLocalData(),
      isEditItem: "",
      toggleButton: false,
    };
  }

  // add the items function
  addItem = () => {
    const { inputdata, items, toggleButton, isEditItem } = this.state;

    if (!inputdata) {
      alert("Please fill in the data");
    } else if (inputdata && toggleButton) {
      this.setState({
        items: items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        }),
        inputdata: "",
        isEditItem: null,
        toggleButton: false,
      });
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
        isCompleted: false,
      };
      this.setState({
        items: [...items, myNewInputData],
        inputdata: "",
      });
    }
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.addItem();
    }
  };

  // edit the items
  editItem = (index) => {
    const item_todo_edited = this.state.items.find((curElem) => {
      return curElem.id === index;
    });
    this.setState({
      inputdata: item_todo_edited.name,
      isEditItem: index,
      toggleButton: true,
    });
  };

  // delete items section
  deleteItem = (index) => {
    const updatedItems = this.state.items.filter((curElem) => {
      return curElem.id !== index;
    });
    this.setState({ items: updatedItems });
  };

  // mark items as completed
  markItem = (index) => {
    this.setState({
      items: this.state.items.map((curElem) => {
        if (curElem.id === index) {
          return { ...curElem, isCompleted: !curElem.isCompleted };
        }
        return curElem;
      }),
    });
  };

  // remove all the elements
  removeAll = () => {
    this.setState({ items: [] });
  };

  // adding localStorage
  componentDidUpdate(prevProps, prevState) {
    if (prevState.items !== this.state.items) {
      localStorage.setItem("mytodolist", JSON.stringify(this.state.items));
    }
  }

  handleInputChange = (event) => {
    this.setState({ inputdata: event.target.value });
  };

  render() {
    const { inputdata, items, toggleButton } = this.state;

    return (
      <>
        <div className="main-div">
          <div className="child-div">
            <figure>
              <img src="/checlist.webp" alt="todologo" />
              <figcaption>Todo List</figcaption>
            </figure>
            <div className="addItems">
              <input
                type="text"
                placeholder="✍ Add Item"
                className="form-control"
                value={inputdata}
                onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress}
              />
              {toggleButton ? (
                <i className="far fa-edit add-btn" onClick={this.addItem}></i>
              ) : (
                <i className="fa fa-plus add-btn" onClick={this.addItem}></i>
              )}
            </div>
            {/* show our items  */}
            <div className="showItems">
              {items.map((curElem) => {
                return (
                  <div className="eachItem" key={curElem.id} onClick={() => this.markItem(curElem.id)}>
                    <h3 className={curElem.isCompleted ? "completed" : ""} >
                      {curElem.name}
                    </h3>
                    <div className="todo-btn">
                      <i
                        className="far fa-edit add-btn"
                        onClick={(event) => {
                          event.stopPropagation();
                          this.editItem(curElem.id);
                        }}
                      ></i>
                      <i
                        className="far fa-trash-alt add-btn"
                        onClick={(event) => {
                          event.stopPropagation();
                          this.deleteItem(curElem.id);
                        }}
                      ></i>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* remove all button */}
            <div className="showItems">
              <button
                className="btn effect04"
                data-sm-link-text="Remove All"
                onClick={this.removeAll}
              >
                <span> CHECK LIST</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Todo;
