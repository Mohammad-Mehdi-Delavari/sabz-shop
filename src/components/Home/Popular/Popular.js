import React, { useState, useEffect } from "react";
import "./Popular.css";
import Product from "../../../elements/Product/Product";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Popular({ infos }) {
  const [showItems, setShowItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const itemsNumber = pageNumber * crosserInnerItem;
    let newItems = infos.slice(itemsNumber - crosserInnerItem, itemsNumber);
    setShowItems(newItems);
  }, [pageNumber]);
  const crosserInnerItem = 5;
  const pageCount = () => {
    let pages = Math.floor(infos.length / crosserInnerItem);
    if (!(infos.length % crosserInnerItem)) {
      return pages;
    } else {
      return pages + 1;
    }
  };
  
  
  const crosserClick = (operation) => {
    if (operation === "-") {
      if (pageNumber !== 1) {
        setPageNumber(pageNumber - 1);
        
      }
    } else if (operation === "+") {
      if (pageNumber !== pageCount()) {
        setPageNumber(pageNumber + 1);
        
      }
    }
  };
  return (
    <div className="Popular__container">
      <h2 className="Popular__title">پرفروش ترین محصولات</h2>
      <div className="Popular__items-section">
        <IoIosArrowForward
          onClick={() => crosserClick("-")}
          className="Popular__items-crosser-forward"
        />
        <Product showItems={showItems}/>
        <IoIosArrowBack
          onClick={() => crosserClick("+")}
          className="Popular__items-crosser-back"
        />
      </div>
    </div>
  );
}
