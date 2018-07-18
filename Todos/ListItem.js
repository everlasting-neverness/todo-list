let h = hyperscript;

function ListItem(props) {
  return h('li.list-item', [
    h('span.toggler', [
      h('label', [
        h('input', {
          type: 'checkbox',
          checked: props.todo.checked,
          // onchange: changeHandler,
        }),
        h('span.visible-checkbox', [h('span.tick')]),
      ]),
      props.todo.content,
    ]),
    h('button', 'X'),
  ]);
}
