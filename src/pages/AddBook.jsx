import React from "react";
import {v4 as uuidv4} from 'uuid';

const newId = uuidv4();

const AddBook = ({ title, setTitle, todos, setTodos}) => {
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: newId, title: title, completed: false }]);
    setTitle("");
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="form-header">
          <form className="forms" onSubmit={onFormSubmit}>
            <h3 className="form-header">Add a Book to your Library</h3>
            <input
              type="text"
              placeholder="Enter book title"
              name="title"
              id="title"
              className="inputs"
              value={title}
              onChange={onTitleChange}
            />
            <input
              type="text"
              placeholder="Enter book Author"
              name="author"
              id="author"
              className="inputs"
            />
            <input
              type="date"
              placeholder="Select Date"
              name="date"
              id="date"
              className="inputs"
            />
            <label for="collection">Choose a collection:</label>
            <select name="collection" id="collection" className="inputs">
              <option value="wantToRead">Want to Read</option>
              <option value="reading">Reading</option>
              <option value="read">Read</option>
            </select>
            <label for="myfile">Add a cover image:</label>
            <input
              type="file"
              placeholder="Upload Image Cover"
              multiple
              name="image-cover"
              id="image-cover"
              className="inputs"
            />    
            <button className="form-btn">
              Add Book
            </button>
          </form>
          <div className="px-8">
            <h3 className="text-white">Added Books</h3>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBook;