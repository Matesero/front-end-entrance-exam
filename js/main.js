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

    if (input.value.length === 0){
        targetElement.textContent = " ";
    } else {
        targetElement.textContent = input.value;
    }
    editor.classList.add('hidden');
});

closeButton.addEventListener('click', () => {
    editor.classList.add('hidden');
});

document.getElementById("download-button").addEventListener('click', ()=> {
    const resumeHTML = document.getElementById('resume')

    html2canvas(resumeHTML, {scale: 4}).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        const scale = Math.min(595 / canvasWidth, 842 / canvasHeight);
        const scaledWidth = canvasWidth * scale;
        const scaledHeight = canvasHeight * scale;
        console.log(scale)
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [595, 842],
            putOnlyUsedFonts: true,
        });
        pdf.addImage(imgData, 'PNG', 0, 0, scaledWidth, scaledHeight);
        pdf.save('resume.pdf');
    })
});


const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', function (event) {
        const ripple = document.createElement('span');
        const rect = box.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');
        box.appendChild(ripple);
    });
});
