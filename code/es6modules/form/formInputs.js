
//Passed down to education.js, 
//Adds Containers----------------------------------------------------------------
export function addContainer(formContainerId, formContainerClassName){
  const formContainer = document.createElement("div");
  formContainer.id = formContainerId;
  formContainer.className = formContainerClassName;

  return formContainer;
}

//ADD FORM INPUTS
export function addInput(inputType, inputId, inputClassName, inputPlaceholder){
    const inputName = document.createElement("input");
    inputName.type = inputType;
    inputName.id = inputId
    inputName.className = inputClassName;
    inputName.placeholder = inputPlaceholder;
    return inputName;
}



