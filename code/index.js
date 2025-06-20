import { updateSummarySection } from "./es6modules/summary.js";
import { generatePDF } from "./es6modules/generatepdf.js";
import {updateContactSection, addNewExperienceSection, addNewSkillInput, addNewEducationForm} from './es6modules/resume-sections.js';

//*********START: REVISE CODE THIS LATER************/
//because the generatePDF() function is attached to the onclick attribute of the button
// it is assigned to the window object to make it globally accessible
window.generatePDF = generatePDF;
//*********END: REVISE CODE THIS LATER************/


//Contact SECTION--------------------------------------------------------------------------------------------------------
document.querySelectorAll(".contact-item").forEach((input) => {
  input.addEventListener("input", updateContactSection);
});

//----- invokes the function immediately so the text  in the HTML does not appear
//updateContactSection(); // initialize preview
//-----------------------------------------------------------------------------------------------------------------------


//SUMMARY SECTION--------------------------------------------------------------------------------------------------------
const summary = document.getElementById('summary');
summary.addEventListener('input', () =>{
  updateSummarySection();
})




//EXPERIENCE SECTION-----------------------------------------------------------------------------------------------------

const newExperienceButton = document.getElementById("new-job-experience");
addNewExperienceSection(newExperienceButton);

//SKILLS SECTION-----------------------------------------------------------------------------------------------------

const newSkillButton = document.getElementById("new-skill");
addNewSkillInput(newSkillButton);

//SKILLS SECTION-----------------------------------------------------------------------------------------------------

const newEducationButton = document.getElementById("new-education");
addNewEducationForm(newEducationButton);
//-----------------------------------------------------------------------------------------------------------------------
