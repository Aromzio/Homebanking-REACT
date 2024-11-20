import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => setCurrencies(Object.keys(data.rates)));
  }, []);

  const convertCurrency = () => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        const rate = data.rates[toCurrency];
        setResult((amount * rate).toFixed(2));
      });
  };

  return (
    <div className="p-10 rounded-xl text-xl bg-emerald-500">
      <h2 className="pb-3">Conversion de Moneda</h2>
      <div className="py-3">
        <label>De: </label>
        <select className="bg-emerald-200" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="pb-3">
        <label>Pasar a: </label>
        <select className="bg-emerald-200"value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Monto: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="mt-5 bg-gray-600 text-white p-1  rounded" onClick={convertCurrency}>Convertir</button>
      {result && (
        <p>
          {amount} {fromCurrency} = {result} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
