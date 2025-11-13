// UK Postcode validation regex
const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/;

export const validateUKPostcode = (postcode) => {
  // Remove any whitespace and convert to uppercase
  const formattedPostcode = postcode.replace(/\s/g, '').toUpperCase();
  
  // Format the postcode with a space in the correct position
  const formatPostcode = (pc) => {
    return pc.length > 3 ? `${pc.slice(0, -3)} ${pc.slice(-3)}` : pc;
  };

  if (!postcodeRegex.test(formattedPostcode)) {
    return {
      isValid: false,
      formatted: postcode,
      message: "Please enter a valid UK postcode"
    };
  }

  return {
    isValid: true,
    formatted: formatPostcode(formattedPostcode),
    message: ""
  };
};

// Sample delivery areas - in a real app, this would come from your backend
const deliveryAreas = [
  // London Areas
  { prefix: "E1", available: true },    // East London: E1 6AN, E1 7AA
  { prefix: "SE1", available: true },   // South East London: SE1 9SG, SE1 7PB
  { prefix: "N1", available: true },    // North London: N1 9GU, N1 7GU
  { prefix: "W1", available: true },    // West London: W1D 3AF, W1T 7NY
  { prefix: "SW1", available: true },   // South West London: SW1A 1AA, SW1H 9HP
  { prefix: "EC1", available: true },   // East Central London: EC1V 9HQ, EC1A 1BB
  { prefix: "WC1", available: true },   // West Central London: WC1B 3DG, WC1H 9JP
  // Manchester Areas
  { prefix: "M1", available: true },    // Manchester: M1 1AG, M1 2WD
  // Birmingham Areas
  { prefix: "B1", available: true },    // Birmingham: B1 1HQ, B1 2JP
  // Leeds Areas
  { prefix: "LS1", available: true },   // Leeds: LS1 1UR, LS1 2HD
];

export const checkDeliveryAvailability = (postcode) => {
  const prefix = postcode.split(' ')[0];
  const area = deliveryAreas.find(area => prefix.startsWith(area.prefix));
  
  if (!area) {
    return {
      available: false,
      message: "Sorry, we don't deliver to your area yet"
    };
  }

  return {
    available: area.available,
    message: area.available 
      ? "Great! We deliver to your area"
      : "Sorry, delivery is temporarily unavailable in your area"
  };
};