import React from "react";
import FilterMenu from "../../components/FilterMenuComponent/FilterMenuComponent";
import CollectionsContent from "./collections_contents/collections_content";

const ColectionPage = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4 ">
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-4">
        <FilterMenu />
        <CollectionsContent />
      </div>
    </div>
  );
};

export default ColectionPage;
