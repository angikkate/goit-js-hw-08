import throttle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const formData = {};
reloadPage();

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)));

  e.currentTarget.reset();
  localStorage.removeItem(KEY_STORAGE);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}

function reloadPage() {
  const savedFormData = JSON.parse(localStorage.getItem(KEY_STORAGE));
  
  if (savedFormData) {
    refs.email.value = savedFormData.email;
    refs.message.value = savedFormData.message;
  }
}