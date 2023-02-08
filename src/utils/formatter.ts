interface ToCurrencyOptions {
  withPrefix?: boolean;
  withFraction?: boolean;
}

const toCurrency = (nominal: number, options: ToCurrencyOptions = {}) => {
  const {withPrefix = true, withFraction = false} = options;
  const prefix = 'Rp';
  let transformed: string;

  if (withFraction) {
    transformed = nominal.toFixed(2);
  } else {
    transformed = nominal.toString();
  }

  const [currency, decimal] = transformed.split('.');
  const converted = `${currency.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}${
    withFraction ? ',' + decimal : ''
  }`;

  if (withPrefix) {
    return `${prefix}${converted}`;
  }

  return converted;
};

/**
 *
 * @param text
 * @param lengthText
 * @returns
 *
 * Reformat long text with elipsis (...)
 * example  :
 *  before  : Lorem ipsum dolor sit amet, consectetur adipiscing elit
 * after    : Lorem ipsum dolor sit ...
 */
const elipsisText = (text: string, lengthText: number): string =>
  text.length > lengthText ? text.substring(0, lengthText - 3) + '...' : text;

const moment = (dateTime: string): string => {
  const currentDate = new Date(dateTime);

  const date = currentDate.getDate();
  const month = monthConverter(currentDate.getMonth());
  const year = currentDate.getFullYear();
  return `${date} ${month} ${year}`;
};

export {toCurrency, elipsisText, moment};

const monthConverter = (month: number): string => {
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  return months[month + 1];
};
