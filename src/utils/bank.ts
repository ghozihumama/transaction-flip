export const convertBankName = (bank: string): string => {
  if (bank && typeof bank === 'string') {
    bank = bank.toLocaleLowerCase();
  }

  switch (bank) {
    case 'bni':
      return 'BNI';
    case 'bri':
      return 'BRI';
    case 'bsm':
      return 'BSM';
    case 'muamalat':
      return 'Muamalat';
    case 'bca':
      return 'BCA';
    case 'btpn':
      return 'BTPN';
  }

  return bank;
};
