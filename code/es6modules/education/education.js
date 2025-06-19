import {addEducationFormContainer} from './educationInputs.js';
import { addEducationPreviewContainer} from './educationPreview.js';



function addInputValueToPreview(formInput, previewElement){
       // ---> Listen for the degree input and add the value to the preview
     formInput.addEventListener('input', () => {
        previewElement.textContent = formInput.value;
     });
}
export default function addEducation(educationFormCount){
    //Add education form container-------------------------------------------------------------------------------->
    const educationFormContainer = addEducationFormContainer(educationFormCount);
    //Get The Degree Input
    const degreeInput = educationFormContainer.querySelector(`#degree-input-${educationFormCount}`);

    const schoolNameInput = educationFormContainer.querySelector(`#school-name-input-${educationFormCount}`);
    
    const schoolStartDateInput = educationFormContainer.querySelector(`#school-start-date-input-${educationFormCount}`);
    
    const schoolEndDateInput = educationFormContainer.querySelector(`#school-end-date-input-${educationFormCount}`);
    
    //Add education preview container----------------------------------------------------------------------------------------------->
    const educationPreviewContainer = addEducationPreviewContainer(educationFormCount);
    //Get The Degree h4 element
    const educationDegreeH4 = educationPreviewContainer.querySelector(`#school-info-preview-container-${educationFormCount}`);
    
    //Get The School Name h5 element
    const schoolNameH5 = educationPreviewContainer.querySelector(`#school-name-input-preview-${educationFormCount}`);

    //Get The School Start Date h5 element
    const schoolStartDateH5 = educationPreviewContainer.querySelector(`#school-start-date-input-preview-${educationFormCount}`);

     //Get The School Name h5 element
    const schoolEndDateH5 = educationPreviewContainer.querySelector(`#school-end-date-input-preview-${educationFormCount}`);
    console.log(educationFormContainer, educationPreviewContainer);


    //Listen for Inputs--------------------------------------------------------------------------------------->
    addInputValueToPreview(degreeInput, educationDegreeH4 ); //DEGREE INPUT
    addInputValueToPreview(schoolNameInput, schoolNameH5 ); //SCHOOL NAME INPUT
    addInputValueToPreview(schoolStartDateInput, schoolStartDateH5 ); //SCHOOL START DATE
    addInputValueToPreview(schoolEndDateInput, schoolEndDateH5 ); //SCHOOL END DATE

}