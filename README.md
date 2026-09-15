# Drum Machine 🥁

Built a simple and interactive **JavaScript** digital drum machine to fulfill the lab requirements for mapping keyboard triggers and mouse clicks to dynamic audio clips. 

---

## 🌟 Implemented Features

This project fulfills all required lab user stories and specifications:
* **Structural Layout:** Contains the main `#drum-machine` wrapper enclosing the `#pad-bank` container and the `#display` paragraph element.
* **Drum Pads:** Features nine clickable button elements with the class `.drum-pad` mapped in strict order to the keyboard keys: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`.
* **Audio Elements:** Integrates HTML5 `<audio>` elements with the class `.clip` nested directly inside their parent drum pads, targeting official freeCodeCamp audio samples.
* **Dual Triggers:** Plays the correct sound instantly when a drum pad is either clicked with a mouse or activated via its physical keyboard key.
* **Dynamic Display:** Updates the `#display` element text dynamically to show a unique string describing the active audio sample whenever a pad triggers.

## 🛠️ Project Structure

* **HTML Structure:** Uses semantic button controls and nested audio clips following the structural requirements.
* **JavaScript Logic:** Handles `click` and `keydown` event listeners to play audio programmatically and swap the text of the display area.
* **Hosting:** GitHub Pages

## 🚀 How to Open

1. Clone or download this project folder.
2. Double-click the `index.html` file to launch the application right in your browser.
3. Use your mouse or keyboard keys to test the instrument and watch the display reflect the beats.
