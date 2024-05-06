import React from "react";

const NewUpdateComponent = () => {
  return (
    <div className="flex gap-3 items-center">
      <a
        href="/"
        title="Gần 100 loại bánh dân gian hội tụ ở miền Tây"
        className="news-box-image"
      >
        <img
          src="https://bizweb.dktcdn.net/100/449/944/articles/ezgif-1-643a0ececd.jpg?v=1649857695033"
          data-src="https://bizweb.dktcdn.net/100/449/944/articles/ezgif-1-643a0ececd.jpg?v=1649857695033"
          alt="Gần 100 loại bánh dân gian hội tụ ở miền Tây"
          className="lazy w-[227px] h-[120px] object-cover"
          data-was-processed="true"
        />
      </a>
      <div className="flex flex-col ">
        <a
          href="/"
          title="Gần 100 loại bánh dân gian hội tụ ở miền Tây"
          className="text-black text-[18px] font-[500px]"
        >
          Gần 100 loại bánh dân gian hội tụ ở miền Tây
        </a>
        <span className="text-[#999] text-[14px] font-italic">Wednesday, 13/04/2022</span>
        <p className="text-[14px] font-italic">
          Rất nhiều món ăn ngon được người dân miền Tây mang đến lễ hội bánh dân
          gian Nam Bộ kéo dài đến 11-12/4 tại Cần Thơ, Cà Mau. Giỗ Tổ Hùng Vương
          năm n...
        </p>
      </div>
    </div>
  );
};
export default NewUpdateComponent;
