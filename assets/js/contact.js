document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target.elements;

    var subject = 'Zenokin Pages Contact: ' + f['subject'].value;
    var body = 'Name: ' + f['name'].value +
        '\nEmail: ' + f['email'].value +
        '\n\n' + f['message'].value;

    window.location.href = 'mailto:zenokin.tnafn@slmails.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
});