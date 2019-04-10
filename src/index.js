// regex that checks if value contains digits only
const digitsOnly = /^\d+$/;

// Function to mask digits into Rw phone formatt
const maskRWPhone = (phone) => {
  if (!phone || typeof phone !== 'string') return null;

  // Returning the untouched value when it contains none
  if (!digitsOnly.test(phone) || phone.length !== 12) return phone;

  // returning the masked value
  const codeArea = phone.substring(0, 3);
  const prefix = phone.substring(3, 6);
  const subPrefix = phone.substring(6, 9);
  const sufix = phone.substring(9, 12);

  return `(+${codeArea}) ${prefix}-${subPrefix}-${sufix}`;
};

export default maskRWPhone;
