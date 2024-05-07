import React,{useState, useEffect} from "react";
import { Card } from "antd";
import { ShoppingCartOutlined} from "@ant-design/icons";

const CartContentProductComponent = () => {
  const [cardWidth, setCardWidth] = useState("240px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setCardWidth("150px");
      } else {
        setCardWidth("240px");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
    return (
        <Card
      hoverable
      style={{ width: cardWidth }}
      cover={
        <img
          alt="product"
          src="//bizweb.dktcdn.net/thumb/large/100/449/944/products/hop-30-trung-cut-tuoi-tfood-30-trung-202112271006004018.jpg?v=1654567162877"
        />
      }
      className=""
    >
      <div className="flex flex-col justify-between">
        <span class="hot">12%</span>
        <div className="flex flex-col justify-between">
          <a
            className="mb-2 text-sm text-[#90908e] hover:text-primary"
            href="san-pham-moi"
            title="Sản phẩm mới"
          >
            Sản phẩm mới
          </a>
          <a
            className="mb-2 font-bold text-black hover:text-primary"
            href="/"
            title="Hộp 30 trứng cút tươi V.Farm"
          >
            Hộp 30 trứng cút tươi V.Farm
          </a>
          <div className="mb-2 flex items-center justify-between">
            <span className="mr-2 text-sm font-bold text-primary">
              26.500 ₫
            </span>
            <button
              className="bg-green-100 text-green-700 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#cce7d0] bg-[#e8f6ea] hover:bg-[#cce7d0] hover:text-white"
              data-toggle="tooltip"
              data-placement="top"
              type="button"
              title="Thêm vào giỏ"
            >
              <ShoppingCartOutlined
                style={{ fontSize: "24px", color: "#3bb77e" }}
              />
            </button>
          </div>
        </div>
      </div>
    </Card>
    );
}

export default CartContentProductComponent