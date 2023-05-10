import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-white font-bold">
        <div className="flex container mx-auto px-8 justify-between items-center">
            <Link to="/" className="text-2xl md:text-4xl font-serif absolute md:static left-4 top-8 md:block">Logo</Link>
            <div className="flex md:flex-row items-center justify-center flex-col w-full md:w-auto p-8 gap-2 md:gap-8">
                <Link to="add-book">Add Books</Link>
                <Link to="view-books">View Books</Link>
                <Link to="modify-book">Modify Book</Link>
                <Link to="login">Login</Link>
            </div>
        </div>
    </header>
  )
}

export default Header