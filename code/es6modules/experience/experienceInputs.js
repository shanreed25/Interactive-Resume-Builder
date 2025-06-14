//Inputs passed down to experience.js

const experienceFormsContainer = document.getElementById('all-experience-forms-container');//Container for all experience forms

//Container For Each Experience Form------------------------------------------------------------------------------------------
export function addExperienceFormContainer(experienceFormCount){
   const jobFormContainer = document.createElement("div");
    jobFormContainer.id = `experience-form-container-${experienceFormCount}`;
    jobFormContainer.className = 'experience-form-container';
    experienceFormsContainer.appendChild(jobFormContainer);

    return jobFormContainer;


}
//FORM----------------------------------------------------------------------------------------------------------------

//START DATE INPUT
export function addStartDateInput(startDateInputCount) {
  const startDateInput = document.createElement("input");
  startDateInput.type = "month";
  startDateInput.id = `start-date-input-${startDateInputCount}`;
  startDateInput.className = "med";
  startDateInput.placeholder = "Start Date";

  return startDateInput;
}

//END DATE INPUT
export function addEndDateInput(endDateInputCount) {
  const endDateInput = document.createElement("input");
  endDateInput.type = "month";
  endDateInput.id = `end-date-input-${endDateInputCount}`;
  endDateInput.className = "med";
  endDateInput.placeholder = "End Date";

  return endDateInput;
}

//EMPLOYER NAME INPUT
export function addEmployerNameInput(employerNameInputCount) {
  const employerNameInput = document.createElement("input");
  employerNameInput.type = "text";
  employerNameInput.id = `employer-name-input-${employerNameInputCount}`;
  employerNameInput.className = "med";
  employerNameInput.placeholder = "Employer/Company Name";

  return employerNameInput;
}

//POSITION INPUT
export function addPositionInput(positionInputCount) {
  const positionInput = document.createElement("input");
  positionInput.type = "text";
  positionInput.id = `position-input-${positionInputCount}`;
  positionInput.className = "med";
  positionInput.placeholder = "Position";

  return positionInput;
}

//EMPLOYER CITY INPUT
export function addEmployerCityInput(cityInputCount) {
  const employerCityInput = document.createElement("input");
  employerCityInput.type = "text";
  employerCityInput.id = `employer-city-input-${cityInputCount}`;
  employerCityInput.className = "med";
  employerCityInput.placeholder = "City";

  return employerCityInput;
}

//EMPLOYER STATE INPUT
export function addEmployerStateInput(stateInputCount) {
  const employerStateInput = document.createElement("input");
  employerStateInput.type = "text";
  employerStateInput.id = `employer-state-input-${stateInputCount}`;
  employerStateInput.className = "med";
  employerStateInput.placeholder = "State";

  return employerStateInput;
}

//ADD JOB DUTY INPUT CONTAINER
export function addJobDutyInputsContainer(containerCount){
      const jobDutyInputsContainer = document.createElement('div');
      jobDutyInputsContainer.id = `job-duties-input-container-${containerCount}`;
      jobDutyInputsContainer.className = 'job-duties-input-container'; 

      return jobDutyInputsContainer
}

//ADD JOB DUTY BUTTON
export function addJobDutyButton(jobformCount){
    const jobDutyButton = document.createElement('button');
    jobDutyButton.id = `add-job-duty-button-${jobformCount}`;
    jobDutyButton.className = 'add-job-duty-button';
    jobDutyButton.type = 'button';
    jobDutyButton.textContent = 'Add Job Description'
  
    return jobDutyButton;
}


//JOB DUTY INPUT
export function addjobDutyInput(formCount, jobDutyCount){
    const dutyInput = document.createElement('input');
    dutyInput.id = `duty-input-${jobDutyCount}-for-experience-${formCount}`;
    

    return dutyInput;
};