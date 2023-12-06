const phone = 937772539;
const phoneGroupedBy3 = [
  phone.toString().slice(0, 3),
  phone.toString().slice(3, 6),
  phone.toString().slice(6, 8),
].join(" ");

export const config = {
  phone,
  phoneGroupedBy3,
  email: "ventas@naconstrucciones.com",
  address: "Av. Circunvalación del Golf los Incas 206, Santiago de Surco",
  networks: {
    facebook: "https://www.facebook.com/naconstrucciones/",
    instagram: "https://www.instagram.com/naconstrucciones/",
    twitter: "https://twitter.com/naconstrucciones",
    tiktok: "https://www.tiktok.com/@naconstrucciones",
  },
};
