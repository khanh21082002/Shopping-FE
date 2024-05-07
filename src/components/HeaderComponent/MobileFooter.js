import React from "react";

const MobileFooter = () => {
  return (
    <div className="lg:hidden">
      <div className="fixed bottom-0 left-0 z-50 flex w-full justify-between border-t bg-white px-0 py-2 transition mx-auto">
        <div className="flex items-center justify-center">
          <a
            href="#"
            title="Menu"
            id="wolf-trigger-mobile"
            className="flex items-center justify-center hover:text-primary"
          >
            <img alt="Menu" src="" className="h-7 w-7" />
            Menu
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            className="flex items-center justify-center hover:text-primary"
            title="Giỏ hàng"
            href="#"
          >
            <img alt="Giỏ hàng" src="" className="h-7 w-7" />
            Giỏ hàng
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            className="flex items-center justify-center hover:text-primary"
            title="Yêu thích"
            href="#"
          >
            <img alt="Yêu thích" src="" className="h-7 w-7" />
            Yêu thích
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            className="flex items-center justify-center hover:text-primary"
            title="Tài khoản"
            href="#"
          >
            <img alt="Tài khoản" src="" className="h-7 w-7" />
            Tài khoản
          </a>
        </div>
      </div>
    </div>
  );
};
export default MobileFooter;
