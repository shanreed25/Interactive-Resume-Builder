const allSkillsInputContainer = document.getElementById('all-skills-inputs-container');

// Skill Input Container
export function addSkillInputContainer(skillInputCount){
        const skillInputContainer = document.createElement('div');
    skillInputContainer.id = `skill-input-${skillInputCount}-container`;
    skillInputContainer.className = `skill-input-container`;
    allSkillsInputContainer.appendChild(skillInputContainer);

    return skillInputContainer;

}

export function addSkillInput(skillInputCount){
    const skillInput = document.createElement('input');
    skillInput.id = `skill-input-${skillInputCount}`;
    skillInput.className = 'skill-input';

    return skillInput;
    
}

