import { useState } from "react";
import "./App.css";
import Item from "./component/Item";

function App() {
  const [isHover, setIsHover] = useState(false);
  const data1 = [
    {
      name: "Miễn phí giao hàng cho đơn hàng từ 50.000đ",
      expire: "HSD: 26-05-2022",
    },
    {
      name: "Miễn phí giao hàng cho đơn hàng từ 50.000đ",
      expire: "HSD: 26-05-2022",
    },
    {
      name: "Miễn phí giao hàng cho đơn hàng từ 50.000đ",
      expire: "HSD: 26-05-2022",
    },
    {
      name: "Miễn phí giao hàng cho đơn hàng từ 50.000đ",
      expire: "HSD: 26-05-2022",
    },
  ];
  const handleHoverRow = (status) => {
    setIsHover(status);
  };
  return (
    <div>
      <div>Phan Van Thong</div>
      <div
        onMouseEnter={() => handleHoverRow(true)}
        onMouseLeave={() => handleHoverRow(false)}
        className="row"
      >
        <button
          className={`button_prev ${isHover && data1.length > 3 ? `show` : ``}`}
        >
          {"<"}
        </button>
        {data1.map((item, index) => (
          <Item key={index} item={item} />
        ))}
        <button
          className={`button_next ${isHover && data1.length > 3 ? `show` : ``}`}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default App;
