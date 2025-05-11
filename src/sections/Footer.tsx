import type { Skip } from "../interfaces/skip.interface";

const Footer = ({ selectedSkip }: { selectedSkip: Skip | null }) => {
  const isSelected = !!selectedSkip;

  const totalPrice =
    selectedSkip?.price_before_vat &&
    selectedSkip?.vat &&
    selectedSkip.price_before_vat +
      (selectedSkip.price_before_vat * selectedSkip.vat) / 100;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-secondary text-white py-4 px-6 sm:px-20 border-t border-primary z-50">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between w-full text-sm sm:text-base font-medium">
        {!isSelected ? (
          <p className="text-white text-lg font-bold">Please select a skip</p>
        ) : (
          <div className="flex justify-between items-center sm:gap-6 w-full sm:w-auto">
            <p className="font-medium text-lg">{selectedSkip.size} Yard Skip</p>
            <div className="flex items-center gap-3">
              <p className="text-primary font-bold text-lg">
                £{totalPrice?.toFixed(2)}
              </p>
              <p className="text-secondary-light text-lg font-medium">
                {selectedSkip.hire_period_days} days
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button className="back-btn">Back</button>
          <button
            disabled={!isSelected}
            className={`continue-btn ${
              !isSelected ? "bg-gray-600 text-gray-400 cursor-not-allowed" : ""
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
