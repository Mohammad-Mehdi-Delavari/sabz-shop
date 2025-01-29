import React, {useState} from "react";
import "./BlogPosts.css";
import { Collapse } from "react-bootstrap";

export default function BlogPosts({ infos }) {
   const [open, setOpen] = useState(false);

  return (
    <div className="BlogPosts__container">
      <h3 className="BlogPosts__title">مجله سبزینه</h3>
      <div className="BlogPosts__title-break"></div>
      <div className="BlogPosts__item-section">
        {infos.map((val) => (
          <div key={val.id} onMouseEnter={()=> setOpen(true)} onMouseLeave={()=> setOpen(false)} className="BlogPosts__item-container">
            <div className="BlogPosts__item-img-container">
              <Collapse dimension="width" in={open} >
                <div className="BlogPosts__item-img-hover">...</div>
              </Collapse>
              <img
                src={val.img}
                className="BlogPosts__item-img"
                alt={val.title}
              />
              <span className="BlogPosts__item-img-category">
                {val.category}
              </span>
            </div>
            <h3 className="BlogPosts__item-title">{val.title} </h3>
            <div className="BlogPosts__item-author">
              {val.icon}
              <div className="BlogPosts__item-author-name">{val.author} </div>
            </div>
            <p className="BlogPosts__item-explanations">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگره..
            </p>
            <a href={val.link} className="BlogPosts__item-link">
              ادامه مطلب
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
