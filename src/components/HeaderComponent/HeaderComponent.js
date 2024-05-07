import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  PhoneOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge, Popover, Modal } from "antd";

import InputSearchComponent from "../InputSearchComponent/InputSearchComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import BreadcrumbComponent from "../HeaderComponent/BreadcrumbComponent";
import { routes } from "../../routes/index";
import AccountPage from "../../pages/auth/login/AccountPage";

const content = (
  <div className="flex flex-col gap-2">
    <ButtonComponent
      textbutton="Đăng ký"
      styleButton={{ background: "rgb(132, 177, 46)" }}
      size={"large"}
      styleTextButton={{ color: "#fff" }}
      className="w-[200px]"
    />
    <ButtonComponent
      textbutton="Đăng nhập"
      styleButton={{ background: "rgb(132, 177, 46)" }}
      size={"large"}
      styleTextButton={{ color: "#fff" }}
      className="w-[200px]"
    />
  </div>
);

const HeaderComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [visible, setVisible] = useState(true); // Thêm state để kiểm soát hiển thị của logo
  const location = useLocation();

  useEffect(() => {
    const foundRoute = routes.find((route) => route.path === location.pathname);
    setSelectedRoute(foundRoute);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 961) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickMain_Nav = (index) => {
    setSelectedRoute(routes[index]);
  };

  const handleLoginClick = () => {
    setModalVisible(true);
  };

  return (
    <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-y border-slate-300 ">
        <div className={`grid grid-cols-6 py-3 items-center gap-4 ${visible ? "" : "grid-cols-1"} `}>
          <div className={`${visible ? "" : "flex-wrap"} col-span-1`}>
            <Link to="/">
              <img
                className="h-8 w-[180px]"
                src="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/logo.png?1705392652885"
                alt="Logo"
              />
            </Link>
          </div>
          <div className={`col-span-3 ${visible ? "" : "w-full"}`}>
            <InputSearchComponent
              size="large"
              bordered={false}
              textbutton="Tìm kiếm"
              placeholder="Bạn cần tìm kiếm gì?"
            />
          </div>

          <div className={`col-span-2 flex gap-5 justify-between`}>
            <div className="flex items-center gap-1">
              <PhoneOutlined className="text-[30px] text-primary" />
              <div>
                <p>Hotline</p>
                <a className="hover:text-primary" href="/">
                  19008192
                </a>
              </div>
            </div>
            <div
              className={`flex items-center gap-1 ${visible ? "" : "hidden"} `}
              onClick={handleLoginClick}
            >
              <UserOutlined className="text-[30px] text-primary" />
              {/* <Popover placement="bottom" content={content}> */}
              <span className="whitespace-nowrap hover:cursor-pointer hover:text-primary">
                Tài khoản
              </span>
              {/* </Popover> */}
            </div>

            <div className="flex items-center gap-1">
              <Link to="/cart">
                <div className="flex items-center gap-1">
                  <Badge count={0} showZero>
                    <ShoppingCartOutlined className="text-[30px] text-primary" />
                  </Badge>
                  <span className="whitespace-nowrap hover:cursor-pointer hover:text-primary">
                    Giỏ hàng
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={`pb-2  ${visible ? "" : "hidden"}`}>
          <ul className="flex gap-7">
            {routes.map((item, index) => (
              <li
                key={index}
                className={`hover:cursor-pointer hover:text-primary ${
                  item === selectedRoute ? "text-primary" : ""
                }`}
              >
                <Link
                  to={item.path}
                  onClick={() => handleClickMain_Nav(index)}
                  title={item.title}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
      <BreadcrumbComponent />
      </div>

      <Modal
        onCancel={() => setModalVisible(false)} // Close the modal when canceled
        centered
        open={modalVisible}
        footer={null}
        width={800}
        className="p-0"
      >
        {/* Add your login form or content here */}
        <AccountPage setModal={setModalVisible} />
      </Modal>
    </header>
  );
};

export default HeaderComponent;
