
import {addEducationPreviewContainer} from './preview/educationPreview.js';
import {addEducationForm} from './form/education.js';





//EDUCATION - 3
export function addEducation(educationFormCount){
    //1. Add education form-------------------------------------------------------------------------------->
    addEducationForm(educationFormCount);

    function addInputValueToPreview(formInput, previewElement){
       // ---> Listen for the degree input and add the value to the preview
     formInput.addEventListener('input', () => {
        previewElement.textContent = formInput.value;
     });
};

// -----------------------------------------------------come Back and review this code--------------------------------------------------------------------------------
/**                                                                                                                                                     
 * Selects a single DOM element based on a CSS selector.
 *
 * @param {string} selector - The CSS selector string (e.g., '#myId', '.myClass', 'div p').
 * @param {Element} [scope=document] - The element within which to search for the selector. Defaults to `document`.
 * @returns {Element|null} The first matching DOM element, or null if no element is found.
 */


function selectPreviewElement(selector, scope = document) {
  return scope.querySelector(selector);
}

    //2. ACCESS THE INPUTS
    const degreeInput = selectPreviewElement(`#degree-input-${educationFormCount}`);

    const schoolNameInput = selectPreviewElement(`#school-name-input-${educationFormCount}`);
    
    const schoolStartDateInput = selectPreviewElement(`#school-start-date-input-${educationFormCount}`);
    
    const schoolEndDateInput = selectPreviewElement(`#school-end-date-input-${educationFormCount}`);
    
    //3. Add education Preview----------------------------------------------------------------------------------------------->
    const educationPreviewContainer = addEducationPreviewContainer(educationFormCount);
    //Get The Degree h4 element
    const educationDegreeH4 = educationPreviewContainer.querySelector(`#degree-preview-${educationFormCount}`);
    
    //Get The School Name h5 element
    const schoolNameH5 = educationPreviewContainer.querySelector(`#school-name-preview-${educationFormCount}`);

    //Get The School Start Date h5 element
    const schoolStartDateH5 = educationPreviewContainer.querySelector(`#school-start-date-preview-${educationFormCount}`);

     //Get The School Name h5 element
    const schoolEndDateH5 = educationPreviewContainer.querySelector(`#school-end-date-preview-${educationFormCount}`);


    // console.log(educationFormContainer, educationPreviewContainer);


    //Listen for Inputs--------------------------------------------------------------------------------------->
    addInputValueToPreview(degreeInput, educationDegreeH4 ); //DEGREE INPUT
    addInputValueToPreview(schoolNameInput, schoolNameH5 ); //SCHOOL NAME INPUT
    addInputValueToPreview(schoolStartDateInput, schoolStartDateH5 ); //SCHOOL START DATE
    addInputValueToPreview(schoolEndDateInput, schoolEndDateH5 ); //SCHOOL END DATE

};

//EXPERIENCE----------------------------------------------------------------------------
//EMPLOYER NAME------------