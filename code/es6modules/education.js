import { createAppendContainer } from './functions/createAppendContainer.js';
import {  
  degreePreviewContainer, 
  gpaPreviewContainer, 
  schoolNamePreviewContainer, 
  schoolLocationPreviewContainer
} from './functions/educationPreview.js';
import { createInputAndPreview } from './functions/inputPreviewConnection.js';

//Container for all education forms
const educationFormsContainer = document.getElementById('all-education-forms-container');//Container for all experience forms

//Container for all education previews
const allEducationPreviewsContainer = document.getElementById('all-education-preview-container');

//EDUCATION - 2----------------------------------------------------------------------------------------------------
let educationFormCount = 0;
export function addNewEducationSection(buttonName){
  buttonName.addEventListener('click', () => {
    educationFormCount++

    //Container for each education form
    const educationFormContainer = createAppendContainer(`education-form-container-${educationFormCount}`, 'education-form-container', educationFormsContainer );
  

    //Container for each education preview
    const educationPreviewContainer = createAppendContainer(`education-preview-container-${educationFormCount}`, 'education-preview-container', allEducationPreviewsContainer)
    
    //Degree and GPA
    const degreeGpaPreviewContainer = createAppendContainer(`degree-gpa-preview-container-${educationFormCount}`, 'degree-gpa-preview-container', educationPreviewContainer);
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
    const schoolNameLocationPreviewContainer = createAppendContainer(`school-name-location-preview-container-${educationFormCount}`, 'school-name-location-preview-container', educationPreviewContainer);
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


