(function() {
  const h = hyperscript;

  function clearElement(list) {
    while (list.children.length !== 0) {
      list.firstChild.remove();
    }
  }

  function getTodoById(id) {
    for (let x = 0; x < todos.length; x++) {
      if (todos[x].id === id) return todos[x];
    }
  }

  let app = document.getElementById("TodosApp");

  function handleSubmit(event) {
    event.preventDefault();
    let list = document.querySelector(".list");
    let form = document.querySelector("form");
    let input = form.elements.info;
    let newTodoEntry = {
      id: getUniqueNumber(),
      checked: false,
      content: input.value
    };
    todos.unshift(newTodoEntry);
    render();
    form.reset();
  }

  var todos = [];

  function render() {
    clearElement(app);
    let counters = taskCounters();
    app.querySelector;
    app.appendChild(
      h(
        "div",
        h(
          "form",
          {
            onsubmit: handleSubmit
          },
          [h("input", { type: "text", name: "info" }), h("button", ["save"])]
        ),
        h(
          "ul.list",
          todos.map(function(todo) {
            return ListItem({
              todo: todo,
              onChange: function() {
                todo.checked = this.checked;
                render();
              },
              onRemove: function() {
                for (let i = 0; i < todos.length; i++) {
                  if (todos[i].id == todo.id) {
                    todos.splice(i, 1);
                  }
                }
                render();
              }
            });
          })
        ),
        h("div.counters", [
          h("span.completed", [
            "completed: ",
            h("span.counter", [counters.completedCounter])
          ]),
          h("span.notCompleted", [
            "not completed: ",
            h("span.counter", [counters.notCompletedCounter])
          ])
        ])
      )
    );
  }

  render();

  window.todos = todos;

  function deleteId(arr, id) {
    for (let x = 0; x < arr.length; x++) {
      if (arr[x].id == id) arr.splice(x, 1);
    }
    return arr;
  }

  function taskCounters() {
    let completedCounter = 0;
    let notCompletedCounter = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].checked) {
        completedCounter += 1;
      } else {
        notCompletedCounter += 1;
      }
    }
    return {
      completedCounter: completedCounter,
      notCompletedCounter: notCompletedCounter
    };
  }
})();
