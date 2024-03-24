import { urlNoPhoto } from "../utils/const_var.js";
import { createItem } from "./item-creation-model.js";
import { dispatchEvent } from "../utils/func-utils.js";

export const itemCreationController = (itemCreationForm) => {

  if (localStorage.getItem('tokenJWT') === null){
    dispatchEvent("creation-item", {
      message: "Sólo pueden crear anuncios los usuarios que hayan hecho login",
      type: 'error',
      redirection: true
    }, itemCreationForm); 
  }

  itemCreationForm.addEventListener('submit', async (event) => {

    event.preventDefault();
    const fields = getFormFields(itemCreationForm);  
    const errorsInFields = testFormFields(itemCreationForm);

    // const spinner = itemCreationForm.div.querySelector("loader");
    const spinner = document.querySelector("#creation .loader");
    spinner.classList.toggle('hidden');
    if (errorsInFields.length === 0){
      handleCreationItem(fields);
    } else {
      showErrorsCreation(errorsInFields);
    }
    spinner.classList.toggle('hidden');
    
  });


  async function handleCreationItem(fields){
    
    try {
      await createItem(fields);
      dispatchEvent("creation-item", {
        message: "Anuncio creado con éxito.",
        redirection: true
      }, itemCreationForm); 
    } catch (error) {
      dispatchEvent("creation-item", {
        message: "Error en la creación del anuncio->" + error,
        type: "error"
      }, itemCreationForm); 
    }

  }

  function showErrorsCreation(errorsInFields){

    let allErrors = '';
    for (const error of errorsInFields) {
      allErrors += error + '<br>';
    }
    dispatchEvent('creation-item', {
      message: allErrors,
      type: 'error'
    }, itemCreationForm);
  
  }


  const getFormFields = (itemCreationForm) => {
    
    let fields = {};
    const formData = new FormData(itemCreationForm);

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





}