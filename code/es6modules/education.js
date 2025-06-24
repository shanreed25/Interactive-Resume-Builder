import { createAppendContainer } from './functions/createAppendContainer.js';

import {createInputAndPreview, createDashedInputAndPreview, createDateInputAndReview, createEndDateInputAndReview} from './functions/inputPreviewConnection.js';


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
//----------------------------------------------------------------------------------------------------------------------
    //Degree and School Name Preview Container
    const degreeSchoolNamePreviewContainer = createAppendContainer(`degree-school-name-preview-container-${educationFormCount}`, 'preview-info-1-container', educationPreviewContainer);

    //Degree Type Preview Container
    const degreePreviewContainer = createAppendContainer(`degree-preview-container-${educationFormCount}`, 'degree-preview-container', degreeSchoolNamePreviewContainer);
    //DEGREE TYPE
    createInputAndPreview(
      educationFormContainer, degreePreviewContainer,
       "text", `degree-input-${educationFormCount}`, "med", "Degree",
       'h3', `degree-preview-${educationFormCount}`, 'preview-info-1'
    );

    //School Name Preview Container
    const schoolNamePreviewContainer = createAppendContainer(`school-name-preview-container-${educationFormCount}`, 'school-name-preview-container', degreeSchoolNamePreviewContainer);
    //SCHOOL NAME
    createDashedInputAndPreview(
      educationFormContainer,  schoolNamePreviewContainer,
       "text", `school-name-input-${educationFormCount}`, "med", "School Name",
       'h3', `school-name-preview-${educationFormCount}`, 'preview-info-2'
    );
    
//----------------------------------------------------------------------------------------------------------------------
    //School Dates and Location
    const schoolDatesLocationPreviewContainer = createAppendContainer(`school-dates-location-preview-container-${educationFormCount}`, 'dates-location-preview-container', educationPreviewContainer);
    //School Dates Preview Container
    const schoolDatesPreviewContainer = createAppendContainer(`school-dates-preview-container-${educationFormCount}`, 'dates-preview-container', schoolDatesLocationPreviewContainer)
    //SCHOOL START DATE
    createDateInputAndReview(educationFormContainer, schoolDatesPreviewContainer, 
    "month", `school-start-date-input-${educationFormCount}`, "med", "Start Date", 
     "p", `school-start-date-preview-${educationFormCount}`, "start-date-preview");
    
    //SCHOOL END DATE
    createEndDateInputAndReview(educationFormContainer, schoolDatesPreviewContainer, 
    "month", `school-end-date-input-${educationFormCount}`, "med", "End Date" , 
    "p", `school-end-date-preview-${educationFormCount}`, "end-date-preview");

    //School Location Container
    const schoolLocationPreviewContainer = createAppendContainer(`school-location-preview-container-${educationFormCount}`, 'school-location-preview-container', schoolDatesLocationPreviewContainer);
    //SCHOOL LOCATION
    createInputAndPreview(
      educationFormContainer,  schoolLocationPreviewContainer,
       "text", `school-location-input-${educationFormCount}`, "med", "School Location",
       'p', `school-location-preview-${educationFormCount}`, 'school-location-preview'
    );
//----------------------------------------------------------------------------------------------------------------------


    // //GPA
    // const gpaPreviewContainer = createAppendContainer(`gpa-preview-container-${educationFormCount}`, 'gpa-preview-container', degreeGpaPreviewContainer);
    // createInputAndPreview(
    //   educationFormContainer,  gpaPreviewContainer,
    //    "text", `gpa-input-${educationFormCount}`, "med", "GPA",
    //    'h5', `gpa-preview-${educationFormCount}`, 'gpa-preview'
    // );

    // //School Name and Location Container
    // const schoolNameLocationPreviewContainer = createAppendContainer(`school-name-location-preview-container-${educationFormCount}`, 'school-name-location-preview-container', educationPreviewContainer);
    
 


    // //School Location Container
    // const schoolLocationPreviewContainer = createAppendContainer(`school-location-preview-container-${educationFormCount}`, 'school-location-preview-container', schoolNameLocationPreviewContainer);
    // createInputAndPreview(
    //   educationFormContainer,  schoolLocationPreviewContainer,
    //    "text", `school-location-input-${educationFormCount}`, "med", "School Location",
    //    'h5', `school-location-preview-${educationFormCount}`, 'school-location-preview'
    // );
  });
};


