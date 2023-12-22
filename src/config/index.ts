const phone = 937772539;
const phoneGroupedBy3 = [
  phone.toString().slice(0, 3),
  phone.toString().slice(3, 6),
  phone.toString().slice(6, 9),
].join(" ");

export const config = {
  phone,
  phoneGroupedBy3,
  email: "ventas@naconstrucciones.com",
  address: "Psje.Juana Castro KM. 25 Mz. B Lt. 6 . San Gabriel Alto - VMT",
  wspLink: `https://wa.me/+51${phone}?text=`,
  networks: {
    facebook: "https://www.facebook.com/na.ingenieria.construcciones/",
    instagram: "https://www.instagram.com/naconstrucciones/",
    twitter: "https://twitter.com/naconstrucciones",
    tiktok: "https://www.tiktok.com/@naconstrucciones",
  },
};
