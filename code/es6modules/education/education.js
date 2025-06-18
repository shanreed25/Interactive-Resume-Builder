import {addEducationFormContainer} from './educationInputs.js';
import { addEducationPreviewContainer} from './educationPreview.js';


export default function addEducation(educationFormCount){
    //Add education form container
    const educationFormContainer = addEducationFormContainer(educationFormCount);
    const educationDegreeInput = educationFormContainer.querySelector(`#education-school-degree-input-${educationFormCount}`)
    
    
    //Add education preview container
    const educationPreviewContainer = addEducationPreviewContainer(educationFormCount);
    const educationDegreeH4 = educationPreviewContainer.querySelector(`#school-info-preview-container-${educationFormCount}`)
    console.log(educationFormContainer, educationPreviewContainer )

     // ---> Listen for the input and add the value to the preview
     educationDegreeInput.addEventListener('input', () => {
        educationDegreeH4.textContent = educationDegreeInput.value
     })

}