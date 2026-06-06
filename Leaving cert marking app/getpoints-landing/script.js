const BACKEND_URL = 'http://127.0.0.1:5000';
const gradeForm = document.querySelector('#grade-form');
const gradeResult = document.querySelector('#grade-result');
const gradeButton = document.querySelector('#grade-submit');
const gradeStatus = document.querySelector('#grade-status');

if (gradeForm) {
  gradeForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const question = document.querySelector('#question-input').value.trim();
    const answer = document.querySelector('#answer-input').value.trim();

    if (!question || !answer) {
      gradeStatus.textContent = 'Please enter both the question and the student answer.';
      gradeStatus.style.color = '#f87171';
      return;
    }

    gradeButton.disabled = true;
    gradeStatus.textContent = 'Grading...';
    gradeStatus.style.color = '#cbd5e1';
    gradeResult.textContent = '';

    try {
      const response = await fetch(`${BACKEND_URL}/api/grade`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer }),
      });

      const contentType = response.headers.get('content-type') || '';
      let data;

      if (contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = { error: await response.text() };
      }

      if (!response.ok) {
        throw new Error(data.error || 'Unable to grade the answer.');
      }

      gradeResult.textContent = data.grading || JSON.stringify(data, null, 2);
      gradeStatus.textContent = 'Grading complete.';
      gradeStatus.style.color = '#22c55e';
    } catch (error) {
      gradeStatus.textContent = `Error: ${error.message}`;
      gradeStatus.style.color = '#f87171';
    } finally {
      gradeButton.disabled = false;
    }
  });
}
