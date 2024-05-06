import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "../../index.css";

const CategoryItemComponent = () => {
  const backgroundImageUrl =
    "https://bizweb.dktcdn.net/100/449/944/themes/855700/assets/wolf_cate_product_img_1.jpg?1705392652885";

  const items = [
    { text: "Principles", link: "/" },
    { text: "Patterns", link: "/" },
    // Thêm các mục khác nếu cần
  ];

  return (
    <div className="category-card-container">
      <Card
        title="Rau, củ, quả, trái cây"
        bordered={false}
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{ marginRight: "10px" }}>
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#3e4a5e",
                  display: "inline-block",
                  marginRight: "5px",
                  verticalAlign: "middle",
                }}
              ></span>
              <Link to={item.link} className="hover:text-primary">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/collections/all" className="hover:text-primary">
          <ButtonComponent
            textbutton="Mua sắm ngay"
            styleButton={{ background: "#84B12E" }}
            styleTextButton={{ color: "#fff" }}
            className="mt-4"
          />
        </Link>
      </Card>
    </div>
  );
};

export default CategoryItemComponent;
