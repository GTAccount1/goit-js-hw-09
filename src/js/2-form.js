const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.classList.add('js-feedback-form');

// Доступ за name-атрибутами:
const { email, message } = form.elements;

// 1) Відновлення зі сховища
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const formData = JSON.parse(saved);
    email.value = formData.email ?? '';
    message.value = formData.message ?? '';
  }
} catch (e) {
  console.warn('Bad JSON in localStorage:', e);
}

// 2) Збереження при введенні
form.addEventListener('input', () => {
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 3) Сабміт
form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const emailVal = email.value.trim();
  const msgVal = message.value.trim();

  if (!emailVal || !msgVal) {
    alert('Fill please all fields');
    return;
  }

  console.log('Email:', emailVal);
  console.log('Message:', msgVal);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});