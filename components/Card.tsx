import React from "react";

type Props = {
  children: React.ReactNode;
};

const data = [
  {
    id: "1",
    children: "BERMUDAS",
    image:
      "https://hurley.com.br/cdn/shop/collections/download_3_ca584ca2-0da0-4153-bac8-9b22ce561a85.png?",
  },
  {
    id: "2",
    children: "CAMISETAS",
    image: "https://hurley.com.br/cdn/shop/collections/images.png?",
  },
  {
    id: "3",
    children: "CALÇADOS",
    image: "https://hurley.com.br/cdn/shop/collections/3_1.png?",
  },
  {
    id: "4",
    children: "ROUPAS DE BORRACHA",
    image: "https://hurley.com.br/cdn/shop/collections/2_2.png?",
  },
];

export default function Card({ children }: Props) {
  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <li className="card-list-template">
            <div className="card-list-template-image">
              <img src={item.image} alt="Card Image" />
            </div>
            <div className="card-title">
              <h3>{item.children}</h3>
              <a href="" className="card-btn">
                COMPRAR
              </a>
            </div>
          </li>
        </div>
      ))}
    </>
  );
}
