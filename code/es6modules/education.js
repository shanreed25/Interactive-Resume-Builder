import { createAppendContainer } from './functions/createAppendContainer.js';

import { createInputAndPreview, createDashedInputAndPreview } from './functions/inputPreviewConnection.js';

import {educationFormsContainer, allEducationPreviewsContainer} from './functions/getElement.js'



//EDUCATION - 2----------------------------------------------------------------------------------------------------
let educationFormCount = 0;
export function addNewEducationSection(buttonName){
  buttonName.addEventListener('click', () => {
    educationFormCount++

    //Container for each education form
    const educationFormContainer = createAppendContainer(`education-form-container-${educationFormCount}`, 'education-form-container', educationFormsContainer );
  
    //Container for each education preview
    const educationPreviewContainer = createAppendContainer(`education-preview-container-${educationFormCount}`, 'education-preview-container', allEducationPreviewsContainer)
    
    //Degree and School Name
    const degreeSchoolNamePreviewContainer = createAppendContainer(`degree-school-name-preview-container-${educationFormCount}`, 'degree-school-name-preview-container', educationPreviewContainer);

    //Degree
    const degreePreviewContainer = createAppendContainer(`degree-preview-container-${educationFormCount}`, 'degree-preview-container', degreeSchoolNamePreviewContainer);
    createInputAndPreview(
      educationFormContainer, degreePreviewContainer,
       "text", `degree-input-${educationFormCount}`, "med", "Degree",
       'h4', `degree-preview-${educationFormCount}`, 'degree-preview'
    );

       //School Name Container
    const schoolNamePreviewContainer = createAppendContainer(`school-name-preview-container-${educationFormCount}`, 'school-name-preview-container', degreeSchoolNamePreviewContainer);
    createDashedInputAndPreview(
      educationFormContainer,  schoolNamePreviewContainer,
       "text", `school-name-input-${educationFormCount}`, "med", "School Name",
       'p', `school-name-preview-${educationFormCount}`, 'school-name-preview'
    );
    




    //GPA
    const gpaPreviewContainer = createAppendContainer(`gpa-preview-container-${educationFormCount}`, 'gpa-preview-container', degreeGpaPreviewContainer);
    createInputAndPreview(
      educationFormContainer,  gpaPreviewContainer,
       "text", `gpa-input-${educationFormCount}`, "med", "GPA",
       'h5', `gpa-preview-${educationFormCount}`, 'gpa-preview'
    );

    //School Name and Location Container
    const schoolNameLocationPreviewContainer = createAppendContainer(`school-name-location-preview-container-${educationFormCount}`, 'school-name-location-preview-container', educationPreviewContainer);
    
 


    //School Location Container
    const schoolLocationPreviewContainer = createAppendContainer(`school-location-preview-container-${educationFormCount}`, 'school-location-preview-container', schoolNameLocationPreviewContainer);
    createInputAndPreview(
      educationFormContainer,  schoolLocationPreviewContainer,
       "text", `school-location-input-${educationFormCount}`, "med", "School Location",
       'h5', `school-location-preview-${educationFormCount}`, 'school-location-preview'
    );
  });
};


