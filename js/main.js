// Небольшой скрипт поверх Bootstrap JS Bundle:
// валидация форм в стиле Bootstrap, сообщение об успехе и toast «В корзину».

// Формы: проверка встроенными средствами браузера + классы Bootstrap.
document.querySelectorAll('.needs-validation').forEach((form) => {
  const success = form.querySelector('[data-form-success]');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // backend пока не подключён

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      form.querySelector(':invalid')?.focus();
      return;
    }

    form.reset();
    form.classList.remove('was-validated');
    success?.classList.remove('d-none');
  });

  form.addEventListener('input', () => success?.classList.add('d-none'));
});

// Toast «Товар добавлен в корзину».
const cartToast = document.getElementById('cartToast');

if (cartToast) {
  const toast = bootstrap.Toast.getOrCreateInstance(cartToast);
  document.querySelectorAll('[data-cart-add]').forEach((button) => {
    button.addEventListener('click', () => toast.show());
  });
}
