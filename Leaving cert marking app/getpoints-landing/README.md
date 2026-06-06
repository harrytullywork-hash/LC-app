# getpoints landing page

This page includes an interactive demo form that sends a question and student answer to your local backend.

## Files
- `index.html` — landing page content with interactive grading demo
- `styles.css` — page styling
- `script.js` — local grading form behavior

## Preview locally
1. Open the `getpoints-landing` folder in VS Code.
2. Install the Live Server extension if you don't already have it.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Start the backend at `http://127.0.0.1:5000`.

> Important: Do not open the page as a `file://` URL. The page must load through Live Server so browser fetch calls work properly.

If you deploy the backend, change `BACKEND_URL` in `script.js` to the hosted URL.

The waitlist form uses FormSubmit with a placeholder email. Replace the address in `index.html` with your own email to collect signups.

## How it works
- The demo form sends a POST request to `BACKEND_URL/api/grade`.
- The backend uses your Anthropic/OpenAI key and returns SEC-style grading.
- The result is displayed directly on the page.

## Notes
- Replace the video placeholder in `index.html` with your YouTube embed or video component.
- The waitlist form still uses a placeholder action; update it later when you add a signup provider.
- If you want, I can also connect this page to a real hosted backend and add email capture.
