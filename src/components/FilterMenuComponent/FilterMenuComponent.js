import React from "react";

const FilterMenu = () => {
  return (
    <div className="lg:w-1/4 my-3">
      <div className="border border-[#e5e5e5] mb-10 rounded">
        <div className="aside-title">Bộ lọc sản phẩm</div>
        <div className="filter-container">
          <FilterCategory title="Nhà cung cấp" items={vendorItems} />
          <FilterCategory title="Loại sản phẩm" items={productTypeItems} />
          <FilterCategory title="Giá sản phẩm" items={priceItems} />
          <FilterCategory title="Đóng gói" items={packageItems} />
          <FilterCategory title="Cân nặng" items={weightItems} />
        </div>
      </div>
    </div>
  );
};

const FilterCategory = ({ title, items }) => {
  return (
    <aside className="aside-item filter-vendor">
      <div className="small-aside-title">{title}</div>
      <ul className="aside-content filter-group">
        {items.map((item, index) => (
          <li key={index} className="filter-item filter-item--check-box filter-item--green">
            <label htmlFor={`filter-${item.filter}`} className={item.filter}>
              <input
                type="checkbox"
                id={`filter-${item.filter}`}
                onChange={() => toggleFilter(item)}
                data-group={item.group}
                data-field={item.field}
                data-text={item.text}
                value={item.value}
                data-operator={item.operator}
              />
              <i className="fa"></i>
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const toggleFilter = (item) => {
  // Handle filter toggle logic here
};

// Define filter items
const vendorItems = [
  { filter: "333", text: "333", group: "Hãng", field: "vendor.filter_key", value: '("333")', operator: "OR" },
  { filter: "333", text: "333", group: "Hãng", field: "vendor.filter_key", value: '("333")', operator: "OR" },
  { filter: "333", text: "333", group: "Hãng", field: "vendor.filter_key", value: '("333")', operator: "OR" },
  { filter: "333", text: "333", group: "Hãng", field: "vendor.filter_key", value: '("333")', operator: "OR" },
  { filter: "333", text: "333", group: "Hãng", field: "vendor.filter_key", value: '("333")', operator: "OR" },
  { filter: "333", text: "333", group: "Hãng", field: "vendor.filter_key", value: '("333")', operator: "OR" },
  { filter: "333", text: "333", group: "Hãng", field: "vendor.filter_key", value: '("333")', operator: "OR" },
  { filter: "333", text: "333", group: "Hãng", field: "vendor.filter_key", value: '("333")', operator: "OR" },
  { filter: "333", text: "333", group: "Hãng", field: "vendor.filter_key", value: '("333")', operator: "OR" },
  
  // Define other vendor items similarly
];

const productTypeItems = [
  { filter: "bia", text: "Bia", group: "Loại", field: "product_type.filter_key", value: '("Bia")', operator: "OR" },
  // Define other product type items similarly
];

const priceItems = [
  { filter: "duoi-100-000d", text: "Dưới 100.000đ", group: "Khoảng giá", field: "price_min", value: "(<100000)", operator: "OR" },
  // Define other price items similarly
];

const packageItems = [
  { filter: "hop", text: "Hộp", group: "tag1", field: "tags", value: "(Hộp)", operator: "OR" },
  // Define other package items similarly
];

const weightItems = [
  { filter: "250-gram", text: "250 gram", group: "tag2", field: "tags", value: "(250 gram)", operator: "OR" },
  // Define other weight items similarly
];

export default FilterMenu;
