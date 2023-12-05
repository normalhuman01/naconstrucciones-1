import { WP_URL } from "@/data"

export const dynamic = 'force-dynamic'

type TProductCategory = {
  id: string
  name: string
}

const Page = async () => {
  const categories = await fetch(WP_URL + "/product_category").then(res => res.json()) as TProductCategory[]
  return (
    <div>

      <h1>PRODUCTOS EPP</h1>
      <div className="flex flex-wrap gap-4 gap-x-10 max-w-[960px] m-auto">
        {categories.map((category) => (
          <div className="w-[168px] h-[84px] flex justify-center items-center text-center border-black border-[1px] rounded-2xl p-2" key={category.id}>{category.name}</div>
        ))}
      </div>
    </div>
  )
}

export default Page