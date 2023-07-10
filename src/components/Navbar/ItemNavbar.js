import React from "react";
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
                  <div dangerouslySetInnerHTML={{ __html: item?.icon }} className="bcfvmcjqhu"></div>
                  <div className="zlpdcssnij">{item?.name}</div>
                </div>
              </div>
            )
          }
        }) : null}
    </div>
  )
};

export default ItemNavbar;
