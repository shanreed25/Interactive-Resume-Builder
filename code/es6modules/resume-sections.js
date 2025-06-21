import {addContainer} from "./form/formInputs.js";
import { 
  addSkill, 
  addEducation
} from './formPreviewConnection.js'



//Everytime a button is clicked these functions run
//CONTACT - 2 ----------------------------------------------------------------------------------------------------
export function updateContactSection() {
    //setting the preview value to the value entered into the form----------------------------------------------------------
  document.getElementById("preview-first-name").innerText =
    document.getElementById("first-name").value;
  document.getElementById("preview-last-name").innerText =
    document.getElementById("last-name").value;                                 
  document.getElementById("preview-email").innerText =
    document.getElementById("email").value;
  document.getElementById("preview-phone-number").innerText =
    document.getElementById("phone-number").value;
  document.getElementById("preview-city").innerText =
    document.getElementById("city").value;
  document.getElementById("preview-state").innerText =
    document.getElementById("state").value;

}
//SUMMARY - 2----------------------------------------------------------------------------------------------------

//WORK EXPERIENCE - 2----------------------------------------------------------------------------------------------------
// let experienceFormCount = 0;
// export function addNewExperienceSection(buttonName) {
//   buttonName.addEventListener("click", () => {
//     experienceFormCount++; //counts the number of forms and experience sections created


//     //CONTAINERS-------------------------------------------------------------------------------------------
//     //WORK EXPERIENCE FORM
//     const jobFormContainer = addContainer(`experience-form-container-${experienceFormCount}`, 'experience-form-container' );

 
//     //CREATE INPUTS AND ADD THEM TO CONTAINERS
//     //Employer Name
//     createInputAndPreview(
//       jobFormContainer, employerNamePositionPreviewContainer,
//       "text", `employer-name-input-${experienceFormCount}`, "med", "Employer/Company Name",
//       "h2", `employer-name-preview-${experienceFormCount}`, "employer-name-preview"
//     );

//     //JOB POSITION
//     createInputAndPreview(
//       jobFormContainer, employerNamePositionPreviewContainer,
//       "text", `position-input-${experienceFormCount}`, "med", "Position",
//       "h2", `position-preview-${experienceFormCount}`, "position-preview"
//     );

//     addStartDate(experienceFormCount,jobFormContainer, employerDatesPreviewContainer);
//     addEndDate(experienceFormCount,jobFormContainer,employerDatesPreviewContainer);

//     //EMPLOYER CITY
//     createInputAndPreview(
//       jobFormContainer, employerLocationPreviewContainer,
//       "text", `employer-city-input-${experienceFormCount}`, "med", "City",
//       "p", `employer-city-preview-${experienceFormCount}`, "employer-city-preview"
//     );


//     //EMPLOYER STATE
//     createInputAndPreview(
//       jobFormContainer, employerLocationPreviewContainer,
//       "text", `employer-state-input-${experienceFormCount}`, "med", "State",
//       "p", `employer-state-preview-${experienceFormCount}`, "employer-state-preview"
//     );

//     addJobDuty(experienceFormCount, jobFormContainer, employerDetailsPreviewContainer);
    
//   });
// }

//SKILLS - 2----------------------------------------------------------------------------------------------------
let skillInputCount = 0;
export function addNewSkillInput(buttonName){
  buttonName.addEventListener('click', () => {
    skillInputCount++

    //SKILL INPUT AND REVIEW ELEMENT-------------------------------------------------------------------------------------------
    addSkill(skillInputCount)
  })
}

//EDUCATION - 2----------------------------------------------------------------------------------------------------
let educationFormCount = 0;
export function addNewEducationSection(buttonName){
  buttonName.addEventListener('click', () => {
    educationFormCount++

//EDUCATION INPUT AND REVIEW ELEMENT-------------------------------------------------------------------------------------------    
    addEducation(educationFormCount);
  })
}