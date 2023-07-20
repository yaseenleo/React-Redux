import React from "react";
import { CartIcon } from "../../assets/icons";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { amount } = useSelector((state) => state.cart);

  //   console.log(
  //     useSelector((state) => console.log(state)),
  //     "store state"
  //   );

  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>Redux Toolkit</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
