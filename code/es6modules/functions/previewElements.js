                                                                                                       

// ADD PREVIEW ELEMENT
export function createPreviewElement(elementType, elementId, elementClassName){
   const previewElement = document.createElement(elementType);
   previewElement.id = elementId;
   previewElement.className = elementClassName;
   //parentPreviewContainer.appendChild(previewElement)
   

   return previewElement;
  
};







