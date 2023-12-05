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
  whatsapp_link: WhatsappLink;
  _links: TProductLinks;
  _embedded: Embedded;
}

export interface Embedded {
  "wp:featuredmedia": WpFeaturedmedia[];
  "wp:term": Array<EmbeddedWpTerm[]>;
}

export interface WpFeaturedmedia {
  id: number;
  date: Date;
  slug: string;
  type: string;
  link: string;
  title: GUID;
  author: number;
  caption: GUID;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  source_url: string;
  _links: WpFeaturedmediaLinks;
}

export interface WpFeaturedmediaLinks {
  self: About[];
  collection: About[];
  about: About[];
  author: AuthorElement[];
  replies: AuthorElement[];
}

export interface About {
  href: string;
}

export interface AuthorElement {
  embeddable: boolean;
  href: string;
}

export interface GUID {
  rendered: string;
}

export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: Sizes;
  image_meta: ImageMeta;
}

export interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Sizes {
  medium: Full;
  thumbnail: Full;
  full: Full;
}

export interface Full {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
  filesize?: number;
}

export interface EmbeddedWpTerm {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  _links: WpTermLinks;
}

export interface WpTermLinks {
  self: About[];
  collection: About[];
  about: About[];
  "wp:post_type": About[];
  curies: Cury[];
}

export interface Cury {
  name: Name;
  href: Href;
  templated: boolean;
}

export enum Href {
  HTTPSAPIWOrgRel = "https://api.w.org/{rel}",
}

export enum Name {
  Wp = "wp",
}

export interface TProductLinks {
  self: About[];
  collection: About[];
  about: About[];
  "version-history": VersionHistory[];
  "predecessor-version": PredecessorVersion[];
  "wp:featuredmedia": AuthorElement[];
  "wp:attachment": About[];
  "wp:term": LinksWpTerm[];
  curies: Cury[];
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface LinksWpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface WhatsappLink {
  value: string;
  rendered: string;
}
