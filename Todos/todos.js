(function() {

  const initialTemplate = `
    <form>
      <input type="text" name="info" />
      <button>save</button>
    </form>
    <ul class="list">

    </ul>
    <div class="counters">
      <span class="completed">completed: <span class="counter">0</span></span>
      <span class="notCompleted">not completed: <span class="counter">0</span></span>
    </div>
  `;

  let app = document.getElementById('TodosApp');
  app.innerHTML = initialTemplate;

  function generateId(todos) {
    let out = [];
    for (let x = 0; x < todos.length; x++) {
      let n = {};
      n.id = x;
      n.content = todos[x].content;
      n.checked = todos[x].checked;
      out.push(n);
    }
    todos = out;
    return todos;
  }

  var todos = [];

  window.todos = todos;

  function clearList(list) {
    while (list.children.length != 0) {
      list.firstChild.remove();
    }
  };

  function getElFromTodos(id) {
    for (let x = 0; x , todos.length; x++) {
      if (todos[x].id == id)
        return todos[x];
    }
  }

  function renderList(list) {
    clearList(list);
    todos = generateId(todos);
    for (let item = 0; item < todos.length; item++) {
      let li = document.createElement('li');
      li.setAttribute('class', 'list-item');
      li.setAttribute('id', String(item));
      let sp = getToggler();
      let text = document.createTextNode(todos[item].content + ' ');
      li.innerHTML = sp;
      let checkbox = li.querySelector('.toggler input');
      checkbox.addEventListener('change', function() {
        let el = getElFromTodos(li.id);
          el.checked = checkbox.checked;
          renderList(list);
      });
      checkbox.checked = todos[item].checked;
      li.firstChild.appendChild(text);
      let but = document.createElement('button');
      but.innerHTML = '&times;';
      but.addEventListener('click', function() {
        let todos_id = but.parentElement.id;
        deleteId(todos, todos_id);
        renderList(list);
      });
      li.appendChild(but);
      list.appendChild(li);
    };
    counter('notCompl');
    counter('compl');
  };

  let listStarter = document.querySelector('.list');
  renderList(listStarter);

  function getToggler() {
    return `<span class="toggler">
              <label>
                <input type="checkbox">
                <span class="visible-checkbox">
                  <span class="tick"></span>
                </span>
              </label>
            </span>`;
  };

  let button = document.querySelector('button');
    button.addEventListener('click', function (event) {
      event.preventDefault();
      let list = document.querySelector('.list');
      let form = document.querySelector('form');
      let input = form.elements.info;
      let newTodoEntry = {
        checked: false,
        content: input.value,
      }
      todos.unshift(newTodoEntry);
      renderList(list);
      form.reset();
  })

  function deleteId(arr, id) {
    for (let x = 0; x < arr.length; x++) {
      if (arr[x].id == id)
        arr.splice(x, 1);
    }
    return arr;
  }

  function counter(arg) {
    let init, bool;
    if (arg == 'compl') {
      init = '.completed .counter';
      bool = true;
    }
    else {
      init = '.notCompleted .counter';
      bool = false;
    }
    let sp = document.querySelector(init), count = 0;
    for (let x = 0; x < todos.length; x++) {
      if (todos[x].checked == bool)
        count += 1;
    };
    sp.innerText = count;
  }
})()
