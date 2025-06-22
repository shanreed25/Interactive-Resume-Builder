export function updateSummarySection(summaryInput) {
    summaryInput.addEventListener('input', () =>{
    //setting the preview value to the value entered into the form
      document.getElementById("preview-summary").textContent =
      document.getElementById("summary").value;
    })
}