import {addContainer, addInput, addButton} from './form/formInputs.js';
import {addPreviewElement} from './preview/preview.js';
import {addEducationPreviewContainer} from './preview/educationPreview.js';
import {addEducationForm} from './form/education.js'

//EXPERIENCE----------------------------------------------------------------------------
//EMPLOYER NAME------------

export function addInputAndPreview(
  jobFormContainer, employerNamePositionContainer, 
  inputType, inputId, inputClassName, inputPlaceholder, 
elementType, elementId, elementClassName ) {
  //Create a Employer Name Input 
  const formInput = addInput(inputType, inputId, inputClassName, inputPlaceholder);
  jobFormContainer.appendChild(formInput);

  //Create a Employer Name Preview Element
  const inputPreview = addPreviewElement(elementType, elementId, elementClassName);
  employerNamePositionContainer.appendChild(inputPreview);

  // ---> Listen for the input and add the value to the preview
  formInput.addEventListener("input", () => {
    inputPreview.textContent = formInput.value;
  })
};


// export function addEmployerName(formCount, jobFormContainer, employerNamePositionContainer) {
//   //Create a Employer Name Input 
//   const employerNameInput = addInput("text", `employer-name-input-${formCount}`, "med", "Employer/Company Name" );
//   jobFormContainer.appendChild(employerNameInput);

//   //Create a Employer Name Preview Element
//   const employerNamePreviewElement = addPreviewElement("h2", `employer-name-preview-${formCount}`, "employer-name-preview");
//   employerNamePositionContainer.appendChild(employerNamePreviewElement);

//   // ---> Listen for the input and add the value to the preview
//   employerNameInput.addEventListener("input", () => {
//     employerNamePreviewElement.textContent = employerNameInput.value;
//   })
// }
// //POSITION------------------
// export function addPosition(formCount, jobFormContainer, employerNamePositionContainer) {
//   // Create a Position Input 
//   const positionInput = addInput("text", `position-input-${formCount}`, "med", "Position" );
//   jobFormContainer.appendChild(positionInput);

//   //Create a Position Preview Element
//   const positionPreviewElement = addPreviewElement("h2", `position-preview-${formCount}`, "position-preview");
//   employerNamePositionContainer.appendChild(positionPreviewElement);

//   //Listen for the input and add it to the preview
//   positionInput.addEventListener("input", () => {
//     positionPreviewElement.textContent = `  - ${positionInput.value}`;
//   });
// }

//START DATE----------------
export function addStartDate(formCount, jobFormContainer, employerDatesPreviewContainer) {
  // Create Employer Start Date Input and adds it to the Job Form Container
  const startDateInput = addInput("month", `start-date-input-${formCount}`, "med", "Start Date" );
  jobFormContainer.appendChild(startDateInput);

  //Create a Start Date Preview Element and adds it to the Job Dates Preview Container
  const startDatePreviewElement = addPreviewElement("p", `start-date-preview-${formCount}`, "start-date-preview");
  employerDatesPreviewContainer.appendChild(startDatePreviewElement);

  const dateSeparator = document.createElement('p');
  employerDatesPreviewContainer.appendChild(dateSeparator);

  // ---> Listen for the input and add it to the preview
  startDateInput.addEventListener("input", () => {
    //Converts the date format
    const startDateValue = startDateInput.value;// e.g., "2010-06"
    if (startDateValue) {
      const [year, month] = startDateValue.split("-");
      const date = new Date(year, month - 1); // Month is zero-based
      const options = { year: "numeric", month: "long" };
      startDatePreviewElement.textContent = date.toLocaleDateString("en-US", options);// e.g. June 2010
      dateSeparator.textContent = "to";

    } else {
      startDatePreviewElement.textContent = "";
    }
  })
}

//END DATE------------------
export function addEndDate(formCount, jobFormContainer, employerDatesPreviewContainer) {
  // Create Employer End Date Input and adds it to the Job Form Container
  const endDateInput = addInput("month", `end-date-input-${formCount}`, "med", "End Date" );
  jobFormContainer.appendChild(endDateInput);

  //---> 2 Create a End Date Preview Element and adds it to the Job Dates Preview Container
  const endDatePreviewElement =  addPreviewElement("p", `end-date-preview-${formCount}`, "end-date-preview");
  employerDatesPreviewContainer.appendChild(endDatePreviewElement)

  // ---> Listen for the input and add it to the preview
  endDateInput.addEventListener("input", () => {
    //Converts the date format
    const endDateValue = endDateInput.value;// e.g., "2010-06"
    if (endDateValue) {
      const [year, month] = endDateValue.split("-");
      const date = new Date(year, month - 1); // Month is zero-based
      const options = { year: "numeric", month: "long" };
      endDatePreviewElement.textContent = date.toLocaleDateString("en-US", options);// e.g. June 2010

    } else {
      endDatePreviewElement.textContent = "";
    }

  })
}

