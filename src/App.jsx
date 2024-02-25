import Card from './components/Card'
import './App.css'

import BOOK_DATA from "./books"

function App() {
  const BOOKS_JSON = JSON.parse(BOOK_DATA);
  return (
    <>
      <h1 className="title">✨Great Books Everyone Should Read✨</h1>
      <div className="cardsContainer">
        {
          BOOKS_JSON.map((book, bookID) => {
            return (
              <Card 
                cardImg={book.bookImg}
                cardTitle={book.bookName}
                cardContent={book.bookDes}
                btnSource={book.bookURL}
                key={bookID}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default App
