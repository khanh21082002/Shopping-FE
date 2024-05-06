import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  PhoneOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge, Popover, Modal } from "antd";

import InputSearchComponent from "../InpuSearchComponent/InputSearchCoponent";
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
  const location = useLocation();

  useEffect(() => {
    const foundRoute = routes.find((route) => route.path === location.pathname);
    setSelectedRoute(foundRoute);
  }, [location]);

  const handleClickMain_Nav = (index) => {
    setSelectedRoute(routes[index]);
  };

  const handleLoginClick = () => {
    setModalVisible(true);
  };

  return (
    <>
      <div className="border-y border-slate-300">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-5 py-3">
            <div className="lg:w-1/6">
              <Link to="/">
                <img
                  className="h-8 w-[180px]"
                  src="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/logo.png?1705392652885"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="md:w-2/3 lg:w-2/3 xl:w-2/3">
              <div className="md:w-2/3 md:w-full lg:w-2/3 lg:w-full xl:w-2/3 xl:w-full">
                <InputSearchComponent
                  size="large"
                  bordered={false}
                  textbutton="Tìm kiếm"
                  placeholder="Bạn cần tìm kiếm gì?"
                />
              </div>
            </div>

            <div className="flex gap-5">
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
                className="flex items-center gap-1"
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
          <div className="pb-2">
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
      </div>
      <BreadcrumbComponent />

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
    </>
  );
};

export default HeaderComponent;
