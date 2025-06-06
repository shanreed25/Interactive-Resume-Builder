import { updateContactSection } from "./esmodules/contact.js";
import { generatePDF } from "./esmodules/generatepdf.js";
import addNewExperienceSection from "./esmodules/experience.js";
window.generatePDF = generatePDF;// assigned to the window object to make it globally accessible



function updateResume() {

  //CONTACT SECTION
  updateContactSection();

  //EXPERIENCE SECTION

//Converts the Start and End date format from 2024-06 to June 2024, 
// use querySelectorAll to make this code simpler later---------------------------------------------------------
  // const startDateInput = document.getElementById("start-date");
  // const formattedStartDate = document.getElementById("preview-start-date");
  // const startDateValue = startDateInput.value; // e.g., "2024-06"
  // const endDateInput = document.getElementById("end-date");
  // const formattedEndDate = document.getElementById("preview-end-date");
  // const endDateValue = endDateInput.value; // e.g., "2024-06"

  // if (startDateValue) {
  //   const [year, month] = startDateValue.split("-");
  //   const date = new Date(year, month - 1); // Month is zero-based
  //   const options = { year: "numeric", month: "long" };
  //   formattedStartDate.textContent = date.toLocaleDateString("en-US", options);
  // } else {
  //   formattedStartDate.textContent = "";
  // }

  // if (endDateValue) {
  //   const [year, month] = endDateValue.split("-");
  //   const date = new Date(year, month - 1); // Month is zero-based
    
  //   const options = { year: "numeric", month: "long" };
  //   const newDate = date.toLocaleDateString("en-US", options);
  //   formattedEndDate.textContent = ` - ${newDate}`;
  // } else {
  //   formattedEndDate.textContent = "";
  //   //console.log(formattedStartDate)
  // }




  //--------------------------------------------------------------------------------------------------------------------------------------------
    //setting the preview value to the value entered into the form------------------------------------------------------------------------------

  // document.getElementById("preview-job-title").innerText =
  //   document.getElementById("job-title").value;
  // document.getElementById("preview-employer-name").innerText =
  //   document.getElementById("employer-name").value;
  // document.getElementById("preview-work-city").innerText =
  //   document.getElementById("work-city").value;
  // document.getElementById("preview-work-state").innerText =
  //   document.getElementById("work-state").value;
}

// Attach event listeners, CONTACT SECTION
document.querySelectorAll("input, select").forEach((input) => {
  input.addEventListener("input", updateResume);
});

//----- invokes the function immediately so the text  in the HTML does not appear
//updateResume(); // initialize preview



//EXPERIENCE SECTION-----------------------------------------------------------------------------------------------------

const newExperienceButton = document.getElementById("new-job-experience");
addNewExperienceSection(newExperienceButton);
