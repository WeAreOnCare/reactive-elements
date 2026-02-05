(function () {
  if (!document.registerElement && !document.register) {
    document.registerElement = function () {
      return function () {};
    };
  }
})();
