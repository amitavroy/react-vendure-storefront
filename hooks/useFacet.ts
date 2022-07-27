import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { facetsQuery } from "../queries/facets.query";

export interface IFacetItems {
  id: number;
  name: string;
  values: Array<unknown>;
}

interface useFacetHookType {
  facetData: Array<IFacetItems>;
}

const useFacet = (): useFacetHookType => {
  const [facetData, setFacetData] = useState([]);
  const { loading, error, data } = useQuery(facetsQuery);

  useEffect(() => {
    data?.facets?.items && setFacetData(data.facets.items);
  }, [data]);

  if (loading || error) {
    return { facetData };
  }

  return { facetData };
};

export default useFacet;
