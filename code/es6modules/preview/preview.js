const experiencePreviewsContainer = document.getElementById("all-experience-preview-container");//Container for all experience review
//Passed down to resume-sections.js
export function addExperiencePreviewContainer(experienceFormCount){
      //EXPERIENCE PREVIEW--------------------------------------------------------------------------------------------------- 
    //Main container for each work experience preview
    const workExperienceMainPreviewContainer = document.createElement("div");
    workExperienceMainPreviewContainer.id = `work-experience-main-preview-container-${experienceFormCount}`;
    workExperienceMainPreviewContainer.className = `experience-details`;
    experiencePreviewsContainer.appendChild(workExperienceMainPreviewContainer);
    return workExperienceMainPreviewContainer;
}

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

//SKILL PREVIEW ELEMENT
//Passed down to formPreviewConnection.js
const allSkillsPreviewList = document.getElementById('all-skills-preview-list');
export function addSkillPreviewLIElement(skillCount){
    const skillPreviewLIElement = document.createElement('li');
    skillPreviewLIElement.id = `skills-list-${skillCount}`;
    allSkillsPreviewList.appendChild(skillPreviewLIElement);

    return skillPreviewLIElement;
}