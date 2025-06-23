// ADD PREVIEW ELEMENT
export function createAppendPreviewElement(elementType, elementId, elementClassName, parentPreviewContainer){
   const previewElement = document.createElement(elementType);
   previewElement.id = elementId;
   previewElement.className = elementClassName;
   parentPreviewContainer.appendChild(previewElement)
   

   return previewElement;
  
};