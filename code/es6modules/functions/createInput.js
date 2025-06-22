//ADD FORM INPUTS
export function createInput(inputType, inputId, inputClassName, inputPlaceholder){
    const inputName = document.createElement("input");
    inputName.type = inputType;
    inputName.id = inputId
    inputName.className = inputClassName;
    inputName.placeholder = inputPlaceholder;
    return inputName;
}