import React, { useEffect, useState } from "react";

import useFacet, { IFacetItems } from "../../hooks/useFacet";
import { ucFirst } from "../../services/utils";
import { ProductFilters } from "../ProductFilters";
import { IFacetValueItem } from "../ProductFilters/product-filter.interface";

interface Props {
  handleFilter: (data: Array<IFacetValueItem>) => void;
}

export const Sidebar: React.FC<Props> = ({ handleFilter }) => {
  const { facetData } = useFacet();
  const [pFItems, setPFItems] = useState<any>();

  useEffect(() => {
    if (facetData && facetData.length > 0) {
      const arrFacetData: any = [];
      facetData?.map((item: IFacetItems) => {
        arrFacetData.push({
          facetName: ucFirst(item.name),
          facetValues: item.values,
        });
      });
      setPFItems(arrFacetData);
    }
  }, [facetData]);
  return (
    <div>
      {pFItems && (
        <ProductFilters
          facetData={pFItems}
          onApplyFilter={(data) => handleFilter(data)}
        />
      )}
    </div>
  );
};
