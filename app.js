let bufferNumber1 = 0, bufferNumber2 = 0, currentOperation = sum, isFirstOperation = true, onScreenMemory = "";

function button (n) {
    onScreenMemory += n
    if (isFirstOperation) {
        bufferNumber1 = parseInt(onScreenMemory)
    } else {
        bufferNumber2 = parseInt(onScreenMemory)
    }
    updateVisor()
}

function operation (op) {
    if (!isFirstOperation) {
        pushResultToBuffer1()
    }
    currentOperation = op
    onScreenMemory = ""
    isFirstOperation = false
    updateVisor()
}

function calculate () {
    return currentOperation(bufferNumber1, bufferNumber2)
}

function pushResultToBuffer1 () {
    const result = calculate(currentOperation)
    bufferNumber1 = result
    bufferNumber2 = 0
    console.log(`buffer1: ${bufferNumber1}, buffer2: ${bufferNumber2}`)
    onScreenMemory = bufferNumber1.toString()
    isFirstOperation = true
    updateVisor()
}

function updateVisor () {
    document.getElementById("visor").innerHTML = onScreenMemory
}

function clearAll(){
    bufferNumber1 = 0
    bufferNumber2 = 0
    currentOperation = sum
    isFirstOperation = true
    onScreenMemory = ""
    updateVisor()
}