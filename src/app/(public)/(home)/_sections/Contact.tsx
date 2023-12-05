import { config } from "@/config";
import Image from "next/image";
import Link from "next/link";

const phone = [
  config.phone.toString().slice(0, 3),
  config.phone.toString().slice(3, 6),
  config.phone.toString().slice(6, 8),
].join(" ");

export const Contact = () => {
  return (
    <div className="my-8 px-5">
      <div className="max-w-[960px] mx-auto flex flex-col items-start gap-5">
        <div className="flex justify-between items-end w-full">
          <div>
            <span className="text-[12px]">NUESTRO</span>
            <h3 className="text-2xl font-bold">CONTACTO</h3>
          </div>
          <div className="flex gap-3 md:gap-6 mb-[7px]">
            <Link href="#">
              <Image src="/img/icons/fb.png" width={24} height={24} alt="FB" />
            </Link>
            <Link href="#">
              <Image
                src="/img/icons/insta.png"
                width={24}
                height={24}
                alt="Insta"
              />
            </Link>
            <Link href="#">
              <Image
                src="/img/icons/twitter.png"
                width={24}
                height={24}
                alt="Twitter"
              />
            </Link>
            <Link href="#">
              <Image
                src="/img/icons/tiktok.png"
                width={24}
                height={24}
                alt="TikTok"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full">
          <p className="text-[14px]">
            <strong>TELÉFONO</strong>
            <br />
            <span>{phone}</span>
          </p>
          <p className="text-[14px]">
            <strong>CORREO</strong>
            <br />
            <span>{config.email}</span>
          </p>
          <p className="text-[14px]">
            <strong>OFICINAS</strong>
            <br />
            <span>{config.address}</span>
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.454709281648!2d-76.96921802398299!3d-12.080992342540947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6ff588199a5%3A0x918e294837ec405b!2sAv.%20Circunvalaci%C3%B3n%20del%20Golf%20los%20Incas%20206%2C%20Santiago%20de%20Surco%2015023!5e0!3m2!1ses!2spe!4v1701738386229!5m2!1ses!2spe"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
