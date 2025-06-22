import {addContainer} from './form/formInputs.js';
import { degreePreviewContainer, gpaPreviewContainer, schoolNamePreviewContainer, schoolLocationPreviewContainer} from './preview/educationPreview.js';
import { createInputAndPreview } from './inputPreviewConnection.js';
import {addPreviewContainer} from './preview/previewElements.js';


//EDUCATION - 2----------------------------------------------------------------------------------------------------
let educationFormCount = 0;
export function addNewEducationSection(buttonName){
  buttonName.addEventListener('click', () => {
    educationFormCount++

     //All Experience Forms Container
    const educationFormsContainer = document.getElementById('all-education-forms-container');//Container for all experience forms

    //EDUCATION FORM CONTAINER
    const educationFormContainer = addContainer(`education-form-container-${educationFormCount}`, 'education-form-container' );
    educationFormsContainer.appendChild(educationFormContainer);

    const allEducationPreviewsContainer = document.getElementById('all-education-preview-container');
    const educationPreviewContainer = addPreviewContainer('div',`education-preview-container-${educationFormCount}`, 'education-preview-container', allEducationPreviewsContainer)
    
    //Degree and GPA
    const degreeGpaPreviewContainer = addPreviewContainer('div',`degree-gpa-preview-container-${educationFormCount}`, 'degree-gpa-preview-container', educationPreviewContainer);
    createInputAndPreview(
      educationFormContainer, degreePreviewContainer(educationFormCount, degreeGpaPreviewContainer),
       "text", `degree-input-${educationFormCount}`, "med", "Degree",
       'h4', `degree-preview-${educationFormCount}`, 'degree-preview'
    );

    createInputAndPreview(
      educationFormContainer,  gpaPreviewContainer(educationFormCount, degreeGpaPreviewContainer),
       "text", `gpa-input-${educationFormCount}`, "med", "GPA",
       'h5', `gpa-preview-${educationFormCount}`, 'gpa-preview'
    );

    //School Name and Location
    const schoolNameLocationPreviewContainer = addPreviewContainer('div',`degree-gpa-preview-container-${educationFormCount}`, 'degree-gpa-preview-container', educationPreviewContainer);
     createInputAndPreview(
      educationFormContainer,  schoolNamePreviewContainer(educationFormCount, schoolNameLocationPreviewContainer),
       "text", `school-name-input-${educationFormCount}`, "med", "School Name",
       'h5', `school-name-preview-${educationFormCount}`, 'school-name-preview'
    );
    

    createInputAndPreview(
      educationFormContainer,  schoolLocationPreviewContainer(educationFormCount, schoolNameLocationPreviewContainer),
       "text", `school-location-input-${educationFormCount}`, "med", "School Location",
       'h5', `school-location-preview-${educationFormCount}`, 'school-location-preview'
    );

  });

  
};


