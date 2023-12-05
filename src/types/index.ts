export type TProductCategory = {
  id: number;
  name: string;
  slug: string;
};

export type TProduct = {
  id: number;
  featured_media: number;
  title: {
    rendered: "Kit Maintenance 120 litros SM33 Portwest";
  };
  content: {
    rendered: "\n<p>Kit Anti-Derrames</p>\n";
    protected: false;
  };
  product_category: number[];
};


export type TMedia = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
};

export * from "./product";