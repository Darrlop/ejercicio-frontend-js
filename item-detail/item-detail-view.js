
export function showItem(item, othersDetailsOfItem){
  return `
    <h2>Artículo: ${item.name}</h2>
    <p><b>Estado:</b> ${othersDetailsOfItem.saleOrBuy}</p>
    <p><b>${othersDetailsOfItem.priceOrOffer}:</b> ${item.price} €</p>
    <p><b>Descripción:</b> ${item.description}</p>
    
    <section class="frame__detail">
      <img src=${othersDetailsOfItem.itemPhoto} class="photo-detail" alt="foto artículo"> 
    </section>
  `
}