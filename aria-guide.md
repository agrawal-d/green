# How to add ARIA labels for Screen-readers

- Check out [this article](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) for an introduction.
- Add label attributes to all interactive/ visible components ( img, a, button etc.)
- For example if a line of HTML is `<button onclick="closeFunction()">X</button>` change it to `<button aria-label="Close the dialog" onclick="myDialog.close()">X</button>`
- Do this for all HTML files in `src/`
