import React from "react";
import { ReactComponent as IconDiscover } from '../../assets/svgs/discover.svg';
import './ItemNavbar.scss';

const ItemNavbar = (props) => {
  const { data, location } = props
  return (
    <div className="mrpxntzgke">
      {data && data.length > 0 ?
        data?.map((item, index) => {
          if (item.type === location) {
            return (
              <div key={index} className="mofhtivwys">
                <div className="bkmppahjqc">
                  <IconDiscover className="bcfvmcjqhu" />
                  <div className="zlpdcssnij">{item?.title}</div>
                </div>
              </div>
            )
          }
        }) : null}
    </div>
  )
};

export default ItemNavbar;
