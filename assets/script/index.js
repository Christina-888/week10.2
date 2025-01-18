const calculateTotalPrice = (quantity = 2, price = 15000000) => {
  const result = quantity * price;
  const formattedResult = result.toLocaleString('ru-RU');
  console.log(formattedResult); 
  return alert(`Стоимость покупки: ${formattedResult} рублей.`);
}


const outcome = document.getElementById('test');
outcome.textContent = `Стоимость покупки: ${formattedResult} рублей.`;