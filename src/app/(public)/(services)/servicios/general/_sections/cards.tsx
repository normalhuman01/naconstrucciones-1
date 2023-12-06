import { CardBorder } from "@/components/custom/CardBorder";

export const Cards = () => {
  return (
    <div className="max-w-[960px] m-auto">
      <div className="flex gap-5 py-10">
        <CardBorder
          image="/img/services/general/maestro.jpg"
          action={{
            label: "CONSULTAR",
            link: "#",
          }}
          title="MAESTRO Y OBREROS"
          description="Equipo hábil, capacitada y experimentada para construcción precisa y profesional."
          headerClassName="p-0"
        />
        <CardBorder
          image="/img/services/general/maestro.jpg"
          action={{
            label: "CONSULTAR",
            link: "#",
          }}
          title="MAESTRO Y OBREROS"
          description="Equipo hábil, capacitada y experimentada para construcción precisa y profesional."
          headerClassName="p-0"
        />
        <CardBorder
          image="/img/services/general/maestro.jpg"
          action={{
            label: "CONSULTAR",
            link: "#",
          }}
          title="MAESTRO Y OBREROS"
          description="Equipo hábil, capacitada y experimentada para construcción precisa y profesional."
          headerClassName="p-0"
        />
      </div>
    </div>
  );
};
