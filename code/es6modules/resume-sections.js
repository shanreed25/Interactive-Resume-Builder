import {addContainer} from "./experience/experienceInputs.js";
import { addPreviewContainer, addExperiencePreviewContainer, } from "./experience/experiencePreview.js";

import {
  addStartDate,
  addEndDate,
  addPosition,
  addEmployerName,
  addEmployerCity,
  addEmployerState,
  addJobDuty
} from "./experience/experience.js";


import addSkill from './skills/skills.js';
import addEducation from './education/education.js';

//CONTACT----------------------------------------------------------------------------------------------------

//SUMMARY----------------------------------------------------------------------------------------------------

//WORK EXPERIENCE----------------------------------------------------------------------------------------------------
let experienceFormCount = 0;

//Adds a new experience form and review section and appends it to the main container everytime the button is clicked
export function addNewExperienceSection(buttonName) {
  buttonName.addEventListener("click", () => {
    experienceFormCount++; //counts the number of forms and experience sections created


    //CONTAINERS-------------------------------------------------------------------------------------------
    //WORK EXPERIENCE FORM
    const jobFormContainer = addContainer(`experience-form-container-${experienceFormCount}`, 'experience-form-container' );

    //WORK EXPERIENCE PREVIEW
    const workExperienceMainPreviewContainer = addExperiencePreviewContainer(experienceFormCount); 

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
    addEmployerName(experienceFormCount, jobFormContainer, employerNamePositionPreviewContainer);
    addPosition(experienceFormCount, jobFormContainer, employerNamePositionPreviewContainer);
    addStartDate(experienceFormCount,jobFormContainer, employerDatesPreviewContainer);
    addEndDate(experienceFormCount,jobFormContainer,employerDatesPreviewContainer);
    addEmployerCity(experienceFormCount, jobFormContainer, employerLocationPreviewContainer);
    addEmployerState(experienceFormCount,jobFormContainer, employerLocationPreviewContainer);
    addJobDuty(experienceFormCount, jobFormContainer, employerDetailsPreviewContainer);
    
  });
}



//SKILLS----------------------------------------------------------------------------------------------------
let skillInputCount = 0;
export function addNewSkillInput(buttonName){
  buttonName.addEventListener('click', () => {
    skillInputCount++

    //SKILL INPUT AND REVIEW ELEMENT-------------------------------------------------------------------------------------------
    addSkill(skillInputCount)
  })
}


//Education----------------------------------------------------------------------------------------------------
let educationFormCount = 0;
export function addNewEducationForm(buttonName){
  buttonName.addEventListener('click', () => {
    educationFormCount++

//EDUCATION INPUT AND REVIEW ELEMENT-------------------------------------------------------------------------------------------    
    addEducation(educationFormCount);
    // const educationFormContainer = addNewEducationFormSection(educationFormCount);
    // const educationPreviewContainer = addEducationPreviewSection(educationFormCount);
    //  console.log(educationPreviewContainer);
  })
}