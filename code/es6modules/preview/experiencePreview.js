import {addPreviewContainer} from './preview.js';


//Function to create Preview Containers and elements

//CONTAINERS-----------------------------------------------------
//Preview Container for all work experience
const allExperiencePreviewsContainer = document.getElementById("all-experience-preview-container");//Container for all experience review

//Preview Container for each work experience
export function experiencePreviewContainer(experienceFormCount){
    //Main container for each work experience preview
    const experiencePreviewContainer = addPreviewContainer(
        'div', `work-experience-main-preview-container-${experienceFormCount}`, 
        'work-experience-main-preview-container', 
        allExperiencePreviewsContainer
    )
    
    return experiencePreviewContainer;
}

//Preview Container for employer name and position
export function employerNamePositionPreviewContainer(experienceFormCount){
    //EMPLOYER NAME AND POSITION CONTAINER
    const employerNamePositionPreviewContainer = addPreviewContainer(
        'div', `employer-name-position-preview-container-${experienceFormCount}`, 
        'employer-name-position-preview-container', 
        experiencePreviewContainer(experienceFormCount));
    
    return employerNamePositionPreviewContainer;
};


//Preview Container for job dates and location
export function jobDatesAndLocationPreviewContainer(experienceFormCount){
    //JOB DATES AND LOCATION CONTAINER
    const employerDatesLocationPreviewContainer = addPreviewContainer(
        'div',`employer-dates-location-preview-container-${experienceFormCount}`, 
        'employer-dates-location-preview-container', 
        experiencePreviewContainer(experienceFormCount));
  
    return employerDatesLocationPreviewContainer;
};

//Preview Container for job dates
export function jobDatesPreviewContainer(experienceFormCount){
    //JOB DATES CONTAINER
    const employerDatesPreviewContainer = addPreviewContainer(
        'div',`employer-dates-preview-container-${experienceFormCount}`, 
        'employer-dates-preview-container', 
        jobDatesAndLocationPreviewContainer(experienceFormCount))

    return employerDatesPreviewContainer;
};

//Preview Container for job location
export function jobLocationPreviewContainer(experienceFormCount){
    //JOB LOCATION CONTAINER
    const employerLocationPreviewContainer = addPreviewContainer(
        'div',`employer-location-preview-container-${experienceFormCount}`, 
        'employer-location-preview-container', 
        jobDatesAndLocationPreviewContainer(experienceFormCount))

    return employerLocationPreviewContainer;
};


export function  employerDetailsPreviewContainer(experienceFormCount){
      //Second container hold experience preview details----------------------------------------
    const employerDetailsPreviewContainer = addPreviewContainer(
        'div', `employer-details-preview-container-${experienceFormCount}`, 
        'employer-details-preview',
        experiencePreviewContainer(experienceFormCount)
    )
   
    return employerDetailsPreviewContainer;
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