import React from 'react';
import ReactDOM from 'react-dom/client';

import { books } from './books';
import { Book } from './Book';
import './index.css';

function BookList() {
  return (
    <div>
      <nav>
        <h1 className='header'>Shamazon</h1>
      </nav>
      <section className='booklist'>
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
