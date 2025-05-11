import checkImg from "../assets/check.png";
import truckImg from "../assets/truck.png";
import xImg from "../assets/x.png";
import weightImg from "../assets/weight.png";
import type { Skip } from "../interfaces/skip.interface";

function CardDetails({ skip }: { skip: Skip }) {
  const {
    size,
    hire_period_days,
    price_before_vat,
    vat,
    allowed_on_road,
    allows_heavy_waste,
    transport_cost,
    per_tonne_cost,
  } = skip;

  const totalPrice = price_before_vat + (price_before_vat * vat) / 100;

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <h2 className="text-lg md:text-xl font-bold text-white">
          {size} Yard Skip
        </h2>
        <p className="text-md md:text-lg text-secondary-light">
          {hire_period_days} Days Hire Period
        </p>
      </div>

      <div className="mt-4">
        <p className="text-md md:text-lg text-primary font-semibold">
          £{totalPrice.toFixed(2)} incl. VAT
        </p>
      </div>

      <div className="mt-4 flex gap-2 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src={allows_heavy_waste ? checkImg : xImg} alt="Heavy Waste" />
            <p className="text-md md:text-lg">Heavy Waste</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={allowed_on_road ? checkImg : xImg} alt="On Road" />
            <p className="text-md md:text-lg">On Road</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-end">
          <div className="flex items-center gap-2">
            <img src={truckImg} alt="Transport" />
            <p className="text-md md:text-lg">
              Transport:{" "}
              <span className="font-bold">£{transport_cost ?? 0}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={weightImg} alt="Per Tonne" />
            <p className="text-md md:text-lg">
              Per Tonne:{" "}
              <span className="font-bold">£{per_tonne_cost ?? 0}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
