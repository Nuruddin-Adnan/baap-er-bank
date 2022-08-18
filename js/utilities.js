const getInputValueById = (inputId) => {
    const input = document.getElementById(inputId);
    return parseFloat(input.value);
}

const getElementValueById = (elementId) => {
    const element = document.getElementById(elementId);
    return parseFloat(element.innerText);
}

const setElementInnerTextById = (elementId, text) => {
    const element = document.getElementById(elementId);
    element.innerText = text;
}