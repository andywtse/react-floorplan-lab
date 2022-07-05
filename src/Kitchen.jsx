import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen(props) {
  return (
    <div>
      Kitchen
      <div>
        <Oven/>
        <Sink/>
      </div>
    </div>
  );
}

// Must export the component's function (or class)
export default Kitchen;