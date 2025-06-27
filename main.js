// Mobile nav toggle
document.getElementById('nav-toggle').addEventListener('click',()=>{
  const nav = document.getElementById('nav');
  nav.style.display = nav.style.display==='flex'? 'none':'flex';
});

// Simple form validation + feedback
function handleForm(formId, msgId){
  const form = document.getElementById(formId);
  const msg = document.getElementById(msgId);
  form.addEventListener('submit', e=>{
    e.preventDefault();
    if(form.checkValidity()){
      msg.textContent = 'Thank you! We received your submission.';
      msg.style.color = 'green';
      form.reset();
    } else {
      msg.textContent = 'Please fill out all fields correctly.';
      msg.style.color = 'red';
    }
  });
}
handleForm('contactForm','contactMsg');
handleForm('admissionForm','admissionMsg');
