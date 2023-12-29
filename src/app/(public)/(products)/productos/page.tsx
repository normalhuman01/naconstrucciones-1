import { permanentRedirect } from "next/navigation";

const Page = async () => {
  permanentRedirect("/productos/epp");
};

export default Page;
