export interface ApiBreweryItem {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state_province: string;
  postal_code: number;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  state: string;
  street: string;
}

export interface AppBreweryItem extends ApiBreweryItem {
  isFavorite: boolean;
}

export type AppBreweriesList = Record<string, AppBreweryItem>;
