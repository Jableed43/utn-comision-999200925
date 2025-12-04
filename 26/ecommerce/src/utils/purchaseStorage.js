const STORAGE_KEY = "purchases";

// Guardar compra nueva
export const savePurchase = (purchase) => {
  const purchases = getPurchases();

  const newPurchase = {
    ...purchase,
    date: new Date().toLocaleString(),
    id: Date.now(),
  };
  
  purchases.push(newPurchase);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(purchases));

  return newPurchase;
};

// Leer compras guardadas
export const getPurchases = () => {
  const purchases = localStorage.getItem(STORAGE_KEY);
  if (purchases) {
    JSON.parse(purchases);
  } else {
    return [];
  }
};
