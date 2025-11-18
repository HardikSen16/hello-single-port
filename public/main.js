document.getElementById('callApi').addEventListener('click', async () => {
  const resultEl = document.getElementById('result');
  resultEl.textContent = 'Calling backend...';
  try {
    const res = await fetch('/api/hello');
    const data = await res.json();
    resultEl.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    resultEl.textContent = 'Error: ' + err.message;
  }
});
