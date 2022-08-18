export interface IAddress {
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
