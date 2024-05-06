import React, { useState } from "react";
import {
  MinusOutlined,
  PlusOutlined,
  PhoneOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import { Button } from "antd";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const CartPage = () => {
  const [count, setCount] = useState(5);
  const increase = () => {
    setCount(count + 1);
  };
  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };
  return (
    <div className="mx-auto mt-4 grid max-w-7xl gap-4 lg:grid-cols-3 sm:grid-cols-1 ">
      <div className="col-span-2">
        <h1 className="text-[24px]">
          Giỏ hàng
          <span className="mx-2 text-[14px]">({count} sản phẩm)</span>
        </h1>

        <div className="my-[10px] grid grid-cols-4 py-[15px]">
          <div className="col-span-1">
            <p className="p">
              <a href="#">
                <img
                  className="h-30 w-40"
                  src="https://bizweb.dktcdn.net/thumb/medium/100/449/944/products/hop-30-trung-cut-tuoi-tfood-30-trung-202112271006004018.jpg"
                  alt="Trứng cút"
                />
              </a>
            </p>
          </div>
          <div className="col-span-3 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div>
              <p className="text-[18px] text-[#0657a3]">Hộp trứng cút</p>
              <p className="text-[16px] text-[#a9a9a9]">
                Thương hiệu : Việt Nam
              </p>
              <p className="hover:text-line cursor-pointer text-[16px] text-[#3bb77e] ">
                Xóa
              </p>
            </div>
            <div>
              <p className="p text-[18px] font-bold text-[#3bb77e] ">26.500₫</p>
            </div>
            <div>
              <Button onClick={decline} icon={<MinusOutlined />} />
              <span className="mx-2">{count}</span>
              <Button onClick={increase} icon={<PlusOutlined />} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 py-[15px]">
          <div>
            <p className="p cursor-pointer text-[14px] font-[500] hover:text-[#3bb77e]">
              Tiếp tục mua hàng
            </p>
          </div>
          <div>
            <div className="mb-[10px] flex items-center justify-between">
              <div>
                <span>Tạm tính: </span>
              </div>
              <div>
                <strong className="text-[#3bb77e]">26.500₫</strong>
              </div>
            </div>
            <div className="mb-[10px] flex items-center justify-between">
              <div>
                <span>Thành tiền: </span>
              </div>
              <div>
                <strong className="font-[500] text-[#3bb77e]">26.500₫</strong>
              </div>
            </div>
            <ButtonComponent
              textbutton="Thanh toán ngay"
              styleButton={{
                background: "#3bb77e",
                margin: "10px 0px",
                padding: "4px 0px",
              }}
              styleTextButton={{
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: "500",
              }}
              size={"large"}
              className={"w-full rounded-md bg-[#FF424E] text-white"}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mb-[10px] rounded-md border-[1px] border-dashed border-[#c6c6c6] bg-[#fff] p-[15px]">
          <div>
            <div>
              <h1 className="mb-[14px] text-[16px] font-[500]">
                Dịch vụ khách hàng
              </h1>
              <p className="mb-[14px] text-[14px] text-[#333]">
                Bạn cần sự hỗ trợ từ chúng tôi? Hãy liên hệ ngay
              </p>
              <div className="mb-[14px] flex items-center gap-1 hover:text-primary">
                <PhoneOutlined className="text-[30px] text-[#b2b2b2]" />
                <div>
                  <a className=" text-[14px] " href="/">
                    19008192
                  </a>
                </div>
              </div>
              <div className="mb-[14px] flex items-center gap-1 hover:text-primary">
                <FacebookFilled className="text-[30px] text-[#b2b2b2]" />
                <div>
                  <a className=" text-[14px]" href="/">
                    Chúng tôi trên Facebook
                  </a>
                </div>
              </div>
              <p className="mb-[14px] mb-[14px] text-[14px] text-[#333]">
                Thứ 2 - Thứ 6: 8:00-17:00
                <br />
                Thứ 7: 8:00 – 12:00
              </p>
              <a
                className="text-[14px] font-[500] hover:text-primary"
                href="/lien-he"
                title="Liên hệ"
              >
                Liên hệ
              </a>
            </div>
          </div>
        </div>
        <div className="mb-[10px] rounded-md border-[1px] border-dashed border-[#c6c6c6] bg-[#fff] p-[15px]">
          <h1 className="mb-[14px] text-[16px] font-[500]">
            Hỗ trợ thanh toán
          </h1>
          <ul className="flex justify-between gap-3">
            <li>
              <img
                src="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/cart_payment_1.svg?1705392652885"
                alt="Hình thức thanh toán"
                className="h-24 w-24"
              />
            </li>
            <li>
              <img
                src="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/cart_payment_2.svg?1705392652885"
                alt="Hình thức thanh toán"
                className="h-24 w-24"
              />
            </li>
            <li>
              <img
                src="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/cart_payment_3.svg?1705392652885"
                alt="Hình thức thanh toán"
                className="h-24 w-24"
              />
            </li>
            <li>
              <img
                src="//bizweb.dktcdn.net/100/449/944/themes/855700/assets/cart_payment_4.svg?1705392652885"
                alt="Hình thức thanh toán"
                className="h-24 w-24"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
