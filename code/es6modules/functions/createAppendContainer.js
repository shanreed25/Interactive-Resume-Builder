//Creates a container div and appends it to the parent container----------------------------------------------------------------
export function createAppendContainer(containerId, containerClassName, parentContainer){
  const containerDiv = document.createElement("div");
  containerDiv.id = containerId;
  containerDiv.className = containerClassName;
  parentContainer.appendChild(containerDiv)

  return containerDiv;
};
