export interface MapboxResult {
  attribution: string;
  features: Feature[];
  query: string[];
  type: string;
}

export interface Feature {
  bbox: number[];
  center: number[];
  context: Context[];
  geometry: Geometry;
  id: string;
  place_name: string;
  place_type: string[];
  properties: Properties;
  relevance: number;
  text: string;
  type: string;
}

export interface Context {
  id: string;
  short_code?: string;
  text: string;
  wikidata: string;
}

export interface Geometry {
  coordinates: number[];
  type: string;
}

export interface Properties {
  wikidata: string;
}
