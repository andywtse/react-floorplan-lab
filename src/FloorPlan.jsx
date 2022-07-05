import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

function FloorPlan(props) {
  const bedroom = [
    {num: 1},
    {num: 2},
    {num: 3}
  ];
  const bathroom = [
    {size: "Full"},
    {size: "Half"}
  ];

  return (
    <>
      <Bedroom bedroom={bedroom[0]}/>
      <Kitchen/>
      <Bathroom bathroom={bathroom[0]}/>
      <Bedroom bedroom={bedroom[1]}/>
      <LivingRoom/>
      <Bathroom bathroom={bathroom[1]}/>
      <Bedroom bedroom={bedroom[2]}/>
    </>
  );
}

// Must export the component's function (or class)
export default FloorPlan;