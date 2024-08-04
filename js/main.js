let texts = Array.from(document.querySelectorAll('p'));
for (let text of document.querySelectorAll('h1')){
    texts.push(text);
}
document.querySelectorAll('h1').forEach(text => {
    texts.push(text);
})
document.querySelectorAll('h2').forEach(text => {
    texts.push(text);
})

const editor = document.querySelector('.editor');
const input = document.getElementById('input-text');
const saveButton = document.getElementById('save-button');
const closeButton = document.getElementById('close-button');
texts.forEach(editableText => {
    editableText.addEventListener('click', () => {
        editor.classList.remove('hidden');
        input.value = editableText.textContent;
        if (input.value === " "){
            input.value = "";
        }
        input.style.height = "30px";
        editor.dataset.target = editableText.id;
    });
});

input.addEventListener('input', () =>{
    const targetElement = document.getElementById(editor.dataset.target);
    targetElement.textContent = input.value;
});

saveButton.addEventListener('click', () => {
    const targetElement = document.getElementById(editor.dataset.target);

    console.log(input.value.length)
    if (input.value.length === 0){
        targetElement.textContent = " ";
    } else {
        targetElement.textContent = input.value;
    }
    console.log(targetElement.textContent.length)
    editor.classList.add('hidden');
});

closeButton.addEventListener('click', () => {
    editor.classList.add('hidden');
});