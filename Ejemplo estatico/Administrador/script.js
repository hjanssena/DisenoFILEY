//Prompts*************************************************************
const editUserForm = document.querySelector('#edit_user');
const newUserForm = document.querySelector('#new_user');
const prompterBg = document.querySelector('#prompter');
const editUserBtn = document.querySelectorAll('#editUserBtn');
const newUserBtn = document.querySelector('#newUserBtn');
const closePromptBtn = document.querySelectorAll('#closePrompt');

//All attributes are strings
function prompt(newTag, newEntry, prompter) {
    requestAnimationFrame(() => {
        if (prompter == 'flex') {
            newUserForm.style.display = newTag;
            editUserForm.style.display = newEntry;
            prompterBg.style.display = prompter;
            setTimeout(() => {
                prompterBg.style.transition = "opacity 0.25s";
                prompterBg.style.opacity = 1;
            }, 15)
        }
        else {
            prompterBg.style.transition = "opacity 0.25s";
            prompterBg.style.opacity = 0;
            setTimeout(() => {
                newUserForm.style.display = newTag;
                editUserForm.style.display = newEntry;
                prompterBg.style.display = prompter;
            }, 260)
        }
    });
}

for (let btn of editUserBtn) {
    btn.addEventListener('click', () => {
        prompt('none', 'block', 'flex');
    });
}

newUserBtn.addEventListener('click', () => {
    prompt('block', 'none', 'flex');
});

for (let btn of closePromptBtn) {
    btn.addEventListener('click', () => {
        prompt('none', 'none', 'none');
    });
}