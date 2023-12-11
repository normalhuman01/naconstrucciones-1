import { Axometria } from "./axometria";
import { Elevations } from "./elevations";
import { Final } from "./final";
import { Gilardi } from "./gilardi";
import { Plants } from "./plants";
import { PreFinal } from "./prefinal";

export const Group = () => {
  return (
    <>
      <Gilardi />
      <Plants />
      <Elevations></Elevations>
      <Axometria></Axometria>
      <PreFinal></PreFinal>
      <Final></Final>
    </>
  );
};
