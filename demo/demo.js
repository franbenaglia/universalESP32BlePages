// Click-to-enlarge for the screenshot gallery, using the native <dialog> element.
(function () {
  var dialog = document.getElementById('lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return; // images still show inline

  var image = dialog.querySelector('img');
  var caption = dialog.querySelector('.lightbox-caption');

  document.querySelectorAll('[data-enlarge]').forEach(function (button) {
    button.addEventListener('click', function () {
      var source = button.querySelector('img');
      image.src = source.src;
      image.alt = source.alt;
      caption.textContent = button.getAttribute('data-caption') || '';
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', function (event) {
    // A click on the backdrop or the close button closes it; a click on the image does not.
    if (event.target === dialog || event.target.hasAttribute('data-close')) dialog.close();
  });
})();
