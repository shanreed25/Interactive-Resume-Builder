//Passed down to formPreviewConnection.js
//ADD FORM BUTTON
export function addJobDutyButton(jobformCount){
    const jobDutyButton = document.createElement('button');
    jobDutyButton.id = `add-job-duty-button-${jobformCount}`;
    jobDutyButton.className = 'add-job-duty-button';
    jobDutyButton.type = 'button';
    jobDutyButton.textContent = 'Add Job Description'
  
    return jobDutyButton;
}