# Implement a TableView Cell Prototyping Tool

We are looking for you to build a tool that allows users to prototype how a TableView Cell would look. This feature request consists of two parts: a form that allows a user to set specific attributes (defined below) that will be applied to a preview of the cell they are creating.

Please implement this feature using modern code formatting and best practices. That includes [React Hooks](https://reactjs.org/docs/hooks-intro.html), specifically useState, and use [React Bootstrap](https://react-bootstrap.github.io/components/alerts) components when necessary.

---

## Project Spec

### UI
- The screen should be split in half vertically
  - Left half should contain a form that allows the user to configure their table view cell
  - Right half should be a live preview of the cell they are configuring
- The cell preview should be 375px wide, with a default height of 72px.


### User Editable Attributes
- Background Image
  - The image should scale to fit the width, and the cell height should change to fit the image height
    - i.e. If a 375x150px image is supplied, the cell should be 375x150px. If a 750x200px image is supplied, the cell should be 375x100px.
- Layout: 1 or two lines of text
  - If one line: This refers to a cell that has only one label / text box and a single input for text. However, the string could possibly wrap to multiple lines if it's longer than the width of the cell
     - the height of the label should be the height of the cell, with the text vertically centered
  - If two lines: there are two labels for text, with two separate fields in the form
    - each label gets 50% of the cell height
- label string value, line independent
  - the fields for the second label should only be visible if the "two line" format is selected
- Font Size, line independent
- Text Color, line independent


## Sample Cells
### Single line cell
![cell2.jpg](https://firebasestorage.googleapis.com/v0/b/clas-demo-2.appspot.com/o/file_images%2Fye1wXwvROc24Awzhjz0h1Z9U7z1Tv6%2Fcell2.jpg?alt=media&token=5ec16099-25c9-498a-915a-b304ab0dbc6c)

### Double line cell
![cell1](https://firebasestorage.googleapis.com/v0/b/clas-demo-2.appspot.com/o/file_images%2Fye1wXwvROc24Awzhjz0h1Z9U7z1Tv6%2Fcell1?alt=media&token=1798fbc3-3ab4-47af-bfc5-2aeb8041b4f0)



---
## Starter App 
Please complete this feature request using the starter app in this repository. It is an empty `create-react-app` app with two included helper components: `ColorSelector` and `ImagePicker`.

### ColorSelector
As you can imagine, this is a component that should allow you to quickly implement a color picker in the form. Below is a code snippet on how to use:
```
var color = "#0B3D91"
function colorChangedAction(nameOfField, hexColorValue) {
    color = hexColorValue
}
<ColorSelector
    name="navColor" // the field name to associate the color to
    color={color} // the color value currently selected
    colorChanged={colorChangedAction} // the callback function when a color is picked
/>
```


### ImagePicker
This component will provide you with a way to quickly implement an image picker.
```
var previewImageData = "[base64 data string]"
function onImageChange(nameOfField, imageData) {
    previewImageData = imageData
}
<ImagePicker
    name="backgroundImage" // the field name to associate the image data to
    previewImage={previewImageData}
    onChange={onImageChange} />
```

---
### Install and run

`npm install`

Installs the couple dependencies required for this app to run

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

---

## Submission

Please do all work on a new branch, and push to the remote repositiory on that branch on completion.

---

## Questions?

As you're working through the feature request, feel free to reach out on WhatsApp and Addison or Shannin with get back to you as they see them.
