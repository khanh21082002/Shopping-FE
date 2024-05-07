import React, { useEffect } from "react";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
import CategoryItemComponent from "../../components/CategoryItemComponent/CategoryItemComponent";
import "../../index.css";
import DealProductComponent from "../../components/DealProductComponent/DealProductComponent";
import ContentComponent from "../../components/ContentComponent/ContentComponent";
import NewUpdateComponent from "../../components/NewUpdateComponent/NewUpdateComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const HomePage = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BannerComponent />
        <div className="mb-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <CategoryItemComponent />
          <CategoryItemComponent />
          <CategoryItemComponent />
          <CategoryItemComponent />
        </div>
        <div className="mb-6">
          <DealProductComponent />
        </div>
      </div>
      <div className="mb-6">
        <ContentComponent />
      </div>
      <div>
        <span className="mx-auto grid max-w-7xl items-center text-xl font-bold">
          Món ngon mỗi ngày
        </span>
        <div className="mx-auto my-4 grid max-w-7xl gap-4 md:grid-cols-1 lg:grid-cols-2">
          <NewUpdateComponent />
          <NewUpdateComponent />
          <NewUpdateComponent />
          <NewUpdateComponent />
        </div>
      </div>
      <div className="mx-auto max-w-7xl text-center my-6 px-4 sm:px-6 lg:px-8">
        <ButtonComponent
          textbutton="Xem tất cả tin Món ngon mỗi ngày"
          size={"large"}
          styleButton={{ background: "#3bb77e" }}
          styleTextButton={{ color: "#fff" }}
          onClick={() => {
            window.location.href = "/blogs";
          }}
        />
      </div>
    </>
  );
};

export default HomePage;
