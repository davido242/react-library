import { React } from 'react'
import { Link } from "react-router-dom";

const LoginForm = () => {

  return (
    <form className="forms">
        <h3 className="form-header">Login to Book Library</h3>
        <div>
          {/* {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))} */}
        </div>
        <input type="text" placeholder="Username" name="username" id="username" className="inputs" />
        <input type="password" placeholder="password" className="inputs" />
        <Link to="/add-book" className="form-btn">Login</Link>
        <div className="mt-8 text-center">Not registered yet? <Link to="/registration" className="underline">Register now</Link></div>
      
    </form>
  )
}

export default LoginForm
