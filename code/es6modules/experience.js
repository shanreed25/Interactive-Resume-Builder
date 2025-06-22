import {addContainer, addInput, addButton} from './form/formInputs.js';
import {addPreviewContainer, createPreviewElement} from './preview/previewElements.js';
import {createInputAndPreview, createDateInputAndReview} from './inputPreviewConnection.js'
import {

  jobLocationPreviewContainer,
  jobDatesPreviewContainer,
  employerDetailsPreviewContainer
} from './preview/experiencePreview.js';


//Job Duty--------------------
export function addJobDuty(formCount, jobFormContainer, employerDetailsPreviewContainer) {
  let jobDutyCount = 0;
  
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
    //All Experience Forms Container
    const experienceFormsContainer = document.getElementById('all-experience-forms-container');//Container for all experience forms
  
    //WORK EXPERIENCE FORM Container
    const jobFormContainer = addContainer(`experience-form-container-${experienceFormCount}`, 'experience-form-container' );
    experienceFormsContainer.appendChild(jobFormContainer);

    const allExperiencePreviewsContainer = document.getElementById('all-experience-preview-container');
    const experiencePreviewContainer = addPreviewContainer('div',`experience-preview-container-${experienceFormCount}`, 'experience-preview-container', allExperiencePreviewsContainer)
    const employerNamePositionPreviewContainer = addPreviewContainer('div', `employer-name-position-preview-container-${experienceFormCount}`, 'employer-name-position-preview-container', experiencePreviewContainer)

 
    //CREATE INPUTS AND ADD THEM TO CONTAINERS
    //Employer Name
    createInputAndPreview(
      jobFormContainer, employerNamePositionPreviewContainer,
      "text", `employer-name-input-${experienceFormCount}`, "med", "Employer/Company Name",
      "h2", `employer-name-preview-${experienceFormCount}`, "employer-name-preview"
    );

    //JOB POSITION
    createInputAndPreview(
      jobFormContainer, employerNamePositionPreviewContainer,
      "text", `position-input-${experienceFormCount}`, "med", "Position",
      "h2", `position-preview-${experienceFormCount}`, "position-preview"
    );

    // //JOB START DATE
    // createDateInputAndReview(jobFormContainer, jobDatesPreviewContainer(experienceFormCount), 
    // "month", `start-date-input-${experienceFormCount}`, "med", "Start Date", 
    // "p", `start-date-preview-${experienceFormCount}`, "start-date-preview");

    // //JOB END DATE
    // createDateInputAndReview(jobFormContainer, jobDatesPreviewContainer(experienceFormCount), 
    // "month", `end-date-input-${experienceFormCount}`, "med", "End Date" , 
    // "p", `end-date-preview-${experienceFormCount}`, "end-date-preview");


    // //EMPLOYER CITY
    // createInputAndPreview(
    //   jobFormContainer, jobLocationPreviewContainer(experienceFormCount),
    //   "text", `employer-city-input-${experienceFormCount}`, "med", "City",
    //   "p", `employer-city-preview-${experienceFormCount}`, "employer-city-preview"
    // );


    // //EMPLOYER STATE
    // createInputAndPreview(
    //   jobFormContainer, jobLocationPreviewContainer(experienceFormCount),
    //   "text", `employer-state-input-${experienceFormCount}`, "med", "State",
    //   "p", `employer-state-preview-${experienceFormCount}`, "employer-state-preview"
    // );

    // addJobDuty(experienceFormCount, jobFormContainer, employerDetailsPreviewContainer(experienceFormCount));
    
  });
}

