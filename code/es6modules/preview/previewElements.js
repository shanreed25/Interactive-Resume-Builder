                                                                                                       
//Creates Preview Container
export function createPreviewContainer(elementType, elementId, elementClassName){
  const previewContainerElement = document.createElement(elementType);
   previewContainerElement.id = elementId;
   previewContainerElement.className = elementClassName;

   return previewContainerElement;

}

//Adds Preview Container to parent container
export function addPreviewContainer(elementType, elementId, elementClassName, parentPreviewContainer){
    const previewContainer = createPreviewContainer(elementType, elementId, elementClassName);
    parentPreviewContainer.appendChild(previewContainer)

    return previewContainer;

};


// ADD PREVIEW ELEMENT
export function createPreviewElement(elementType, elementId, elementClassName){
   const previewElement = document.createElement(elementType);
   previewElement.id = elementId;
   previewElement.className = elementClassName;
   //parentPreviewContainer.appendChild(previewElement)
   

   return previewElement;
  
};


  //Get Skill UL Element
  export const allSkillsPreviewList = document.getElementById('all-skills-preview-list');


// EDUCATION PREVIEW------------------------------------------------------------------

//Preview Container for each degree
export function degreePreviewContainer(educationFormCount, parentContainer){
    const degreePreviewContainer = addPreviewContainer(
        'div', `degree-preview-container-${educationFormCount}`, 
        'degree-preview-container', 
        parentContainer
    )
    return degreePreviewContainer;
}


//Preview Container for each GPA
export function gpaPreviewContainer(educationFormCount, parentContainer){
    const gpaPreviewContainer = addPreviewContainer(
        'div', `gpa-preview-container-${educationFormCount}`, 
        'gpa-preview-container',
        parentContainer
    );
    
    return gpaPreviewContainer;
}


//Preview Container for each School Name
export function schoolNamePreviewContainer(educationFormCount, parentContainer){
    const schoolNamePreviewContainer = addPreviewContainer(
        'div', `school-name-preview-container-${educationFormCount}`, 
        'school-name-preview-container',
        parentContainer
    );
    
    return schoolNamePreviewContainer;
}

//Preview Container for each School Location
export function schoolLocationPreviewContainer(educationFormCount, parentContainer){
    const schoolLocationPreviewContainer = addPreviewContainer(
        'div', `school-location-preview-container-${educationFormCount}`, 
        'school-location-preview-container',
        parentContainer
    );
    
    return schoolLocationPreviewContainer;
}





