import React from "react";
import "./Converter.css";

export const Converter = () => {
  return (
    <div className="currency_container">
      <div className="currency_display">
        <p className="currency_plain_text"> 1 українська гривня дорівнює</p>
        <p className="currency_value">0,032 Євро</p>
        <p className="currency_date">23 трав., 19:05 UTC </p>
      </div>
      <div className="currency_input">
        <input
          type="text"
          className="currency_1"
          placeholder="base currency"
          value={1}
        />
        <input
          type="text"
          className="currency_2"
          placeholder="input your currency"
          value={0.032}
        />
        <input type="text" className="currency_name_1" value="UAH" />
        <input type="text" className="currency_name_2" value="EUR" />
      </div>
    </div>
  );
};
