import React, { useState } from "react";
import { Pagination } from "antd";
import BannerComponent from "../../../components/BannerComponent/BannerComponent";

import CartContentProductComponent from "../../../components/CartContentProductComponent/CartContentProductComponent";
import "../../../index.css";

const CollectionsContent = () => {
  const [activeSort, setActiveSort] = useState(null);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 6;
  const handleSortBy = (sortBy) => {
    // Implement sorting logic based on the sortBy parameter
    console.log(`Sorting by: ${sortBy}`);
    setActiveSort(sortBy);
  };

  const handleFilter = () => {
    // Implement filter logic
    console.log("Filter button clicked");
  };
  return (
    <div className="my-3 lg:w-3/4">
      <div className="mb-3">
        <h1 className="text-[20px]">Tất cả sản phẩm</h1>
        <div className="mt-[10px]">
          Chúng tôi mong muốn mang đến sự nhanh chóng và tiện lợi tối đa khi mua
          sắm đến cho khách hàng bằng việc đưa hệ thống siêu thị Wolf Food phủ
          rộng khắp mọi khu vực kể cả vùng nông thôn. Bên cạnh đó, chúng tôi
          cũng tập trung phát triển kênh mua sắm online trên website Wolf Food
          để phục vụ cho mọi đối tượng, đặc biệt là nhóm khách hàng trẻ.
          <br />
          Wolf Food cũng không ngừng tìm kiếm và mang đến sự đa dạng trong việc
          lựa chọn sản phẩm với hơn 12.000 sản phẩm đủ chủng loại, xuất xứ rõ
          ràng, giá cả hợp lý, minh bạch.
        </div>
        <div>
          <BannerComponent />
        </div>
      </div>

      <div className="flex">
        <div className="sort-cate clearfix">
          <div className="flex items-center gap-4">
            <h3 className="float-left mt-[2px] flex items-center gap-1 text-[14px] text-[#666]">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="12px"
                height="12px"
                viewBox="0 0 97.761 97.762"
                style={{ enableBackground: "new 0 0 97.761 97.762" }}
                xmlSpace="preserve"
              >
                <path
                  d="M42.761,65.596H34.75V2c0-1.105-0.896-2-2-2H16.62c-1.104,0-2,0.895-2,2v63.596H6.609c-0.77,0-1.472,0.443-1.804,1.137
					 c-0.333,0.695-0.237,1.519,0.246,2.117l18.076,26.955c0.38,0.473,0.953,0.746,1.558,0.746s1.178-0.273,1.558-0.746L44.319,68.85
					 c0.482-0.6,0.578-1.422,0.246-2.117C44.233,66.039,43.531,65.596,42.761,65.596z"
                ></path>
                <path
                  d="M93.04,95.098L79.71,57.324c-0.282-0.799-1.038-1.334-1.887-1.334h-3.86c-0.107,0-0.213,0.008-0.318,0.024
					 c-0.104-0.018-0.21-0.024-0.318-0.024h-3.76c-0.849,0-1.604,0.535-1.887,1.336L54.403,95.1c-0.215,0.611-0.12,1.289,0.255,1.818
					 s0.983,0.844,1.633,0.844h5.773c0.88,0,1.657-0.574,1.913-1.416l2.536-8.324h14.419l2.536,8.324
					 c0.256,0.842,1.033,1.416,1.913,1.416h5.771c0.649,0,1.258-0.314,1.633-0.844C93.16,96.387,93.255,95.709,93.04,95.098z
					 M68.905,80.066c2.398-7.77,4.021-13.166,4.82-16.041l4.928,16.041H68.905z"
                ></path>
                <path
                  d="M87.297,34.053H69.479L88.407,6.848c0.233-0.336,0.358-0.734,0.358-1.143V2.289c0-1.104-0.896-2-2-2H60.694
					 c-1.104,0-2,0.896-2,2v3.844c0,1.105,0.896,2,2,2h16.782L58.522,35.309c-0.233,0.336-0.358,0.734-0.358,1.146v3.441
					 c0,1.105,0.896,2,2,2h27.135c1.104,0,2-0.895,2-2v-3.842C89.297,34.947,88.402,34.053,87.297,34.053z"
                ></path>
              </svg>{" "}
              Xếp theo
            </h3>
            <ul className="flex items-center justify-between gap-2 text-sm">
              <li
                className="btn-quick-sort alpha-asc"
                onClick={() => handleSortBy("alpha-asc")}
              >
                <a href="#!" title="Tên A-Z">
                  <i
                    className={`i ${activeSort === "alpha-asc" ? "active" : ""}`}
                  ></i>
                  Tên A-Z
                </a>
              </li>
              <li
                className="btn-quick-sort alpha-desc"
                onClick={() => handleSortBy("alpha-desc")}
              >
                <a href="#!" title="Tên Z-A">
                  <i
                    className={`i ${activeSort === "alpha-desc" ? "active" : ""}`}
                  ></i>
                  Tên Z-A
                </a>
              </li>
              <li
                className="btn-quick-sort price-asc"
                onClick={() => handleSortBy("price-asc")}
              >
                <a href="#!" title="Giá thấp đến cao">
                  <i
                    className={`i ${activeSort === "price-asc" ? "active" : ""}`}
                  ></i>
                  Giá thấp đến cao
                </a>
              </li>
              <li
                className="btn-quick-sort price-desc"
                onClick={() => handleSortBy("price-desc")}
              >
                <a href="#!" title="Giá cao xuống thấp">
                  <i
                    className={`i ${activeSort === "price-desc" ? "active" : ""}`}
                  ></i>
                  Giá cao xuống thấp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          <CartContentProductComponent />
          <CartContentProductComponent />
          <CartContentProductComponent />
          <CartContentProductComponent />
          <CartContentProductComponent />
          <CartContentProductComponent />
          <CartContentProductComponent />
          <CartContentProductComponent />
        </div>
        <div className="my-10 flex justify-center">
          {/* <Pagination
            activeStyle={{ color: "#20c997" }}
            current={page}
            onChange={(page) => setPage(page)}
            defaultPageSize={limit}
            total={totalPages * limit}
          /> */}
          <Pagination defaultCurrent={1} total={50}  />
        </div>
      </div>
    </div>
  );
};

export default CollectionsContent;
