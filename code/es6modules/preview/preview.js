                                                                                                       
//Passed down to resume-sections.js
//ADD PREVIEW CONTAINER
export function addPreviewContainer(elementType, elementId, elementClassName){
  const previewContainerElement = document.createElement(elementType);
   previewContainerElement.id = elementId;
   previewContainerElement.className = elementClassName;

   return previewContainerElement;

}

//Passed down to formPreviewConnection.js
// ADD PREVIEW ELEMENT
export function addPreviewElement(elementType, elementId, elementClassName){
   const previewElement = document.createElement(elementType);
   previewElement.id = elementId;
   previewElement.className = elementClassName;

   return previewElement;
  
}




