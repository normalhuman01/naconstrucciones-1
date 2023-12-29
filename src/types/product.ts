import {
  Content,
  Embedded,
  GUID,
  TProductFeatures,
  TProductLinks,
  TProductSizes,
} from "./other";

export interface TProductEmbedded {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  featured_media: number;
  template: string;
  product_category: number[];
  product_tag: number[];
  features: TProductFeatures;
  sizes: TProductSizes;
  _links: TProductLinks;
  _embedded: Embedded;
}
