export function addButton(buttonType, buttonId, buttonClassName, buttonTextContent, parentContainer){
  const actionButton = document.createElement('button');
  actionButton.type = buttonType;
  actionButton.id = buttonId;
  actionButton.className = buttonClassName;
  actionButton.textContent = buttonTextContent;
  parentContainer.appendChild(actionButton);

  return actionButton;
}
