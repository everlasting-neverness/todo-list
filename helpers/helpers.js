(function() {
  function removeElement (element) {
    function realremove () {
      element.parentElement.remove();
    }
    return realremove;
  }

  // console.log('removeElement');
  window.removeElement = removeElement;
})();
