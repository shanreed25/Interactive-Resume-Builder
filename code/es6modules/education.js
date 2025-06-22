import {addContainer, addInput, addButton} from './form/formInputs.js';
import { degreePreviewContainer, gpaPreviewContainer, schoolNamePreviewContainer, schoolLocationPreviewContainer} from './preview/educationPreview.js';
import {addEducationForm} from './form/education.js';
import { createInputAndPreview } from './inputPreviewConnection.js';
import {createPreviewContainer, addPreviewContainer} from './preview/previewElements.js';


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

    const schoolNameLocationPreviewContainer = addPreviewContainer('div',`degree-gpa-preview-container-${educationFormCount}`, 'degree-gpa-preview-container', educationPreviewContainer);
     createInputAndPreview(
      educationFormContainer,  schoolNamePreviewContainer(educationFormCount, schoolNameLocationPreviewContainer),
       "text", `school-name-input-${educationFormCount}`, "med", "School Name",
       'h5', `school-name-preview-${educationFormCount}`, 'school-name-preview'
    );
    //School Name and Location

    createInputAndPreview(
      educationFormContainer,  schoolLocationPreviewContainer(educationFormCount, schoolNameLocationPreviewContainer),
       "text", `school-location-input-${educationFormCount}`, "med", "School Location",
       'h5', `school-location-preview-${educationFormCount}`, 'school-location-preview'
    );

  });

  
};


// // //EDUCATION - 3
// export function addEducation(educationFormCount){
//     //1. Add education form-------------------------------------------------------------------------------->
//     addEducationForm(educationFormCount);

//     function addInputValueToPreview(formInput, previewElement){
//        // ---> Listen for the degree input and add the value to the preview
//      formInput.addEventListener('input', () => {
//         previewElement.textContent = formInput.value;
//      });
// };

// // -----------------------------------------------------come Back and review this code--------------------------------------------------------------------------------
// /**                                                                                                                                                     
//  * Selects a single DOM element based on a CSS selector.
//  *
//  * @param {string} selector - The CSS selector string (e.g., '#myId', '.myClass', 'div p').
//  * @param {Element} [scope=document] - The element within which to search for the selector. Defaults to `document`.
//  * @returns {Element|null} The first matching DOM element, or null if no element is found.
//  */


// function selectPreviewElement(selector, scope = document) {
//   return scope.querySelector(selector);
// }

//     //2. ACCESS THE INPUTS
//     const degreeInput = selectPreviewElement(`#degree-input-${educationFormCount}`);

//     const schoolNameInput = selectPreviewElement(`#school-name-input-${educationFormCount}`);
    
//     const schoolStartDateInput = selectPreviewElement(`#school-start-date-input-${educationFormCount}`);
    
//     const schoolEndDateInput = selectPreviewElement(`#school-end-date-input-${educationFormCount}`);
    
//     //3. Add education Preview----------------------------------------------------------------------------------------------->
//     const educationPreviewContainer = addEducationPreviewContainer(educationFormCount);
//     //Get The Degree h4 element
//     const educationDegreeH4 = educationPreviewContainer.querySelector(`#degree-preview-${educationFormCount}`);
    
//     //Get The School Name h5 element
//     const schoolNameH5 = educationPreviewContainer.querySelector(`#school-name-preview-${educationFormCount}`);

//     //Get The School Start Date h5 element
//     const schoolStartDateH5 = educationPreviewContainer.querySelector(`#school-start-date-preview-${educationFormCount}`);

//      //Get The School Name h5 element
//     const schoolEndDateH5 = educationPreviewContainer.querySelector(`#school-end-date-preview-${educationFormCount}`);


//     // console.log(educationFormContainer, educationPreviewContainer);


//     //Listen for Inputs--------------------------------------------------------------------------------------->
//     addInputValueToPreview(degreeInput, educationDegreeH4 ); //DEGREE INPUT
//     addInputValueToPreview(schoolNameInput, schoolNameH5 ); //SCHOOL NAME INPUT
//     addInputValueToPreview(schoolStartDateInput, schoolStartDateH5 ); //SCHOOL START DATE
//     addInputValueToPreview(schoolEndDateInput, schoolEndDateH5 ); //SCHOOL END DATE

// };

//EXPERIENCE----------------------------------------------------------------------------
//EMPLOYER NAME------------