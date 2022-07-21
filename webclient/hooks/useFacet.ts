import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { facetsQuery } from "../queries/facets.query";

export interface IFacetItems {
  id: number;
  name: string;
  values: Array<unknown>;
}

const useFacet = () => {
  const [facetData, setFacetData] = useState([]);
  const { loading, error, data } = useQuery(facetsQuery);

  useEffect(() => {
    data?.facets?.items && setFacetData(data.facets.items);
  }, [data]);

  if (loading || error) {
    return [null];
  }

  return [facetData];
};

export default useFacet;
