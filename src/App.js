import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./styles.css";

function refresh() {
  if (
    window.confirm("Are you sure you want to remove all items from your list?")
  ) {
    window.location.reload(false);
  } else {
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id != id);
    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="app">
        <div className="container">
          <h1>MY LIST</h1>
          <input
            type="text"
            placeholder="Type something..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
            
          />
          <br />
          <button className="add-button" onClick={() => this.addItem()}>
            Add Item
          </button>
          <button className="remove-button" onClick={refresh}>
            Remove All
          </button>

          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    className="delete"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    Delete
                  </button>
                  <br />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
