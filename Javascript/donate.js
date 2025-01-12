document.getElementById('donation-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const donorName = document.getElementById('donorName').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const message = document.getElementById('message').value;

    const successMessage = document.getElementById('success-message');

    if (!donorName || !email || !amount) {
      successMessage.textContent = 'Please fill in all required fields.';
      successMessage.style.color = 'red';
      return;
    }

    successMessage.textContent = `Thank you, ${donorName}, for your generous donation of $${amount} to JB Wildlife!`;
    successMessage.style.color = 'green';

    // Reset the form
    document.getElementById('donorName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('message').value = '';
  });