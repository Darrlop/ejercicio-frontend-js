import { urlNoPhoto } from "../utils/const_var.js";
import { createItem } from "./item-creation-model.js";

export const itemCreationController = (itemCreationForm) => {

  
  itemCreationForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    const fields = getFormFields(itemCreationForm);


    console.log(fields);   

    const errorsInFields = testFormFields(itemCreationForm);
    errorsInFields.length === 0 ? await createItem(fields) :  alert (errorsInFields.join(" "));
    window.location.href= "./index.html";
  
      
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
    if (!isValidPrice(itemCreationForm.querySelector('#price').value))
      { errors.push(" Error: el precio introducido no es numérico") }
    if (!testURL(itemCreationForm.querySelector('#photo').value))
      { errors.push("Error: La url a la fotografía no es válida"); }
    
    return errors;
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
      return (urlString.length !== 0) ? false : true;
    }
  }

  // sacar datos y meter en un objeto

  //chequear validez datos
  //crear item en BBDD

}