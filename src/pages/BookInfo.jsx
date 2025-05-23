import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Book from '../components/ui/Book';
import Rating from '../components/ui/Rating';
import Price from '../components/ui/Price';

const BookInfo = ({ books, addToCart, cart }) => {
    const { id } = useParams();
    // adding a + (unary plus operator) to both sides of the condition converts it to a number
    // if it can't be converted to a number, it'll return NaN
    const book = books.find(book => +book.id === +id);
    const [added, setAdded] = useState(false);
    
    function addBookToCart(book) {
        setAdded(true);
        addToCart(book);
    }

    function bookInCart() {
        return cart.find(book => +book.id === +id);
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} className="book__selected--img" alt="" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">Summary</h3>
                                    <p className="book__summary--para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, architecto dolorem possimus quasi ratione eius, modi obcaecati illo expedita odio excepturi neque nostrum porro, commodi accusamus voluptatum? Unde, necessitatibus maxime.</p>
                                    <p className="book__summary--para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, architecto dolorem possimus quasi ratione eius, modi obcaecati illo expedita odio excepturi neque nostrum porro, commodi accusamus voluptatum? Unde, necessitatibus maxime.</p>
                                </div>
                                {bookInCart() ? (
                                    <Link to="/cart"><button className="btn">View Cart</button></Link>
                                ) : (
                                    <button className="btn" onClick={() => addBookToCart(book)}>Add to Cart</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">Recommended Books</h2>
                        </div>
                        <div className="books">
                            {
                                books
                                    .filter(book => book.rating === 5 && +book.id !== +id)
                                    .map(book => <Book key={book.id} book={book} />)
                                    .slice(0, 4)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BookInfo;