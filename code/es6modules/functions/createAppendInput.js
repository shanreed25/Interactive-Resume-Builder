export function createAppendInput(inputType, inputId, inputClassName, inputPlaceholder, parentContainer){
    const inputName = document.createElement("input");
    inputName.type = inputType;
    inputName.id = inputId
    inputName.className = inputClassName;
    inputName.placeholder = inputPlaceholder;
    parentContainer.appendChild(inputName);
    return inputName;
}