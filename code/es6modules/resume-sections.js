import {addContainer} from "./form/formInputs.js";
import { addPreviewContainer} from "./preview/preview.js";
import { 
  addInputAndPreview,  
  addStartDate,
  addEndDate,
  addSkill, 
  addJobDuty,
  addEducation
} from './formPreviewConnection.js'



//Everytime a button is clicked these functions run
//CONTACT----------------------------------------------------------------------------------------------------
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
//SUMMARY----------------------------------------------------------------------------------------------------

//WORK EXPERIENCE----------------------------------------------------------------------------------------------------
let experienceFormCount = 0;
export function addNewExperienceSection(buttonName) {
  buttonName.addEventListener("click", () => {
    experienceFormCount++; //counts the number of forms and experience sections created


    //CONTAINERS-------------------------------------------------------------------------------------------
    //WORK EXPERIENCE FORM
    const jobFormContainer = addContainer(`experience-form-container-${experienceFormCount}`, 'experience-form-container' );

    //WORK EXPERIENCE PREVIEW
    const allExperiencePreviewsContainer = document.getElementById("all-experience-preview-container");//Container for all experience review
    //Main container for each work experience preview
    const workExperienceMainPreviewContainer = addPreviewContainer('div', `work-experience-main-preview-container-${experienceFormCount}`, 'work-experience-main-preview-container'); 
    allExperiencePreviewsContainer.appendChild(workExperienceMainPreviewContainer)
    //EMPLOYER NAME AND POSITION
    const employerNamePositionPreviewContainer = addPreviewContainer('div',`employer-name-position-preview-container-${experienceFormCount}`, 'employer-name-position-preview-container')
    workExperienceMainPreviewContainer.appendChild(employerNamePositionPreviewContainer);

    //JOB DATES AND LOCATION
    const employerDatesLocationPreviewContainer = addPreviewContainer('div',`employer-dates-location-preview-container-${experienceFormCount}`, 'employer-dates-location-preview-container')
    workExperienceMainPreviewContainer.appendChild(employerDatesLocationPreviewContainer);

    //JOB DATES
    const employerDatesPreviewContainer = addPreviewContainer('div',`employer-dates-preview-container-${experienceFormCount}`, 'employer-dates-preview-container')
    employerDatesLocationPreviewContainer.appendChild(employerDatesPreviewContainer);

    //JOB LOCATION
    const employerLocationPreviewContainer = addPreviewContainer('div',`employer-location-preview-container-${experienceFormCount}`, 'employer-location-preview-container')
    employerDatesLocationPreviewContainer.appendChild(employerLocationPreviewContainer);

    //Second container hold experience preview details----------------------------------------
    const employerDetailsPreviewContainer = document.createElement("div");
    employerDetailsPreviewContainer.id = `employer-details-preview-container-${experienceFormCount}`;
    workExperienceMainPreviewContainer.appendChild(employerDetailsPreviewContainer);

    //CREATE INPUTS AND ADD THEM TO CONTAINERS
    //Employer Name
    addInputAndPreview(
      jobFormContainer, employerNamePositionPreviewContainer,
      "text", `employer-name-input-${experienceFormCount}`, "med", "Employer/Company Name",
      "h2", `employer-name-preview-${experienceFormCount}`, "employer-name-preview"
    );

    //JOB POSITION
    addInputAndPreview(
      jobFormContainer, employerNamePositionPreviewContainer,
      "text", `position-input-${experienceFormCount}`, "med", "Position",
      "h2", `position-preview-${experienceFormCount}`, "position-preview"
    );

    addStartDate(experienceFormCount,jobFormContainer, employerDatesPreviewContainer);
    addEndDate(experienceFormCount,jobFormContainer,employerDatesPreviewContainer);

    //EMPLOYER CITY
    addInputAndPreview(
      jobFormContainer, employerLocationPreviewContainer,
      "text", `employer-city-input-${experienceFormCount}`, "med", "City",
      "p", `employer-city-preview-${experienceFormCount}`, "employer-city-preview"
    );


    //EMPLOYER STATE
    addInputAndPreview(
      jobFormContainer, employerLocationPreviewContainer,
      "text", `employer-state-input-${experienceFormCount}`, "med", "State",
      "p", `employer-state-preview-${experienceFormCount}`, "employer-state-preview"
    );

    addJobDuty(experienceFormCount, jobFormContainer, employerDetailsPreviewContainer);
    
  });
}

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