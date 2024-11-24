const rates = {};

function setExchangeRate(rate, sourceCurrency, targetCurrency) {
  if (rates[sourceCurrency] === undefined) {
    rates[sourceCurrency] = {};
  }

  if (rates[targetCurrency] === undefined) {
    rates[targetCurrency] = {};
  }

  // Actualización para calcular las tasas de conversión con otras divisas
  for (const currency in rates) {
    if (currency !== targetCurrency) {
      // Usar una tasa pivot para divisas sin tasa de conversión directa
      const pivotRate = currency === sourceCurrency ? 1 : rates[currency][sourceCurrency];
      rates[currency][targetCurrency] = rate * pivotRate;
      rates[targetCurrency][currency] = 1 / (rate * pivotRate);
    }
  }

  // Asignar la tasa directa
  rates[sourceCurrency][targetCurrency] = rate;
  rates[targetCurrency][sourceCurrency] = 1 / rate;
}

function convertToCurrency(value, sourceCurrency, targetCurrency) {
  const exchangeRate = rates[sourceCurrency][targetCurrency];
  return exchangeRate && value * exchangeRate;
}

function formatValueForDisplay(value) {
  return value.toFixed(2);
}

function printForeignValues(value, sourceCurrency) {
  console.info(`The value of ${value} ${sourceCurrency} is:`);

  for (const targetCurrency in rates) {
    if (targetCurrency !== sourceCurrency) {
      const convertedValue = convertToCurrency(value, sourceCurrency, targetCurrency);
      if (convertedValue !== undefined) {
        const displayValue = formatValueForDisplay(convertedValue);
        console.info(`- ${displayValue} ${targetCurrency}`);
      }
    }
  }

}

// Establecer las tasas de conversión
setExchangeRate(0.88, 'USD', 'EUR');
setExchangeRate(107.4, 'USD', 'JPY');

// Probar la conversión
printForeignValues(10, 'EUR');
