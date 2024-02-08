import React, { ReactNode } from "react";
import style from './style.module.css';

type Props = {
  title: string;
  options: { title: string; value: string }[];
};

export default function Dropdown(props: Props) {
  return (
    <div className={style.select}>
      <select name="" id="">
        <option value="">Filter</option>
        {props.options.map((item, idx) => (
          <option key={idx} value={idx+1}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}
