export default (container, state) => {
    container.element.innerHTML = `<div style="padding: 10px;">${state.text}</div>`;
  }