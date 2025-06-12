


//Inputs passed down to experience.js



const experienceFormsContainer = document.getElementById("all-experience-container");//Container for all experience forms

//Container For Each Experience Form------------------------------------------------------------------------------------------
export function addExperienceFormContainer(experienceFormCount){
   const jobFormContainer = document.createElement("div");
    jobFormContainer.id = `job-form-container-${experienceFormCount}`;
    experienceFormsContainer.appendChild(jobFormContainer);

    return jobFormContainer;


}
//FORM----------------------------------------------------------------------------------------------------------------
    
   


//START DATE INPUT---------------------------------------------------------------------------------
export function addStartDateInput(startDateInputCount) {
  const startDateInput = document.createElement("input");
  startDateInput.type = "month";
  startDateInput.id = `start-date-input-${startDateInputCount}`;
  startDateInput.className = "med";
  startDateInput.placeholder = "Start Date";

  return startDateInput;
}

//END DATE INPUT---------------------------------------------------------------------------------
export function addEndDateInput(endDateInputCount) {
  const endDateInput = document.createElement("input");
  endDateInput.type = "month";
  endDateInput.id = `end-date-input-${endDateInputCount}`;
  endDateInput.className = "med";
  endDateInput.placeholder = "End Date";

  return endDateInput;
}

//EMPLOYER NAME INPUT---------------------------------------------------------------------------------
export function addEmployerNameInput(employerNameInputCount) {
  const employerNameInput = document.createElement("input");
  employerNameInput.type = "text";
  employerNameInput.id = `employer-name-input-${employerNameInputCount}`;
  employerNameInput.className = "med";
  employerNameInput.placeholder = "Employer/Company Name";

  return employerNameInput;
}

//POSITION INPUT-------------------------------------------------------------------------------------
export function addPositionInput(positionInputCount) {
  const positionInput = document.createElement("input");
  positionInput.type = "text";
  positionInput.id = `position-input-${positionInputCount}`;
  positionInput.className = "med";
  positionInput.placeholder = "Position";

  return positionInput;
}

//EMPLOYER CITY INPUT---------------------------------------------------------------------------------
export function addEmployerCityInput(cityInputCount) {
  const employerCityInput = document.createElement("input");
  employerCityInput.type = "text";
  employerCityInput.id = `employer-city-input-${cityInputCount}`;
  employerCityInput.className = "med";
  employerCityInput.placeholder = "City";

  return employerCityInput;
}

//EMPLOYER STATE INPUT---------------------------------------------------------------------------------
export function addEmployerStateInput(stateInputCount) {
  const employerStateInput = document.createElement("input");
  employerStateInput.type = "text";
  employerStateInput.id = `employer-state-input-${stateInputCount}`;
  employerStateInput.className = "med";
  employerStateInput.placeholder = "State";

  return employerStateInput;
}

let jobDutyCount = 0;
//JOB DUTIES--------------------------------------------------------------------------------------------
export function addJobDutyButton(jobformCount, jobFormContainer ){
    // const dutyInput = document.createElement('input');
    // dutyInput.id = `duty-input-${jobDutyCount}`

    const jobDutyButton = document.createElement('button');
    jobDutyButton.id = `job-duties-${jobDutyCount}`;
    jobDutyButton.type = 'button';
    jobDutyButton.textContent = 'Add Job Description'
  
    

    return jobDutyButton;
  
}


export function addjobDutyInput(formCount, jobDutyCount, jobFormContainer){
     const dutyInput = document.createElement('input');
     dutyInput.id = `duty-input-${jobDutyCount}-for-experience-${formCount}`
     jobFormContainer.appendChild(dutyInput);

     return dutyInput;
};