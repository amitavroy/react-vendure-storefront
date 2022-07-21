import useFacet, { IFacetItems } from "../../hooks/useFacet";
import { ucFirst } from "../../services/utils";

export const Sidebar = () => {
  const [facetData] = useFacet();
  return (
    <div>
      <h1>This is sidebar</h1>
      {facetData?.map((facet: IFacetItems) => {
        return <div key={facet.id}>{ucFirst(facet.name)}</div>;
      })}
    </div>
  );
};
