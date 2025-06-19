import {addEducationFormContainer} from './educationInputs.js';
import { addEducationPreviewContainer} from './educationPreview.js';


export default function addEducation(educationFormCount){
    //Add education form container
    const educationFormContainer = addEducationFormContainer(educationFormCount);
    //Get The Degree Input
    const degreeInput = educationFormContainer.querySelector(`#degree-input-${educationFormCount}`)

    const schoolNameInput = educationFormContainer.querySelector(`#school-name-input-${educationFormCount}`)
    
    //Add education preview container
    const educationPreviewContainer = addEducationPreviewContainer(educationFormCount);
    //Get The Degree h4 element
    const educationDegreeH4 = educationPreviewContainer.querySelector(`#school-info-preview-container-${educationFormCount}`)
    
    console.log(educationFormContainer, educationPreviewContainer);

     // ---> Listen for the degree input and add the value to the preview
     degreeInput.addEventListener('input', () => {
        educationDegreeH4.textContent = degreeInput.value;
     })


      // ---> Listen for the input and add the value to the preview
     schoolNameInput.addEventListener('input', () => {
        educationDegreeH4.textContent = degreeInput.value;
     })

}