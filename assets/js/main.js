(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }

  var form = document.getElementById('quote-form');
  if (form) {
    var ts = form.querySelector('[name=ts]');
    if (ts) { ts.value = Date.now(); }
    var status = form.querySelector('.form-status');

    if (form.hasAttribute('data-preview')) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        status.textContent = 'Preview only: this form will send enquiries once the site is live.';
      });
    }

    var params = new URLSearchParams(window.location.search);
    if (params.get('error') && status) {
      status.className = 'form-status err';
      status.textContent = params.get('error') === '2'
        ? 'Sorry, the message could not be sent. Please call 015242 33305 or WhatsApp me instead.'
        : 'Please check your name, phone number and message, then try again.';
    }
  }
})();
