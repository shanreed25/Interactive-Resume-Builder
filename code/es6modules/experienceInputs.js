let employerNameValue = "";


//EMPLOYER NAME---------------------------------------------------------------------------------
export function addEmployerNameInput(employerNameInputCount){
  const employerNameInput = document.createElement("input");
  employerNameInput.type = "text";
  employerNameInput.id = `employer-name-${employerNameInputCount}`;
  employerNameInput.className = "med";
  employerNameInput.placeholder = "Employer/Company Name";
  // workExperienceFormContainer.append(employerName);
  //   employerName.addEventListener("input", () => {
  //   employerNameValue = employerName.value
   
  // })
  return employerNameInput;
}
// console.log(employerNameValue);


//JOB TITLE-------------------------------------------------------------------------------------
export function addPositionInput(experienceFormCount, workExperienceFormContainer){
  const position = document.createElement("input");
  position.type = "text";
  position.id = `position-${experienceFormCount}`;
  position.className = "med";
  position.placeholder = "Position";

  workExperienceFormContainer.append(position);

}


// export const employerNameInput = addEmployerNameInput();