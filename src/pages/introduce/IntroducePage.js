import React from "react";

const IntroducePage = () => {
  return (
    <div className="mx-auto max-w-7xl flex-row">
      <div className="w-full sm:w-full md:w-full">
        <div className="title-head py-2 text-black">
          <h1>Giới thiệu</h1>
        </div>
        <div className="">
          <p className="pb-2">
            Chúng tôi mong muốn mang đến sự nhanh chóng và tiện lợi tối đa khi
            mua sắm đến cho khách hàng bằng việc đưa hệ thống siêu thị{" "}
            <strong>Wolf Food&nbsp;phủ rộng</strong>&nbsp;khắp mọi khu vực kể cả
            vùng nông thôn. Bên cạnh đó, chúng tôi cũng tập trung phát triển
            kênh mua sắm online trên website&nbsp;<strong>Wolf Food</strong>
            <strong> để phục vụ cho mọi đối tượng</strong>, đặc biệt là nhóm
            khách hàng trẻ.
          </p>
          <p className="pb-2">
            <strong>Wolf Food</strong> cũng không ngừng tìm kiếm và mang đến sự
            đa dạng trong việc lựa chọn sản phẩm với hơn 12.000 sản phẩm đủ
            chủng loại, xuất xứ rõ ràng, giá cả hợp lý, minh bạch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroducePage;
