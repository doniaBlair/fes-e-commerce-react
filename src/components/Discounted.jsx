import React from "react";
import { books } from '../data';
import Book from './ui/Book';

const Discounted = () => {
	return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Discounted <span className="purple">Books</span></h2>
                    <div className="books">
                        {
                            books
                                .filter(book => book.salePrice)
                                .slice(0, 8)
                                .map(book => <Book key={book.id} book={book} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discounted;
