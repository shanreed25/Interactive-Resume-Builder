import {addSkillInput} from './skillsInputs.js';
import {addSkillPreviewLIElement} from './skillsPreview.js';

export function addSkill(skillInputCount, skillInputContainer){
    //Create Skill Input
     const skillInput = addSkillInput(skillInputCount);
     skillInputContainer.appendChild(skillInput);

     //Create Skill Preview Element
     const skillPreviewLIElement = addSkillPreviewLIElement(skillInputCount);

     // ---> Listen for the input and add the value to the preview
     skillInput.addEventListener('input', () => {
        skillPreviewLIElement.textContent = skillInput.value
     })

}