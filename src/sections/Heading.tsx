import { FaLocationDot } from "react-icons/fa6";
import {
  FaRegTrashAlt,
  FaTruck,
  FaCalendar,
  FaRegCreditCard,
} from "react-icons/fa";

function Heading() {
  const links = [
    { name: "Postcode", icon: <FaLocationDot /> },
    { name: "Waste Type", icon: <FaRegTrashAlt /> },
    { name: "Select Skip", icon: <FaTruck /> },
    { name: "Permit Check", icon: <FaLocationDot /> },
    { name: "Choose Date", icon: <FaCalendar /> },
    { name: "Payment", icon: <FaRegCreditCard /> },
  ];

  return (
    <div className="hidden sm:flex flex-wrap justify-center items-center mt-10 px-4 gap-x-6 gap-y-6">
      {links.map((link, index) => (
        <div key={index} className="flex items-center">
          {/* Icon + Label */}
          <div className="flex items-center gap-2">
            <div
              className={`text-xl ${
                index < 3 ? "text-primary" : "text-gray-400"
              }`}
            >
              {link.icon}
            </div>
            <span
              className={`text-sm md:text-base ${
                index < 3 ? "text-white" : "text-gray-400"
              }`}
            >
              {link.name}
            </span>
          </div>

          {/* Line connector */}
          {index < links.length - 1 && (
            <div
              className={`h-0.5 w-8 md:w-12 lg:w-16 mx-3 md:mx-4 ${
                index < 2 ? "bg-primary" : "bg-gray-600"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Heading;
