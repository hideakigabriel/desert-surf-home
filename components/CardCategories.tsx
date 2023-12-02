import React from "react";

type Props = {
  children: React.ReactNode;
};

const data = [
  {
    id: "1",
    children: "MAIS VENDIDOS",
    image:
      "https://hurley.com.br/cdn/shop/collections/I4I5722.jpg?v=1698941774&width=615",
  },
  {
    id: "2",
    children: "NOVIDADES",
    image: "https://hurley.com.br/cdn/shop/collections/Untitled_design_59.png?v=1698941570&width=750",
  }
];

export default function CardCategories({ children }: Props) {
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