//EMPLOYER CITY-------------
export function addEmployerCity(formCount, jobFormContainer, employerLocationPreviewContainer) {
  // ---> Create Employer City Input
  const employerCityInput = addInput("text", `employer-city-input-${formCount}`, "med", "City");
  jobFormContainer.appendChild(employerCityInput);

  //Create a Employer City Preview Element
  const employerCityPreviewElement =  addPreviewElement("p", `employer-city-preview-${formCount}`, "employer-city-preview");
  employerLocationPreviewContainer.appendChild(employerCityPreviewElement)

  // ---> Listen for the input and add it to the preview
  employerCityInput.addEventListener("input", () => {
    employerCityPreviewElement.textContent = employerCityInput.value;
  })
}

//EMPLOYER STATE-------------
export function addEmployerState(formCount, jobFormContainer, employerLocationPreviewContainer) {
  // ---> Create Employer State Input
  const employerStateInput = addInput("text", `employer-state-input-${formCount}`, "med", "State");
  jobFormContainer.appendChild(employerStateInput);

  const employerStatePreviewElement = addPreviewElement("p", `employer-state-preview-${formCount}`, "employer-state-preview");
  employerLocationPreviewContainer.appendChild(employerStatePreviewElement)


  // ---> Listen for the input and add it to the preview
  employerStateInput.addEventListener("input", () => {
    employerStatePreviewElement.textContent = `, ${employerStateInput.value}`;
  })
}

//Job Duty--------------------
export function addJobDuty(formCount, jobFormContainer, employerDetailsPreviewContainer) {
  let jobDutyCount = 0;
  const experienceFormsContainer = document.getElementById('all-experience-forms-container');//Container for all experience forms
  experienceFormsContainer.appendChild(jobFormContainer);
  //Create and add container for job duty inputs to form
  const jobDutyInputsContainer = addContainer(`job-duties-input-container-${formCount}`, 'job-duties-input-container');
  jobFormContainer.appendChild(jobDutyInputsContainer);

  //Create and add Job Duty Button to form
  const jobDutyButton = addButton('button', `add-job-duty-button-${formCount}`, "add-job-duty-button", "Add Job Description" );
  jobFormContainer.appendChild(jobDutyButton);

  //Create and add Unordered List to the preview
  const jobDutyULPreviewElement = addPreviewElement("ul", `job-duty-list-preview-${formCount}`, "job-duty-list-preview");
  employerDetailsPreviewContainer.appendChild(jobDutyULPreviewElement);

  //Listen for Button
  jobDutyButton.addEventListener('click', () => {
    jobDutyCount++;//count of the number of list item added to each unordered list

    //Create and add job duty input to form container
    // const dutyInput = addjobDutyInput(formCount, jobDutyCount, jobFormContainer);

     const dutyInput = addInput("text", `duty-input-${jobDutyCount}-for-experience-${formCount}`, "duty-input", "Add Job Duty/Description");
    jobDutyInputsContainer.appendChild(dutyInput);

    //Create and add job duty list item to preview container
    const jobDutyLIPreviewElement = addPreviewElement("li", `job-duty-li-preview-${jobDutyCount}-for-experience-${formCount}`, "job-duty-li-preview");
    jobDutyULPreviewElement.append(jobDutyLIPreviewElement);

    // ---> Listen for the input and add the value to the preview
    dutyInput.addEventListener("input", () => {

      jobDutyLIPreviewElement.textContent = dutyInput.value
    })
  })
}

// SKILLS 3 ----------------------
// Passed down to resume-sectionsjs
export function addSkill(skillCount){
  //Container For all Skills Inputs
  const allSkillsInputContainer = document.getElementById('all-skills-inputs-container');
  
  //Container for each skill input
  const skillInputContainer = addContainer(`skill-input-container-${skillCount}`, `skill-input-container` );
  allSkillsInputContainer.appendChild(skillInputContainer);
  //Skill Input
  const skillInput = addInput('text', `skill-input-${skillCount}`, 'skill-input', "Skill");
  skillInputContainer.appendChild(skillInput);

  //Get Skill UL Element
  const allSkillsPreviewList = document.getElementById('all-skills-preview-list');
  
  //Skill Preview Element
  const skillPreviewLIElement = addPreviewElement('li', `skills-list-item-${skillCount}`, "skills-list-item" );
  allSkillsPreviewList .appendChild(skillPreviewLIElement);
     // ---> Listen for the input and add the value to the preview
     skillInput.addEventListener('input', () => {
        skillPreviewLIElement.textContent = skillInput.value
     })

}


//EDUCATION-------------------------------------------------------------------------------------



// -----------------------------------------------------come Back and review this code--------------------------------------------------------------------------------


//EDUCATION - 3
export function addEducation(educationFormCount){
    //1. Add education form-------------------------------------------------------------------------------->
    addEducationForm(educationFormCount);

    function addInputValueToPreview(formInput, previewElement){
       // ---> Listen for the degree input and add the value to the preview
     formInput.addEventListener('input', () => {
        previewElement.textContent = formInput.value;
     });
}

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

}