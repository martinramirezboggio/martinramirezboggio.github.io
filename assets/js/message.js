$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name    = document.getElementById('name')
    var email   = document.getElementById('email')
    var subject   = document.getElementById('subject')
    var message = document.getElementById('message')

    if (!name.value || !email.value || !message.value || !subject.value) {
      alertify.error("Please check your entries");
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: "https://formspree.io/xqkyleoz",
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Message sent");
    }
  });
});