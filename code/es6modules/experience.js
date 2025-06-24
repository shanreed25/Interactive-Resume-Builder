import {createAppendContainer} from './functions/createAppendContainer.js';
import {createAppendInput} from './functions/createAppendInput.js';
import {addButton} from './functions/addButton.js';
import {createInputAndPreview, createDashedInputAndPreview, createDateInputAndReview, createEndDateInputAndReview} from './functions/inputPreviewConnection.js';
import {experienceFormsContainer, allExperiencePreviewsContainer} from './functions/getElement.js'
import { createAppendPreviewElement } from './functions/createAppendPreviewElement.js'

//Job Duty--------------------
export function addJobDuty(formCount, jobFormContainer, employerDetailsPreviewContainer) {
  let jobDutyCount = 0;
  
  //Create and add container for job duty inputs to form
  const jobDutyInputsContainer = createAppendContainer(`job-duties-input-container-${formCount}`, 'job-duties-input-container', jobFormContainer);

  //Create and add Job Duty Button to form
  const jobDutyButton = addButton('button', `add-job-duty-button-${formCount}`, "add-job-duty-button", "Add Job Description", jobFormContainer );

  //Create and add Unordered List to the preview
  const jobDutyULPreviewElement = createAppendPreviewElement("ul", `job-duty-list-preview-${formCount}`, "job-duty-list-preview", employerDetailsPreviewContainer);

  //Listen for Button
  jobDutyButton.addEventListener('click', () => {
    jobDutyCount++;//count of the number of list item added to each unordered list

     const dutyInput = createAppendInput("text", `duty-input-${jobDutyCount}-for-experience-${formCount}`, "large", "Add Job Duty/Description", jobDutyInputsContainer);
    // jobDutyInputsContainer.appendChild(dutyInput);

    //Create and add job duty list item to preview container
    const jobDutyLIPreviewElement = createAppendPreviewElement("li", `job-duty-li-preview-${jobDutyCount}-for-experience-${formCount}`, "li-preview", jobDutyULPreviewElement);

    // ---> Listen for the input and add the value to the preview
    dutyInput.addEventListener("input", () => {

      jobDutyLIPreviewElement.textContent = dutyInput.value
    })
  })
};



//WORK EXPERIENCE - 2----------------------------------------------------------------------------------------------------
let experienceFormCount = 0;
export function addNewExperienceSection(buttonName) {
  buttonName.addEventListener("click", () => {
    experienceFormCount++; //counts the number of forms and experience sections created
  
    //Experience Form
    const jobFormContainer = createAppendContainer(`experience-form-container-${experienceFormCount}`, 'experience-form-container', experienceFormsContainer );

    //Experience Preview Container
    const experiencePreviewContainer = createAppendContainer(`experience-preview-container-${experienceFormCount}`, 'experience-preview-container', allExperiencePreviewsContainer);
    
//----------------------------------------------------------------------------------------------------------------------
    //Employer Name and Position Preview Container
    const employerNamePositionPreviewContainer = createAppendContainer( `employer-name-position-preview-container-${experienceFormCount}`, 'preview-info-1-container', experiencePreviewContainer);

    //EMPLOYER NAME
    createInputAndPreview(
      jobFormContainer, employerNamePositionPreviewContainer,
      "text", `employer-name-input-${experienceFormCount}`, "med gap-input", "Employer/Company Name",
      "h3", `employer-name-preview-${experienceFormCount}`, " preview-info-1"
    );
    
    //JOB POSITION
    createDashedInputAndPreview(
      jobFormContainer, employerNamePositionPreviewContainer,
      "text", `position-input-${experienceFormCount}`, "med", "Position",
      "h3", `position-preview-${experienceFormCount}`, "preview-info-2"
    );
//----------------------------------------------------------------------------------------------------------------------
    //Employer Dates And Location Preview Container
    const employerDatesLocationPreviewContainer = createAppendContainer(`employer-dates-location-preview-container-${experienceFormCount}`, 'dates-location-preview-container', experiencePreviewContainer);
    
    //Employer Dates Preview Container
    const employerDatesPreviewContainer = createAppendContainer(`employer-dates-preview-container-${experienceFormCount}`, 'dates-preview-container', employerDatesLocationPreviewContainer)
 
    //JOB START DATE
    createDateInputAndReview(jobFormContainer, employerDatesPreviewContainer, 
    "month", `start-date-input-${experienceFormCount}`, "med gap-input", "Start Date", 
    "p", `start-date-preview-${experienceFormCount}`, "start-date-preview");

    //JOB END DATE
    createEndDateInputAndReview(jobFormContainer, employerDatesPreviewContainer, 
    "month", `end-date-input-${experienceFormCount}`, "med", "End Date" , 
    "p", `end-date-preview-${experienceFormCount}`, "end-date-preview");

    //Employer Location Preview Container
    const employerLocationPreviewContainer = createAppendContainer(`employer-location-preview-container-${experienceFormCount}`, 'employer-location-preview-container', employerDatesLocationPreviewContainer);

    //EMPLOYER Location
    createInputAndPreview(
      jobFormContainer, employerLocationPreviewContainer,
      "text", `employer-location-input-${experienceFormCount}`, "large", "Location",
      "p", `employer-location-preview-${experienceFormCount}`, "employer-location-preview"
    );

    addJobDuty(experienceFormCount, jobFormContainer, experiencePreviewContainer);
    
  });
};

