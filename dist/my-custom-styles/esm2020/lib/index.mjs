export function setupCustomStyles(useFont) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1jdXN0b20tc3R5bGVzL3NyYy9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQXlCO0lBQ3ZELHFCQUFxQjtJQUNyQixNQUFNLE9BQU8sR0FBRyx1Q0FBdUMsQ0FBQztJQUN4RCxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxZQUFZLEVBQUUsT0FBTyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQy9ELElBQUksT0FBTztRQUFHLFFBQWdCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVuRCxzQkFBc0I7SUFDdEIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxLQUFLLENBQUMsU0FBUyxHQUFHOzs7dUJBR0MsT0FBTzs7Ozs7Ozs7OztLQVV6QixDQUFDO0lBQ0YsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzZXR1cEN1c3RvbVN0eWxlcyh1c2VGb250OiBcInVzZUZvbnRcIiB8IG51bGwpIHtcbiAgICAvLyBJbXBvcnQgY3VzdG9tIGZvbnRcbiAgICBjb25zdCBmb250VXJsID0gXCIvYXNzZXRzL05vdG9TYW5zT2xkSXRhbGljLVJlZ3VsYXIudHRmXCI7XG4gICAgY29uc3QgZm9udEZhY2UgPSBuZXcgRm9udEZhY2UoXCJDdXN0b21Gb250XCIsIGB1cmwoJHtmb250VXJsfSlgKTtcbiAgICBpZiAodXNlRm9udCkgKGRvY3VtZW50IGFzIGFueSkuZm9udHMuYWRkKGZvbnRGYWNlKTtcblxuICAgIC8vIEFwcGx5IENTUyB2YXJpYWJsZXNcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDdXN0b21Gb250JztcbiAgICAgICAgICAgIHNyYzogdXJsKCR7Zm9udFVybH0pIGZvcm1hdCgndHRmJyk7XG4gICAgICAgICAgICAvKiBBZGQgbW9yZSBmb250LWZhY2UgcHJvcGVydGllcyBhcyBuZWVkZWQgKi9cbiAgICAgICAgfVxuICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgICAtLXByaW1hcnktY29sb3I6ICMwODFBNDY7XG4gICAgICAgICAgICAtLXNlY29uZGFyeS1jb2xvcjogIzU3NTNDOTtcbiAgICAgICAgICAgIC0td2FybmluZzogI0VEQzIzOTtcbiAgICAgICAgICAgIC0tYmx1ZS1zaGFkZTogIzJDNjlGRjtcbiAgICAgICAgICAgIC8qIEFkZCBtb3JlIENTUyB2YXJpYWJsZXMgYXMgbmVlZGVkICovXG4gICAgICAgICAgfVxuICAgIGA7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG4iXX0=