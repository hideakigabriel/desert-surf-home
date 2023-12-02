import React from "react";

type Props = {
  children: React.ReactNode;
};

const data = [
  { id: '1', image: '', title: '', totalPrice: '', price: ''},
  { id: '2', image: '', title: '', totalPrice: '', price: ''},
  { id: '3', image: '', title: '', totalPrice: '', price: ''},
  { id: '4', image: '', title: '', totalPrice: '', price: ''},
]

export default function ProductItem({ children }: Props) {
  return (
    <>
        <div>
          <li className="card-list-template product-hover">
            <div className="card-list-template-image">
              <img src="https://hurley.com.br/cdn/shop/products/HYBM060014_VERDE_-1.jpg?v=1695905921&width=360" alt="Card Image" />
            </div>
            <div className="product-wrap">
              <a href="http://">BERMUDA HURLEY EXPLORE PHANTOM TREK II APEX 17,5" VERDE</a>
              <div className="price-wrap">
                <s>R$ 659</s>
                <span>R$ 395,94</span>
              </div>
            </div>
          </li>
        </div>
    </>
  );
}
