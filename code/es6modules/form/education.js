import { addInput, addContainer } from './formInputs.js';


const allEducationFormsContainer = document.getElementById('all-education-forms-container');
//EDUCATION - 4
//Container and Inputs For School Name nad Degree
export function addEducationForm(educationFormCount){
  //CONTAINERS------------------------------------------------------------
    //Container for each education Form
    const educationFormContainer = addContainer(`education-form-container-${educationFormCount}`, 'education-form-container');

    //Container for each degree input
    const degreeInputContainer = addContainer(`degree-input-container-${educationFormCount}`, 'degree-input-container');

    //School Dates Input Container
    const schoolDatesInputContainer = addContainer(`school-dates-input-container-${educationFormCount}`, 'school-dates-input-container');

    //Container for school name and dates inputs
    const schoolNameDateInputContainer = addContainer(`school-name-date-input-container-${educationFormCount}`, 'school-name-date-input-container');

    //INPUTS------------------------------------------------------------------
    // Degree Input
    const degreeInput = addInput("text", `degree-input-${educationFormCount}`, 'degree-input', "Degree");

    // School Name Input
    const schoolNameInput = addInput("text", `school-name-input-${educationFormCount}`, 'school-name-input', "School Name");

    // School Start Date Input
    const schoolStartDateInput = addInput("month", `school-start-date-input-${educationFormCount}`, 'school-start-date-input', "Start Date");

     // School Start Date Input
    const schoolEndDateInput = addInput("month", `school-end-date-input-${educationFormCount}`, 'school-end-date-input', "End Date");


    // Education Form Container with Input Containers
    educationFormContainer.append(degreeInputContainer, schoolNameDateInputContainer);
    //Degree Input Container with degree Input
    degreeInputContainer.append(degreeInput);

    //School Name and Dates Input Container with school name input and school dates container
    schoolNameDateInputContainer.append(schoolNameInput, schoolDatesInputContainer);
    schoolDatesInputContainer.append(schoolStartDateInput, schoolEndDateInput )
    allEducationFormsContainer.append(educationFormContainer);
    
    return educationFormContainer;
}




