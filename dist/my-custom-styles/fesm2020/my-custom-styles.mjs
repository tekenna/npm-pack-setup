function setupCustomStyles(useFont) {
    // Import custom font
    const fontUrl = "/assets/NotoSansOldItalic-Regular.ttf";
    const fontFace = new FontFace("CustomFont", `url(${fontUrl})`);
    if (useFont)
        document.fonts.add(fontFace);
    // Apply CSS variables
    const style = document.createElement("style");
    style.innerHTML = `
        @font-face {
            font-family: 'CustomFont';
            src: url(${fontUrl}) format('ttf');
            /* Add more font-face properties as needed */
        }
        :root {
            --primary-color: #081A46;
            --secondary-color: #5753C9;
            --warning: #EDC239;
            --blue-shade: #2C69FF;
            /* Add more CSS variables as needed */
          }
    `;
    document.head.appendChild(style);
}

/*
 * Public API Surface of my-custom-styles
 */

/**
 * Generated bundle index. Do not edit.
 */

export { setupCustomStyles };
//# sourceMappingURL=my-custom-styles.mjs.map
//# sourceMappingURL=my-custom-styles.mjs.map
