import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmptyCart from '../assets/empty_cart.svg';

const Cart = ({ cart, changeQuantity, removeItem }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let price = 0;
        cart.forEach(item => {
            price += +(item.quantity * (item.salePrice || item.originalPrice));
        });

        setTotal(price);
    }, [cart]);

	return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <div className="cart__book">Book</div>
                                <div className="cart__quantity">Quantity</div>
                                <div className="cart__total">Price</div>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map(book => {
                                        return (
                                            <div key={book.id} className="cart__item">
                                                <div className="cart__book">
                                                    <img src={book.url} className="cart__book--img" alt="" />
                                                    <div className="cart__book--info">
                                                        <span className="cart__book--title">{book.title}</span>
                                                        <span className="cart__book--price">${(book.salePrice || book.originalPrice).toFixed(2)}</span>
                                                        <button className="cart__book--remove" onClick={() => removeItem(book.id)}>Remove</button>
                                                    </div>
                                                </div>
                                                <div className="cart__quantity">
                                                    <input type="number" step="1" min={1} max={99} className="cart__input" value={book.quantity} onChange={(event) => changeQuantity(book, event.target.value)} />
                                                </div>
                                                <div className="cart__total">${(book.quantity * (book.salePrice || book.originalPrice)).toFixed(2)}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {cart.length === 0 &&
                            <div className="cart__empty">
                                <img src={EmptyCart} alt="" className="cart__empty--img" />
                                <h2>You don’t have any books in your cart!</h2>
                                <Link to="/books"><button className="btn">Browse Books</button></Link>
                            </div>
                        }
                        {cart.length > 0 &&
                            <div className="total">
                                <div className="total__item total__sub-total">
                                    <span>Subtotal</span>
                                    <span>${(total * 0.9).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__tax">
                                    <span>Tax</span>
                                    <span>${(total * 0.1).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__price">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <button className="btn btn__checkout no-cursor" onClick={() => alert(`Checkout not functional at this time`)}>Proceed to Checkout</button>
                            </div>
                        }
                    </div>
                </div>
            </main>
        </div>
    )
};

export default Cart;
