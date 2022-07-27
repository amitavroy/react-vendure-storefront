import React from "react";
import { IFacetItem, IFacetValueItem } from "./product-filter.interface";

export interface Props {
  filterType: string;
  fiterItem: IFacetItem;
  handleOnClick: (item: IFacetValueItem) => void;
}

export const ProductFilterItem: React.FC<Props> = ({
  fiterItem,
  filterType,
  handleOnClick,
}) => {
  const handleSelection = (item: IFacetValueItem) => {
    handleOnClick(item);
  };
  return (
    <div>
      <fieldset>
        <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
          {fiterItem.facetName}
        </legend>

        <div className="px-5 py-6 space-y-2">
          {fiterItem.facetValues.length > 0 &&
            fiterItem.facetValues.map((facetValues, index) => {
              return (
                <div className="flex items-center" key={index}>
                  <input
                    id={`${filterType}${facetValues.name}`}
                    type="checkbox"
                    name={`${filterType}${facetValues.name}`}
                    className="w-5 h-5 border-gray-300 rounded"
                    onClick={() => handleSelection(facetValues)}
                  />

                  <label
                    htmlFor={`${filterType}${facetValues.name}`}
                    className="ml-3 text-sm font-medium"
                  >
                    {" "}
                    {facetValues.name}{" "}
                  </label>
                </div>
              );
            })}

          <div className="pt-2">
            <button type="button" className="text-xs text-gray-500 underline">
              {`Reset ${filterType}`}
            </button>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
