function updateResume() {
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


//Converts the Start and end date for mat from 2024-06 to June 2024, make this code simpler---------------------------------------------------------
  const startDateInput = document.getElementById("start-date");
  const formattedStartDate = document.getElementById("preview-start-date");
  const startDateValue = startDateInput.value; // e.g., "2024-06"
  const endDateInput = document.getElementById("end-date");
  const formattedEndDate = document.getElementById("preview-end-date");
  const endDateValue = endDateInput.value; // e.g., "2024-06"

  if (startDateValue) {
    const [year, month] = startDateValue.split("-");
    const date = new Date(year, month - 1); // Month is zero-based
    const options = { year: "numeric", month: "long" };
    formattedStartDate.textContent = date.toLocaleDateString("en-US", options);
  } else {
    formattedStartDate.textContent = "";
    //console.log(formattedStartDate)
  }

  // document.getElementById("preview-start-date").innerText =
  //   document.getElementById("start-date").value;
  // document.getElementById("preview-end-date").innerText =
  //   document.getElementById("end-date").value;

  if (endDateValue) {
    const [year, month] = endDateValue.split("-");
    const date = new Date(year, month - 1); // Month is zero-based
    const options = { year: "numeric", month: "long" };
    formattedEndDate.textContent = date.toLocaleDateString("en-US", options);
  } else {
    formattedEndDate.textContent = "";
    //console.log(formattedStartDate)
  }

  //--------------------------------------------------------------------------------------------------------------------------------------------
    
  document.getElementById("preview-job-title").innerText =
    document.getElementById("job-title").value;
  document.getElementById("preview-employer-name").innerText =
    document.getElementById("employer-name").value;
  document.getElementById("preview-work-city").innerText =
    document.getElementById("work-city").value;
  document.getElementById("preview-work-state").innerText =
    document.getElementById("work-state").value;
}

// Attach event listeners
document.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("input", updateResume);
});

updateResume(); // initialize preview

function generatePDF() {
  // Choose the element to convert
  const element = document.getElementById("preview");

  // Optional configuration
  const opt = {
    margin: 1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  // Generate the PDF
  html2pdf().set(opt).from(element).save();
  console.log(element);

  // var element = document.getElementById('resume-content');
  // html2pdf(element);
}

// function convertStartDate() {
//   const startDateInput = document.getElementById("start-date");
//   const formattedDate = document.getElementById("preview-start-date");
//   const value = startDateInput.value; // e.g., "2024-06"
//   if (value) {
//     const [year, month] = value.split("-");
//     const date = new Date(year, month - 1); // Month is zero-based
//     const options = { year: "numeric", month: "long" };
//     formattedDate.textContent = date.toLocaleDateString("en-US", options);
//   } else {
//     formattedDate.textContent = "";
//   }
// }


// function convertEndDate() {
//   const endDateInput = document.getElementById("end-date");
//   const formattedDate = document.getElementById("preview-end-date");
//   const value = endDateInput.value; // e.g., "2024-06"
//   if (value) {
//     const [year, month] = value.split("-");
//     const date = new Date(year, month - 1); // Month is zero-based
//     const options = { year: "numeric", month: "long" };
//     formattedDate.textContent = date.toLocaleDateString("en-US", options);
//   } else {
//     formattedDate.textContent = "";
//   }
// }
