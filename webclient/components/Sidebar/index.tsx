import { useEffect, useState } from "react";

import useFacet, { IFacetItems } from "../../hooks/useFacet";
import { ucFirst } from "../../services/utils";
import { ProductFilters } from "../ProductFilters";

export const Sidebar = () => {
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
          onApplyFilter={(data) => console.log(data)}
        />
      )}
    </div>
  );
};
