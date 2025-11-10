const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.classList.add('js-feedback-form');

let formData = {};

try {
    if (localStorage.getItem(STORAGE_KEY)) {
        formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || formData;
    }
    form.email.value = formData.email  || '';
    form.message.value = formData.message || '';
  } catch (e) {
    console.warn('Bad JSON in localStorage:', e);
    localStorage.removeItem(STORAGE_KEY);
  }

form.addEventListener('input', () => {
  formData = {
    email: form.email.value.trim(),
      message: form.message.value.trim(),
     
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
    };
  console.log(formData);
  form.reset();
    localStorage.removeItem(STORAGE_KEY);
});



// // Доступ за name-атрибутами:
// const { email, message } = form.elements;

// // 1) Відновлення зі сховища
// try {
//   const saved = localStorage.getItem(STORAGE_KEY);
//   if (saved) {
//     const formm = JSON.parse(saved);
//     email.value = formData.email ?? '';
//     message.value = formData.message ?? '';
//   }
// } catch (e) {
//   console.warn('Bad JSON in localStorage:', e);
// }

// // 2) Збереження при введенні
// form.addEventListener('input', () => {
//   const formData = {
//     email: email.value.trim(),
//     message: message.value.trim(),
//   };
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// });

// // 3) Сабміт
// form.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   const emailVal = email.value.trim();
//   const msgVal = message.value.trim();

//   if (!emailVal || !msgVal) {
//     alert('Fill please all fields');
//     return;
//   }

//   console.log('Email:', emailVal);
//   console.log('Message:', msgVal);

//   form.reset();
//   localStorage.removeItem(STORAGE_KEY);
// });
