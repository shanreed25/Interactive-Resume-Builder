import { addExperienceFormContainer, } from "./experience/experienceInputs.js";
import {addSkillInputContainer} from './skills/skillsInputs.js';
import { 
  addExperiencePreviewContainer, 
  addEmployerNamePositionPreviewContainer, 
  addemployerDatesLocationPreviewContainer,
  addemployerDatesPreviewContainer,
  addemployerLocationPreviewContainer
 } from "./experience/experiencePreview.js";
//  import {addSkillPreviewULElement} from './skills/skillsPreview.js';
import {
  addStartDate,
  addEndDate,
  addPosition,
  addEmployerName,
  addEmployerCity,
  addEmployerState,
  addJobDuty
} from "./experience/experience.js";


import {addSkill} from './skills/skills.js';

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
    const jobFormContainer = addExperienceFormContainer(experienceFormCount)

    //WORK EXPERIENCE PREVIEW
    const workExperienceMainPreviewContainer = addExperiencePreviewContainer(experienceFormCount); 

    //EMPLOYER NAME AND POSITION
    const employerNamePositionPreviewContainer = addEmployerNamePositionPreviewContainer(experienceFormCount)
    workExperienceMainPreviewContainer.appendChild(employerNamePositionPreviewContainer);

    //JOB DATES AND LOCATION
    const employerDatesLocationPreviewContainer = addemployerDatesLocationPreviewContainer(experienceFormCount);
    workExperienceMainPreviewContainer.appendChild(employerDatesLocationPreviewContainer);

    //JOB DATES
    const employerDatesPreviewContainer = addemployerDatesPreviewContainer(experienceFormCount)
    employerDatesLocationPreviewContainer.appendChild(employerDatesPreviewContainer);

    //JOB LOCATION
    const employerLocationPreviewContainer = addemployerLocationPreviewContainer(experienceFormCount)
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

    //CONTAINER FOR EACH SKILL INPUT-------------------------------------------------------------------------------------------
    //SKILL INPUT
    const skillInputContainer = addSkillInputContainer(skillInputCount);


    addSkill(skillInputCount, skillInputContainer)
    // console.log(skillPreviewLIElement);
  })
}
