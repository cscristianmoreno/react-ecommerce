
const IconColor = (myElement) => {

    const color = window.getComputedStyle(myElement);
    console.log(color.getPropertyValue("background-color"));

    console.log("Llegó acá");

    return color.current.style.fill = color.getPropertyValue("background-color");
}

export default IconColor;