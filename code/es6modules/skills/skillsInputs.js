const allSkillsInputContainer = document.getElementById('all-skills-inputs-container');

// Skill Input Container is Passed Down to skills.js
export default function addSkillInputContainer(skillInputCount){

    //Container
        const skillInputContainer = document.createElement('div');
        skillInputContainer.id = `skill-input-${skillInputCount}-container`;
        skillInputContainer.className = `skill-input-container`;
        allSkillsInputContainer.appendChild(skillInputContainer);
        
    //Input
        const skillInput = document.createElement('input');
        skillInput.id = `skill-input-${skillInputCount}`;
        skillInput.className = 'skill-input';
        skillInputContainer.appendChild(skillInput);

    return skillInputContainer;

}

