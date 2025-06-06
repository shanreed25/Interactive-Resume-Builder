export function updateSummarySection() {
    //setting the preview value to the value entered into the form----------------------------------------------------------
  document.getElementById("preview-summary").innerText =
    document.getElementById("summary").value;
}