import { WP_URL } from "@/data";
import React from "react";

type TResultsProps = {
  searchParams: {
    search: string;
  };
};

const Page = async ({ searchParams: { search } }: TResultsProps) => {
  const products = await fetch(WP_URL + `/epp?_embed&search=${search}`).then(
    (res) => res.json()
  );
  return (
    <div>
      <h1>Results</h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
};

export default Page;
