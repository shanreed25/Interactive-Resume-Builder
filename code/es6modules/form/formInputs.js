const experienceFormsContainer = document.getElementById('all-experience-forms-container');//Container for all experience forms

//Passed down to formPreviewConnection.js
//Adds Containers----------------------------------------------------------------
export function addContainer(formContainerId, formContainerClass){
  const formContainer = document.createElement("div");
  formContainer.id = formContainerId;
  formContainer.className = formContainerClass;
  experienceFormsContainer.appendChild(formContainer);

  console.log(formContainer)
  return formContainer;
}

//Passed down to formPreviewConnection.js
//ADD FORM INPUTS
export function addInput(inputType, inputId, inputClassName, inputPlaceholder){
    const inputName = document.createElement("input");
    inputName.type = inputType;
    inputName.id = inputId
    inputName.className = inputClassName;
    inputName.placeholder = inputPlaceholder;
    return inputName;
}

const allSkillsInputContainer = document.getElementById('all-skills-inputs-container');

//Passed down to formPreviewConnection.js
// ADD SKILL INPUT AND CONTAINER
export function addSkillInputContainer(skillInputCount){
    //Container
        const skillInputContainer = document.createElement('div');
        skillInputContainer.id = `skill-input-${skillInputCount}-container`;
        skillInputContainer.className = `skill-input-container`;
        allSkillsInputContainer.appendChild(skillInputContainer);
        
    //Input
        const skillInput = document.createElement('input');
        skillInput.id = `skill-input-${skillInputCount}`;
        skillInput.className = 'skill-input';
        skillInputContainer.appendChild(skillInput);

    return skillInputContainer;

}

//Passed down to formPreviewConnection.js
//ADD FORM BUTTON
export function addJobDutyButton(jobformCount){
    const jobDutyButton = document.createElement('button');
    jobDutyButton.id = `add-job-duty-button-${jobformCount}`;
    jobDutyButton.className = 'add-job-duty-button';
    jobDutyButton.type = 'button';
    jobDutyButton.textContent = 'Add Job Description'
  
    return jobDutyButton;
}