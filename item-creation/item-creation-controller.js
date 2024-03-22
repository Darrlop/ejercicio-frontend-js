import { urlNoPhoto } from "../utils/const_var.js";

export const itemCreationController = (itemCreationForm) => {

  
  itemCreationForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const fields = getFormFields(itemCreationForm);


    console.log(fields);   //BALIZA AQUÏ ME QUEDË

    testFormFields(itemCreationForm);
  
  });

  const getFormFields = (itemCreationForm) => {
    
    let fields = {};
    const formData = new FormData(itemCreationForm);

    //console.log (itemCreationForm.querySelector('#buyORsell').checked);


    fields.name = formData.get('name');
    fields.description = formData.get('description');
    //fields.sale = formData.get('buyORsell');  <- FormData no funciona bien con los checkbox
    fields.sale = itemCreationForm.querySelector('#buyORsell').checked
    fields.price = formData.get('price');
    fields.photo = (formData.get('photo') === "" ? urlNoPhoto : formData.get('photo'));
    return fields;
  }


  const testFormFields = (itemCreationForm) => {

    let errors = [];
    
    if (!isValidPrice(itemCreationForm.querySelector('#price')))
      { errors.push(" Error: el precio introducido no es numérico") }
    if (!testURL(itemCreationForm.querySelector('#photo')))
      { errors.push("Error: La url a la fotografía no es válida"); }
    
    
  }

  function isValidPrice (priceString){
    const price = parseFloat(priceString);
    return !isNaN(price);
  }

  function testURL (urlString){
    try {
      new URL(urlString);
      return true;
    } catch (error) {
      return false;
    }
  }

  // sacar datos y meter en un objeto

  //chequear validez datos
  //crear item en BBDD

}