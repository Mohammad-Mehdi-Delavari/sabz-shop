import React, { useState, useMemo } from "react";
import "./Shop.css";
import Product from "../../elements/Product/Product";

export default function Shop() {
  const [cat, setCat] = useState("همه ای محصولات");
  const [min, setMin] = useState(0);
  const [minMax, setMinMax] = useState({minm:0,maxm:10000000});
  const [max, setMax] = useState(10000000);

  let all = "همه ای محصولات"
  const categoryArray = () => {
    let productCategory = [];
    PopularItemInfos.map(
      (val) => (productCategory = [...productCategory, val.category])
    );
    let category = new Set([...productCategory]);
    return [all, ...category];
  };

  const PopularItemInfos = [

    {
      id: 1,
      title: "گلدان آپارتمانی تیلادنسیا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product_26.jpg",
      price: 159000,
      discount: 20,
      link: "#",
      category: "گلدان",
    },
    {
      id: 2,
      title: "گلدان آپارتمانی فیکوس الاستیکا بلک",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-01.jpg",
      price: 159000,
      link: "#",
      category: "گل",
    },
    {
      id: 3,
      title: "گلدان آپارتمانی زاموفیا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-07.jpg",
      price: 159000,
      link: "#",
      category: "گلدان",
    },
    {
      id: 4,
      title: "گلدان آپارتمانی کراسولا آواتا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/pro_02.jpg",
      price: 159000,
      discount: 20,
      link: "#",
      category: "گلدان",
    },
    {
      id: 5,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
      category: "گلدان",
    },
    {
      id: 6,
      title: "گلدان آپارتمانی فیکوس الاستیکا بلک",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-01.jpg",
      price: 159000,
      link: "#",
      category: "گلدان",
    },
    {
      id: 7,
      title: "گلدان آپارتمانی زاموفیا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-07.jpg",
      price: 159000,
      link: "#",
      category: "گل",
    },
    {
      id: 8,
      title: "گلدان آپارتمانی کراسولا آواتا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/pro_02.jpg",
      price: 159000,
      discount: 20,
      link: "#",
      category: "گلدان",
    },
    {
      id: 9,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
      category: "گل",
    },
    {
      id: 10,
      title: "گلدان آپارتمانی فیکوس الاستیکا بلک",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-01.jpg",
      price: 159000,
      link: "#",
      category: "خانگی",
    },
    {
      id: 11,
      title: "گلدان آپارتمانی زاموفیا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-07.jpg",
      price: 159000,
      link: "#",
      category: "گلدان",
    },
    {
      id: 12,
      title: "گلدان آپارتمانی کراسولا آواتا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/pro_02.jpg",
      price: 159000,
      discount: 20,
      link: "#",
      category: "بنسای",
    },
    {
      id: 13,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
      category: "گلدان",
    },
    {
      id: 14,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
      category: "گلدان",
    },
    {
      id: 15,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
      category: "بنسای",
    },
    {
      id: 16,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
      category: "خانگی",
    },
    {
      id: 17,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
      category: "خانگی",
    },
  ];

  const productMemo = useMemo(() => {
    let infos = [...PopularItemInfos]
    infos = infos.filter((val)=> {
        return val.price < minMax.maxm && val.price > minMax.minm
    })
    if(cat !== all){
        infos = infos.filter((val)=> {
            return cat  == val.category
        })
        console.log(infos);
    }
    return <Product showItems={infos} border={'0'} height={"17"} />;
  }, [minMax, cat]);
  return (
    <div className="shop__container">
      <div className="shop__section-right">
        <div className="shop__category-container">
          <div className="shop__category-title">دسته های محصولات</div>
          {categoryArray().map((val, index) => (
            <p
              key={index}
              onClick={() => setCat(val)}
              className="shop__Products-category"
            >
              {val}
            </p>
          ))}
        </div>
        <div className="shop__category-container">
          <div className="shop__category-title">فیلتر بر اساس قیمت</div>
          <label className="shop__filter-min-label" htmlFor="min">
            از
          </label>
          <input
            className="shop__filter-min"
            type="range"
            id="min"
            name="min"
            max={10}
            min={1}
            value={min / 100000}
            onChange={(e) => setMin(e.target.value * 100000)}
          />
          <input
            type="text"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="shop__filter-min-text"
            disabled
          />
          <p className="shop__filter-min-text-t-1">تومان</p>
          <label className="shop__filter-min-label" htmlFor="max">
            تا
          </label>
          <input
            className="shop__filter-min"
            type="range"
            id="max"
            name="max"
            max={100}
            min={1}
            value={max / 100000}
            onChange={(e) => setMax(e.target.value * 100000)}
          />
          <input
            type="text"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="shop__filter-min-text"
            disabled
          />
          <p className="shop__filter-min-text-t-2">تومان</p>

          <button onClick={()=> setMinMax({minm:min,maxm:max})} className="btn shop__filter-btn">فیلتر</button>
        </div>
      </div>
      <div className="shop__section-left">
        <div className="shop__products-section">{productMemo}</div>
      </div>
    </div>
  );
}
