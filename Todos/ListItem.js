let h = hyperscript;

function ListItem(props) {
  return h('li.list-item', [
    h('span.toggler', [
      h('label', [
        h('input', {
          type: 'checkbox',
          checked: props.todo.checked,
          onchange: props.onChange,
        }),
        h('span.visible-checkbox', [h('span.tick')]),
      ]),
      h('span.content', props.todo.content),
    ]),
    h('button', {
      onclick: props.onRemove,
    }, 'X'),
  ]);
}
