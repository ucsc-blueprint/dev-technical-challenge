/**
 * IMPORTANT: This is the only file you should be modifying to complete the challenge.
 */

import './App.css'

import BOOK_DATA from "./books"

function App() {
  /**
   * This array contains the book data.
   * The array is a array of book objects in the following format:
   * {
        "bookName": book-name,
        "bookDes": book-description,
        "bookImg": url-to-book-image,
        "bookURL": link to goodreads page
    },

    If you're unsure how to access the data please look into accesing data from javascript object.
   */
  const BOOKS_JSON = JSON.parse(BOOK_DATA);

  return (
    <>
      <h1 className="title">✨Great Books Everyone Should Read✨</h1>
      <div className="cardsContainer">
       {/**
        * In this div display all the data fron the BOOKS_JSON array.
        * You will be utilizing a React Component that has already been created for you in this repo.
        * Please insure to import it properly before use.
        * 
        * Additionally you will need to pass in specific data to customize the component.
        * If you are unsure how to do this please look into props and the role they play in React.
        */}
      </div>
    </>
  )
}

export default App
