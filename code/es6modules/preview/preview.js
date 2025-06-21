                                                                                                       

//Used in the addPreviewContainer() function below
//Creates Preview Container
export function createPreviewContainer(elementType, elementId, elementClassName){
  const previewContainerElement = document.createElement(elementType);
   previewContainerElement.id = elementId;
   previewContainerElement.className = elementClassName;

   return previewContainerElement;

}

//Used in experiencePreview.js
//Adds Preview Container to parent container
export function addPreviewContainer(elementType, elementId, elementClassName, parentPreviewContainer){
    const previewContainer = createPreviewContainer(elementType, elementId, elementClassName);
    parentPreviewContainer.appendChild(previewContainer)

    return previewContainer;

};

//Used In formPreviewConnection.js
// ADD PREVIEW ELEMENT
export function createPreviewElement(elementType, elementId, elementClassName){
   const previewElement = document.createElement(elementType);
   previewElement.id = elementId;
   previewElement.className = elementClassName;
   //parentPreviewContainer.appendChild(previewElement)
   

   return previewElement;
  
}




