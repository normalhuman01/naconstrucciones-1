import { BrandsCarousel } from "@/components/custom/BrandsCarousel"
import { AboutServices } from "./_sections/AboutServices"
import { AboutUs } from "./_sections/AboutUs"
import { Benefits } from "./_sections/Benefits"
import { Contact } from "./_sections/Contact"
import { Featured } from "./_sections/Featured"
import { Hero } from "./_sections/Hero"
import { Initial } from "./_sections/Initial"
import { Products } from "./_sections/Products"
import { Services } from "./_sections/Services"

const Page = () => {
  return (
    <div>
      <Initial />
      <BrandsCarousel />
      <Featured />
      <Products />
      <Benefits />
      <Hero />
      <AboutUs />
      <AboutServices />
      <Services />
      <Contact />
    </div>
  )
}

export default Page