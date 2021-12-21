// логин
const registerForm = document.getElementById('register_form');

registerForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    email: { value: email },
    password: { value: password },
    action,
    method,
  } = event.target;

  let jsonResponse;
  try {
    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    jsonResponse = await response.json();
  } catch (e) {
    console.error(e);
  }
  console.log(jsonResponse.login);
  // Сделать проверку при неудачной регистрации
  if (!jsonResponse.login) {
    alert('У вас нет прав администратора!');
    window.location.href = '/login';
  } else {
    // Swal.fire('Вы вошли в систему');
    alert('Вы вошли в систему');
    window.location.href = '/';
  }
});

// удаление карточки

const deleteButton = document.querySelectorAll('.deleteButton');
if (deleteButton) {
  deleteButton.forEach((btn) => {
    btn.addEventListener('click', async (event) => {
      const id = event.target.parentNode.dataset.animalId;
      const response = await fetch('/animals', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          animalId: id,
        }),
      });
      const jsonResponse = await response.json();
      if (jsonResponse.deleted) {
        alert('Карточка удалена');
        window.location.href = '/animals';
      } else {
        alert('Ошибка удаления карточки');
        window.location.href = '/animals';
      }
    });
  });
}

const editForm = document.getElementById('editForm');

if (editForm) {
  editForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      action, name, description, pics,
    } = event.target;

    const response = await fetch(action, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        pics: pics.value,
      }),
    });
    const jsonResponse = await response.json();
    if (jsonResponse.edited) {
      alert('Карточка создана');
      window.location.href = '/animals';
    } else {
      alert('Ошибка создания карточки');
      window.location.href = '/animals';
    }
  });
}
// const firstRate = document.querySelector('.rate:first-child');
// const firstRate = document.querySelector('.rate');

const htmlRates = document.getElementsByClassName('rate');
const arrRates = [...htmlRates];

arrRates.forEach((rate) => {
  rate.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { priceRate1, id } = event.target;

    const res = await fetch('/rates', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceRate1: priceRate1.value, id }),
    });

    const data = await res.json();
    if (data.create) {
      alert('Все прошло успешно');
      window.location.href = '/rates';
    }
  });
});

// добавление
const addForm = document.getElementById('add_form');

if (addForm) {
  addForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const {
      action, method, name, description, pics,
    } = event.target;

    if (name.value == null || name.value === undefined || name.value === '') {
      alert('Название не может быть пустым');
      window.location.href = action;
      return;
    }

    if (description.value == null || description.value === undefined || description.value === '') {
      alert('Описание не может быть пустым');
      window.location.href = action;
      return;
    }
    if (pics.value == null || pics.value === undefined || pics.value === '') {
      alert('Вставьте ссылку на картинку');
      window.location.href = action;
      return;
    }

    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        pics: pics.value,
      }),
    });
    const jsonResponse = await response.json();
    if (jsonResponse.created) {
      alert('Карточка создана');
      window.location.href = '/animals';
    } else {
      alert('Ошибка создания карточки');
      window.location.href = action;
    }
  });
}
