import React from "react";
import { CgProfile } from "react-icons/cg";
import Baner from "./Baner/Baner";
import BannerTwo from "./BannerTwo/BannerTwo";
import BannerTree from "./BannerTree/BannerTree";
import Popular from "./Popular/Popular";
import BlogPosts from "./BlogPosts/BlogPosts";
export default function Home() {
  const BannerTwoInfos = [
    {
      id: 1,
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/slider1.webp",
      title: "انواع بنسای وارداتی",
      color: "rgb(66, 141, 66)",
    },
    {
      id: 2,
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/slider2.webp",
      title: " نگهدارنده کاکتوس باش",
      color: "rgb(251, 180, 125)",
    },
  ];
  const BannerTreeInfos = [
    {
      id: 1,
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/cat1.webp",
      title: "بنسای آپارتمانی",
    },
    {
      id: 2,
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/cat2.webp",
      title: "گلدان تزئینی",
    },
    {
      id: 3,
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/cat3.webp",
      title: "گل آپارتمانی",
    },
    {
      id: 4,
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/cat4.webp",
      title: "کاکتوس",
    },
    {
      id: 5,
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/banner-plant.jpg",
      title: "تاج گل",
    },
  ];
  const PopularItemInfos = [
    {
      id: 1,
      title: "گلدان آپارتمانی تیلادنسیا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product_26.jpg",
      price: 159000,
      discount: 20,
      link: "#",
    },
    {
      id: 2,
      title: "گلدان آپارتمانی فیکوس الاستیکا بلک",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-01.jpg",
      price: 159000,
      link: "#",
    },
    {
      id: 3,
      title: "گلدان آپارتمانی زاموفیا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-07.jpg",
      price: 159000,
      link: "#",
    },
    {
      id: 4,
      title: "گلدان آپارتمانی کراسولا آواتا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/pro_02.jpg",
      price: 159000,
      discount: 20,
      link: "#",
    },
    {
      id: 5,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
    },
    {
      id: 6,
      title: "گلدان آپارتمانی فیکوس الاستیکا بلک",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-01.jpg",
      price: 159000,
      link: "#",
    },
    {
      id: 7,
      title: "گلدان آپارتمانی زاموفیا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-07.jpg",
      price: 159000,
      link: "#",
    },
    {
      id: 8,
      title: "گلدان آپارتمانی کراسولا آواتا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/pro_02.jpg",
      price: 159000,
      discount: 20,
      link: "#",
    },
    {
      id: 9,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
    },
    {
      id: 10,
      title: "گلدان آپارتمانی فیکوس الاستیکا بلک",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-01.jpg",
      price: 159000,
      link: "#",
    },
    {
      id: 11,
      title: "گلدان آپارتمانی زاموفیا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-07.jpg",
      price: 159000,
      link: "#",
    },
    {
      id: 12,
      title: "گلدان آپارتمانی کراسولا آواتا",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/pro_02.jpg",
      price: 159000,
      discount: 20,
      link: "#",
    },
    {
      id: 13,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
    },
    {
      id: 14,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
    },
    {
      id: 15,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
    },
    {
      id: 16,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
    },
    {
      id: 17,
      title: "گلدان آپارتمانی یوکا بدون ساقه",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/product-18.jpg",
      price: 159000,
      discount: 20,
      link: "#",
    },
  ];
  const BlogPostsItemInfos = [
    {
      id: 1,
      title: "ترکیب های جذاب با رنگ سال 2024",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/4_grande.jpg",
      category: "گل",
      author: "admin",
      icon: <CgProfile className="BlogPosts__item-author-icon" />,
      link:'#'
    },
    {
      id: 2,
      title: "ترفند ساده برای داشتن گل های بزرگ",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/7868756-400x300.jpg",
      category: "گل",
      author: "admin",
      icon: <CgProfile className="BlogPosts__item-author-icon" />,
      link:'#'
    },
    {
      id: 3,
      title: "نکته هایی که باید در هنگام خرید در نظر داشته باشید",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/879697867-400x300.jpg",
      category: "گل",
      author: "admin",
      icon: <CgProfile className="BlogPosts__item-author-icon" />,
      link:'#'
    },
    {
      id: 4,
      title: "متن دمو ساختگی برای نوشته بلاگ ها",
      img: "https://demo.i-wp.ir/woodland/sabzine/wp-content/uploads/2022/01/1_grande.jpg",
      category: "گیاه",
      author: "admin",
      icon: <CgProfile className="BlogPosts__item-author-icon" />,
      link:'#'
    },
  ];
  return (
    <div>
      <Baner />
      <BannerTwo infos={BannerTwoInfos} />
      <BannerTree infos={BannerTreeInfos} />
      <Popular infos={PopularItemInfos} />
      <BlogPosts  infos={BlogPostsItemInfos}/>
    </div>
  );
}
