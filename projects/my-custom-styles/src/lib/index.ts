export function setupCustomStyles(useFont: "useFont" | null) {
    // Import custom font
    const fontUrl = "/assets/NotoSansOldItalic-Regular.ttf";
    const fontFace = new FontFace("CustomFont", `url(${fontUrl})`);
    if (useFont) (document as any).fonts.add(fontFace);

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
