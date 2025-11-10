const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.classList.add('js-feedback-form');

let formData = { email: "", message: "" };

try {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
} catch (e) {
  console.warn("Bad JSON in storage", e);
  formData = { email: "", message: "" };
}

if (!formData || typeof formData !== "object") {
  formData = { email: "", message: "" };
}

formData = {
  email: formData.email ?? "",
  message: formData.message ?? "",
};

form.email.value = formData.email;
form.message.value = formData.message;

form.addEventListener('input', () => {
  formData = {
    email: form.email.value,
    message: form.message.value, 
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
      formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(), 
    };
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    };
    console.log(formData);
    form.reset();
     localStorage.removeItem(STORAGE_KEY);
     formData = { email: "", message: "" };
});

