import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import { books } from './data';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
    const [cart, setCart ] = useState([]);

    function addToCart(book) {
        setCart([...cart, {...book, quantity: 1}]);
    }

    function changeQuantity(book, quantity) {
        setCart(cart.map(item => 
            item.id === book.id ? {
                ...item,
                quantity: +quantity // add + to convert to number
            }
            : item
        ));
    }

    function removeItem(id) {
        const bookIndex = cart.findIndex(item => +item.id === +id);
        const updatedCart = [...cart];
        updatedCart.splice(bookIndex, 1);
        setCart(updatedCart);
    }

    function numberOfItems() {
        let counter = 0;
        cart.forEach(item => {
            counter += item.quantity;
        });
        return counter;
    }

    return (
        <Router>
            <div className="App">
                <Nav numberOfItems={numberOfItems()} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<Books books={books} />} />
                    <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
                    <Route path="/cart" element={<Cart cart={cart} books={books} changeQuantity={changeQuantity} removeItem={removeItem} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;