const urlPattern = /^https:\/\/gatech\.instructure\.com\/courses\/\d+\/assignments\/\d+$/;
if (urlPattern.test(window.location.href)) {
  const h1Text = document.querySelector('h1') ? document.querySelector('h1').innerText : '';
  const h2Text = document.querySelector('h2') ? document.querySelector('h2').innerText : '';
  const formattedText = `${h1Text} (${h2Text})`;
  const submitButton = document.getElementById('submit_file_button');
  if (submitButton) {
    submitButton.textContent = `Submit ${formattedText}`;
  }
}
