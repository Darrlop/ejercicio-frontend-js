
export function showItem(item, othersDetailsOfItem){  
  return `
    <a href="item-detail.html?id=${item.id}">
      <p><b>Artículo:</b> ${item.name}</p>
      <p><b>Estado:</b> ${othersDetailsOfItem.saleOrBuy}</p>
      <p><b>${othersDetailsOfItem.priceOrOffer}:</b> ${item.price} €</p>
      <p><b>Descripción:</b> ${item.description}</p>
      <p><b>Fotografía:</b><p> 
      <img src=${othersDetailsOfItem.itemPhoto} class="photo-item" alt="foto artículo">
    </a>
  `
}

