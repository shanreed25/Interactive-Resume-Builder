//Passed down to experience.js

const experienceFormsContainer = document.getElementById('all-experience-forms-container');//Container for all experience forms


//Adds Containers----------------------------------------------------------------
export function addContainer(formContainerID, formContainerClass){
  const formContainer = document.createElement("div");
  formContainer.id = formContainerID;
  formContainer.className = formContainerClass;
  experienceFormsContainer.appendChild(formContainer);

  console.log(formContainer)
  return formContainer;
}



//FORM----------------------------------------------------------------------------------------------------------------

//Add Inputs
export function addInput(inputType, inputID, inputClassName, inputPlaceholder){
    const inputName = document.createElement("input");
    inputName.type = inputType;
    inputName.id = inputID
    inputName.className = inputClassName;
    inputName.placeholder = inputPlaceholder;
    return inputName;
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
