import React, { useState } from "react";

import { ProductFilterItem } from "./product-filter-item";
import { IFacetItem, IFacetValueItem } from "./product-filter.interface";

export interface Props {
  facetData: Array<IFacetItem>;
  onApplyFilter: (items: Array<IFacetValueItem>) => void;
}

export const ProductFilters: React.FC<Props> = ({
  facetData,
  onApplyFilter,
}) => {
  const [filteredItems, setFilteredItems] = useState<Array<IFacetValueItem>>(
    []
  );

  const handleFilterItemClick = (item: IFacetValueItem) => {
    if (filteredItems.some((values) => values.name === item.name)) {
      setFilteredItems(
        filteredItems.filter((value) => value.name !== item.name)
      );
    } else {
      setFilteredItems((oldItems) => [...oldItems, item]);
    }
  };

  const handleFormReset = () => {
    const elements: any = Array.from(
      document.querySelectorAll("#facet-filter input[type=checkbox]")
    );
    for (let i = 0; i < elements.length; i++) {
      elements[i].checked = false;
    }
    setFilteredItems([]);
  };

  return (
    <details open className="overflow-hidden border border-gray-200 rounded">
      <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
        <span className="text-sm font-medium"> Toggle Filters </span>

        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </summary>

      <form
        id="facet-filter"
        className="border-t border-gray-200 lg:border-t-0"
      >
        {facetData.length > 0 &&
          facetData.map((item, index) => {
            return (
              <ProductFilterItem
                handleOnClick={handleFilterItemClick}
                filterType={item.facetName}
                fiterItem={item}
                key={index}
              />
            );
          })}

        <div className="flex justify-between px-5 py-3 border-t border-gray-200">
          <button
            name="reset"
            type="button"
            className="text-xs font-medium text-gray-600 underline rounded"
            onClick={handleFormReset}
          >
            Reset All
          </button>

          <button
            name="commit"
            type="button"
            className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
            onClick={() => onApplyFilter(filteredItems)}
          >
            Apply Filters
          </button>
        </div>
      </form>
    </details>
  );
};
