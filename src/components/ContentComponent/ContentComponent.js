import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import CartContentProductComponent from "../CartContentProductComponent/CartContentProductComponent";

const ContentComponent = () => {
  const [content, setContent] = useState([
    {
      id: 1,
      title: "Thịt, cá, trứng, rau",
      isSelected: true,
    },
    {
      id: 2,
      title: "Hàng đông mát",
      isSelected: false,
    },
    {
      id: 3,
      title: "Mỳ, miến, cháo, phở",
      isSelected: false,
    },
    {
      id: 4,
      title: "Gạo, bột, đồ khô",
      isSelected: false,
    },
  ]);

  const handleClickContent = (id) => {
    const updatedContent = content.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: true };
      }
      return { ...item, isSelected: false };
    });
    setContent(updatedContent);
  };

  console.log("content", content);
  return (
    <div className="bg-[#f4f5f9]">
      <div className=" mx-auto max-w-7xl m-3">
        <div className="flex items-center justify-between my-4">
          <div>
            {content
              .filter((item) => item.isSelected)
              .map((item, index) => (
                <span className="text-xl font-bold" key={index}>
                  {item.title}
                </span>
              ))}
          </div>
          <div className="flex gap-4">
            {content.map((item, index) => (
              <ButtonComponent
                key={index}
                textbutton={item.title}
                size={"large"}
                styleButton={{
                  background: item.isSelected ? "#3bb77e" : "#eee",
                  border: "none",
                }}
                styleTextButton={{ color: item.isSelected ? "#fff" : "#000" }}
                onClick={() => handleClickContent(item.id)}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 ">
            <CartContentProductComponent />
            <CartContentProductComponent />
            <CartContentProductComponent />
            <CartContentProductComponent />
            <CartContentProductComponent />
            <CartContentProductComponent />
            <CartContentProductComponent />
            <CartContentProductComponent />
            <CartContentProductComponent />
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
