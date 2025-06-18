import addSkillInputContainer from './skillsInputs.js';
import {addSkillPreviewLIElement} from './skillsPreview.js';


// Passed down to resume-sectionsjs
export default  function addSkill(skillInputCount){
    //Add Skill Input Container
     const skillInputContainer = addSkillInputContainer(skillInputCount);

     //because the container contains the input we need to
     //select the input with the specified id
     const skillInput = skillInputContainer.querySelector(`#skill-input-${skillInputCount}`);


     //Create Skill Preview Element
     const skillPreviewLIElement = addSkillPreviewLIElement(skillInputCount);

     // ---> Listen for the input and add the value to the preview
     skillInput.addEventListener('input', () => {
        skillPreviewLIElement.textContent = skillInput.value
     })

}