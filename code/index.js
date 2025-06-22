import { updateSummarySection } from "./es6modules/summary.js";
import { generatePDF } from "./es6modules/generatepdf.js";
import {updateContactSection} from './es6modules/resume-sections.js';

//----- invokes the function immediately so the text  in the HTML does not appear
//updateContactSection(); // initialize preview
//-----------------------------------------------------------------------------------------------------------------------



import {addNewExperienceSection} from './es6modules/experience.js';
import {addNewSkillInput} from './es6modules/skills.js';
import {addNewEducationSection} from './es6modules/education.js'
//*********START: REVISE CODE THIS LATER************/
//because the generatePDF() function is attached to the onclick attribute of the button
// it is assigned to the window object to make it globally accessible
window.generatePDF = generatePDF;
//*********END: REVISE CODE THIS LATER************/


//Contact SECTION - 1--------------------------------------------------------------------------------------------------------
document.querySelectorAll(".contact-item").forEach((input) => {
  input.addEventListener("input", updateContactSection);
});


//SUMMARY SECTION - 1--------------------------------------------------------------------------------------------------------
const summary = document.getElementById('summary');
summary.addEventListener('input', () =>{
  updateSummarySection();
})

//EXPERIENCE SECTION - 1-----------------------------------------------------------------------------------------------------
const newExperienceButton = document.getElementById("new-job-experience");
addNewExperienceSection(newExperienceButton);

//SKILLS SECTION - 1-----------------------------------------------------------------------------------------------------
const newSkillButton = document.getElementById("new-skill");
addNewSkillInput(newSkillButton);

//EDUCATION SECTION - 1-----------------------------------------------------------------------------------------------------
const newEducationButton = document.getElementById("new-education");
addNewEducationSection(newEducationButton);
//-----------------------------------------------------------------------------------------------------------------------
