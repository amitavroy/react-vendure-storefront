export interface IAddress {
  id: number;
  fullName: string;
  streetLine1: string;
  streetLine2: string;
  city: string;
  province: string;
  postalCode: string;
  country: { code: string; name: string };
  countryCode: string;
  phoneNumber: string;
}
