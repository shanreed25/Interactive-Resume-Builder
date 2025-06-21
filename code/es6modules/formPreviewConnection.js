import {addContainer, addInput, addButton} from './form/formInputs.js';
import {createPreviewElement} from './preview/preview.js';
import {addEducationPreviewContainer} from './preview/educationPreview.js';
import {addEducationForm} from './form/education.js';


import {
  employerNamePositionPreviewContainer,
  jobLocationPreviewContainer,
  jobDatesPreviewContainer,
  employerDetailsPreviewContainer
} from './preview/experiencePreview.js';

export function createInputAndPreview(
  formContainer, previewContainer, 
  inputType, inputId, inputClassName, inputPlaceholder, 
  elementType, elementId, elementClassName ) {
  //Create a Employer Name Input 
  const formInput = addInput(inputType, inputId, inputClassName, inputPlaceholder);
  formContainer.appendChild(formInput);

  //Create a Employer Name Preview Element
  const inputPreview = createPreviewElement(elementType, elementId, elementClassName);
  previewContainer.appendChild(inputPreview);

  // ---> Listen for the input and add the value to the preview
  formInput.addEventListener("input", () => {
    inputPreview.textContent = formInput.value;
  })
};





//START DATE----------------
export function addStartDate(formCount, jobFormContainer, employerDatesPreviewContainer) {
  // Create Employer Start Date Input and adds it to the Job Form Container
  const startDateInput = addInput("month", `start-date-input-${formCount}`, "med", "Start Date" );
  jobFormContainer.appendChild(startDateInput);

  //Create a Start Date Preview Element and adds it to the Job Dates Preview Container
  const startDatePreviewElement = createPreviewElement("p", `start-date-preview-${formCount}`, "start-date-preview");
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
  const endDatePreviewElement =  createPreviewElement("p", `end-date-preview-${formCount}`, "end-date-preview");
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
  const jobDutyULPreviewElement = createPreviewElement("ul", `job-duty-list-preview-${formCount}`, "job-duty-list-preview");
  employerDetailsPreviewContainer.appendChild(jobDutyULPreviewElement);

  //Listen for Button
  jobDutyButton.addEventListener('click', () => {
    jobDutyCount++;//count of the number of list item added to each unordered list

    //Create and add job duty input to form container
    // const dutyInput = addjobDutyInput(formCount, jobDutyCount, jobFormContainer);

     const dutyInput = addInput("text", `duty-input-${jobDutyCount}-for-experience-${formCount}`, "duty-input", "Add Job Duty/Description");
    jobDutyInputsContainer.appendChild(dutyInput);

    //Create and add job duty list item to preview container
    const jobDutyLIPreviewElement = createPreviewElement("li", `job-duty-li-preview-${jobDutyCount}-for-experience-${formCount}`, "job-duty-li-preview");
    jobDutyULPreviewElement.append(jobDutyLIPreviewElement);

    // ---> Listen for the input and add the value to the preview
    dutyInput.addEventListener("input", () => {

      jobDutyLIPreviewElement.textContent = dutyInput.value
    })
  })
}


//WORK EXPERIENCE - 2----------------------------------------------------------------------------------------------------
let experienceFormCount = 0;
export function addNewExperienceSection(buttonName) {
  buttonName.addEventListener("click", () => {
    experienceFormCount++; //counts the number of forms and experience sections created


    //CONTAINERS-------------------------------------------------------------------------------------------
    //WORK EXPERIENCE FORM
    const jobFormContainer = addContainer(`experience-form-container-${experienceFormCount}`, 'experience-form-container' );

 
    //CREATE INPUTS AND ADD THEM TO CONTAINERS
    //Employer Name
    createInputAndPreview(
      jobFormContainer, employerNamePositionPreviewContainer(experienceFormCount),
      "text", `employer-name-input-${experienceFormCount}`, "med", "Employer/Company Name",
      "h2", `employer-name-preview-${experienceFormCount}`, "employer-name-preview"
    );

    //JOB POSITION
    createInputAndPreview(
      jobFormContainer, employerNamePositionPreviewContainer(experienceFormCount),
      "text", `position-input-${experienceFormCount}`, "med", "Position",
      "h2", `position-preview-${experienceFormCount}`, "position-preview"
    );

    addStartDate(experienceFormCount,jobFormContainer, jobDatesPreviewContainer(experienceFormCount));
    addEndDate(experienceFormCount,jobFormContainer, jobDatesPreviewContainer(experienceFormCount));

    //EMPLOYER CITY
    createInputAndPreview(
      jobFormContainer, jobLocationPreviewContainer(experienceFormCount),
      "text", `employer-city-input-${experienceFormCount}`, "med", "City",
      "p", `employer-city-preview-${experienceFormCount}`, "employer-city-preview"
    );


    //EMPLOYER STATE
    createInputAndPreview(
      jobFormContainer, jobLocationPreviewContainer(experienceFormCount),
      "text", `employer-state-input-${experienceFormCount}`, "med", "State",
      "p", `employer-state-preview-${experienceFormCount}`, "employer-state-preview"
    );

    addJobDuty(experienceFormCount, jobFormContainer, employerDetailsPreviewContainer(experienceFormCount));
    
  });
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
  const skillPreviewLIElement = createPreviewElement('li', `skills-list-item-${skillCount}`, "skills-list-item" );
  allSkillsPreviewList .appendChild(skillPreviewLIElement);
     // ---> Listen for the input and add the value to the preview
     skillInput.addEventListener('input', () => {
        skillPreviewLIElement.textContent = skillInput.value
     })

}

// Move into Experience----------------------------------------------------------------------------------------------------------------------------------------------------------------

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










