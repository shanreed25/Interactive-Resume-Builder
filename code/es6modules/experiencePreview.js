//EMPLOYER NAME---------------------------------------------------------------------------------
export function addEmployerNamePreview(employerNamePreviewElementCount){
  const employerNamePreviewElement = document.createElement('p');
  employerNamePreviewElement.id = `employer-name-preview-${employerNamePreviewElementCount}`;
  // workExperiencePreviewContainer.appendChild(employerNamePreview);
  return employerNamePreviewElement;

}


//JOB TITLE-------------------------------------------------------------------------------------
export function addPositionPreview(experiencePreviewCount, workExperiencePreviewContainer){
  const positionPreview = document.createElement('h4');
  positionPreview.id = `position-preview-${experiencePreviewCount}`;
  workExperiencePreviewContainer.appendChild(positionPreview);
}


export const employerNamePreviewElement = addEmployerNamePreview()