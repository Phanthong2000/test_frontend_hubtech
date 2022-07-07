import React from "react";

function Item({ item }) {
  return (
    <div className="item">
      <div className="wrapper">
        <div className="left">
          <div className="color_primary font16 font_weight_700">
            {item.name}
          </div>
          <div className="color_black font14 font_weight_600">
            {item.expire}
          </div>
        </div>
        <div className="center">
          <div class="triangle rotate180"></div>
          <div className="divider_vertical_dash_1px"></div>
          <div class="triangle"></div>
        </div>
        <div className="right">
          <button className="button_save font16 font_weight_800">Luu</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
