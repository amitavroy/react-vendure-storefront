export interface IFacetItem {
  facetName: string;
  facetValues: Array<IFacetValueItem>;
}

export interface IFacetValueItem {
  id: number;
  name: string;
}
