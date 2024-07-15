import {Country} from "./Country.interface";
import {Region} from "./Region.interface";

export interface CacheStore{
  byCapital: byCapital;
  byCountryName: byCountryName;
  byRegion: byRegion;
}

export interface byCapital{
  name: string;
  countries: Country[];
}

export interface byCountryName{
  name: string;
  countries: Country[];
}

export interface byRegion{
  region?: Region;
  countries: Country[];
}
