export async function getItems(){

  const url = 'http://localhost:8000/api/items';
  let items = [];

  try {
    const response = await fetch(url);
    items = await response.json();
  } catch (error) {
    throw ("Error accediendo a los artículos en compra/venta -- " + error);
  }

  return items;
}
