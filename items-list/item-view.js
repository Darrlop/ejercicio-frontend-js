
export function showItem(item){

  const statusArticle = item.sale ? "Se vende" : "Se compra";
  const priceOrOffer = item.sale ? "Precio" : "Oferta";
  const itemPhoto = item.photo === "" ? 'https://as1.ftcdn.net/v2/jpg/05/03/24/40/1000_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg' : item.photo;
  

  return `
    <p><b>Artículo:</b> ${item.name}</p>
    <p><b>Estado:</b> ${statusArticle}</p>
    <p><b>${priceOrOffer}:</b> ${item.price} €</p>
    <p><b>Descripción:</b> ${item.description}</p>
    <p><b>Fotografía:</b><p> 
      <img src=${itemPhoto} class="photo-item" alt="foto artículo">  
  `
}
