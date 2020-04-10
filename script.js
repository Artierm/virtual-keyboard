
class KeyBoard {

    Element = {
        areaKeyBoard: null,
        KeysBoard: null,
        textarea: null,
        information: null
    }

    Properties = {
        caps: false,
        shift: true, 
        control :false,
        alt: false
    }

    KeysValuesEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
        'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','Shift','↑',
        'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'];


    KeysValuesRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
        'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
        'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift','↑', 
        'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'];


    KeysEventCode = [
        'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
        'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
        'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
        'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 
        'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];


    SystemKeys = ['Backspace', 'Tab', 'CapsLock', 'Shift', 'MetaLeft', 'AltRight','AltLeft', 'Space', 'ControlLeft','ControlRight','ShiftLeft','ShiftRight'];
    ShiftKeysCode = ['Backquote','Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash', 'Semicolon', 'Quote', 'Comma', 'Period', 'Slash',];
    ShiftKeysValue = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?'];
    ShiftKeysCode2 = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backslash', 'Slash'];
    ShiftKeysValue2 = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '|', ','];
    ShiftKeysNormalValue = ['`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', '\'', ',', '.', '/'];
    ShiftKeysNormalValue2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','\\','.'];


    constructor() {
        this._init();
        this._mouseClick();
        this._keyDown();
        this._keyUp();
        this._mouseShiftLeftDown();
        this._mouseShiftLeftUp();
        this._keyShiftLeftDown();
        this._languageValue();
        this._keyShiftRightDown();
        this._capsMouseDown();
        this._keyUpButton();
        this._mouseShiftRightDown();
        this._mouseShiftRightUp();
    }


    _init() {
        if (window.localStorage.getItem('lang')){
            this.Properties.shift = window.localStorage.getItem('lang') === 'true';
        } else {
            this.Properties.shift = true;
            window.localStorage.setItem('lang', this.Properties.shift);
        }
        document.querySelector('body').inn
        this.Element.information = document.createElement("p");
        this.Element.areaKeyBoard = document.createElement("div");
        this.Element.KeysBoard = document.createElement("div");
        this.Element.textarea = document.createElement("textarea");

        this.Element.areaKeyBoard.classList.add("areaKeyBoard");
        this.Element.KeysBoard.classList.add("keysBoard");
        this.Element.textarea.classList.add("textarea");
        this.Element.information.classList.add("inform");
        this.Element.KeysBoard.appendChild(this._createKeys());
        
        this.Element.information.innerHTML = "Сделано на Windows<br>Смена языка ctrl + alt";

        this.Element.areaKeyBoard.appendChild(this.Element.KeysBoard);
        document.body.appendChild(this.Element.areaKeyBoard);
        document.body.appendChild(this.Element.textarea);
        document.body.appendChild(this.Element.information);

        let buttons = document.querySelectorAll('.button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('id', `${this.KeysEventCode[i]}`)
        }
    }


   
    _createKeys() {
        const fragment = document.createDocumentFragment();
        const buttonToBr = ['Backspace', 'Del', 'Enter','↑' ];

        if (this.Properties.shift){
            this.KeysValuesEng.forEach(element => {
            let element1 = document.createElement('button');
            element1.classList.add('button');
            element1.setAttribute('type', 'button');
            element1.innerText = element;
            fragment.appendChild(element1);
            if (buttonToBr.includes(element)){
                fragment.appendChild(document.createElement("br"));
                }  
            })
        } else {
            this.KeysValuesRu.forEach(element => {
            let element1 = document.createElement('button');
            element1.classList.add('button');
            element1.setAttribute('type', 'button');
            element1.innerText = element;
            fragment.appendChild(element1);
            if (buttonToBr.includes(element)){
                fragment.appendChild(document.createElement("br"));
                }
            })
         }
        return fragment;
    }


    _mouseClick() {
        document.querySelector('.keysBoard').addEventListener('click',(event)=>{
            if (event.target.classList.contains('button')){
                let cursorPositionStart = this.Element.textarea.selectionEnd+1;
                let cursorPositionEnd = this.Element.textarea.selectionEnd+1;
                switch (event.target.getAttribute('id')) {
                    case "Backspace":
                        if (this.Element.textarea.selectionStart !=0){
                        this.Element.textarea.value = this.Element.textarea.value.slice(0,cursorPositionStart-2)+this.Element.textarea.value.slice(cursorPositionStart-1,this.Element.textarea.length);
                        this.Element.textarea.selectionStart = cursorPositionEnd-2;
                        this.Element.textarea.selectionEnd = cursorPositionEnd-2;
                        break;
                        }

                    case "Delete":
                        this.Element.textarea.value = this.Element.textarea.value.slice(0,cursorPositionStart-1)+this.Element.textarea.value.slice(cursorPositionStart,this.Element.textarea.length);
                        this.Element.textarea.selectionStart = cursorPositionEnd-1;
                        this.Element.textarea.selectionEnd = cursorPositionEnd-1;
                        break;

                    case "Enter":
                        this.Element.textarea.value = this.Element.textarea.value.slice(0,cursorPositionStart-1)+"\r\n"+this.Element.textarea.value.slice(cursorPositionStart-1,this.Element.textarea.length)
                        this.Element.textarea.selectionStart = cursorPositionStart;
                        this.Element.textarea.selectionEnd = cursorPositionEnd;
                        break;

                    case "Tab":
                        this.Element.textarea.value = this.Element.textarea.value.slice(0,cursorPositionStart-1)+"\t"+this.Element.textarea.value.slice(cursorPositionStart-1,this.Element.textarea.length)
                        this.Element.textarea.selectionStart = cursorPositionStart;
                        this.Element.textarea.selectionEnd = cursorPositionEnd;
                        break;

                    case "Space":
                        this.Element.textarea.value = this.Element.textarea.value.slice(0,cursorPositionStart-1)+" "+this.Element.textarea.value.slice(cursorPositionStart-1,this.Element.textarea.length)
                        this.Element.textarea.selectionStart = cursorPositionEnd;
                        this.Element.textarea.selectionEnd = cursorPositionEnd;
                        break;
        
                    case "ArrowRight":
                        this.Element.textarea.selectionStart = cursorPositionEnd;
                        this.Element.textarea.selectionEnd = cursorPositionEnd;
                        break;

                    case "ArrowLeft":
                        this.Element.textarea.selectionStart = cursorPositionEnd-2;
                        this.Element.textarea.selectionEnd = cursorPositionEnd-2;
                        break;

                    default:
                        if (!this.SystemKeys.includes(event.target.getAttribute('id')))
                            this.Element.textarea.value = this.Element.textarea.value.slice(0,cursorPositionStart-1)+event.target.innerText+this.Element.textarea.value.slice(cursorPositionStart-1,this.Element.textarea.length)
                            this.Element.textarea.selectionStart = cursorPositionEnd;
                            this.Element.textarea.selectionEnd = cursorPositionEnd;
                            break;
                } 
            }
                this.Element.textarea.focus();
        })
    }
    
   
    _keyDown() {
        let buttons = document.querySelectorAll('.button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('id', `${this.KeysEventCode[i]}`)
        }

        window.addEventListener('keydown', (event) => {
            document.querySelectorAll('.button').forEach(elem => {
                if (event.code == elem.getAttribute("id")){
                    elem.classList.add('active');
                    elem.click();
                    event.preventDefault();
                    this.Element.textarea.focus();
                }
            })
        })
    }

    _keyUp() {
        window.addEventListener('keyup', (event) => {
            document.querySelectorAll('.button').forEach(elem => {
                if (event.code == elem.getAttribute("id")) {
                    elem.classList.remove('active');
                }
            })
        })
    }


    _keyShiftLeftDown() {
        window.addEventListener('keydown', (event) => {
            if (event.code == "ShiftLeft")
                document.querySelector('#ShiftLeft').dispatchEvent(new Event('mousedown'));
        })
    }


    _keyShiftRightDown() {
        window.addEventListener('keydown', (event) => {
            if (event.code == "ShiftRight")
                document.querySelector('#ShiftLeft').dispatchEvent(new Event('mousedown'));
        })
    }    

    _mouseShiftRightDown() {
        document.querySelector('#ShiftRight').addEventListener('mousedown', (event) => {

            if (this.Properties.shift){
                for (let i = 0; i < this.ShiftKeysCode.length; i++) {
                    document.querySelector(`#${this.ShiftKeysCode[i]}`).innerText = this.ShiftKeysValue[i];
                }
            } else {
                for (let i = 0; i < this.ShiftKeysCode2.length; i++) {
                    document.querySelector(`#${this.ShiftKeysCode2[i]}`).innerText = this.ShiftKeysValue2[i];
                }
            }

            if (!this.Properties.caps){
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toUpperCase();
                })
            } else {
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toLowerCase();
                })
            }
        })
        
    }     
  
    _mouseShiftLeftDown() {
        document.querySelector('#ShiftLeft').addEventListener('mousedown', (event) => {

            if (this.Properties.shift){
                for (let i = 0; i < this.ShiftKeysCode.length; i++) {
                    document.querySelector(`#${this.ShiftKeysCode[i]}`).innerText = this.ShiftKeysValue[i];
                }
            } else {
                for (let i = 0; i < this.ShiftKeysCode2.length; i++) {
                    document.querySelector(`#${this.ShiftKeysCode2[i]}`).innerText = this.ShiftKeysValue2[i];
                }
            }

            if (!this.Properties.caps){
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toUpperCase();
                })
            } else {
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toLowerCase();
                })
            }
        })
    }


    _mouseShiftLeftUp() {
        document.querySelector('#ShiftLeft').addEventListener('mouseup', (event) => {
            if (this.Properties.shift){
                for (let i = 0; i < this.ShiftKeysCode.length; i++) {
                    document.querySelector(`#${this.ShiftKeysCode[i]}`).innerText = this.ShiftKeysNormalValue[i];               
            }
            } else {
                for (let i = 0; i < this.ShiftKeysCode2.length; i++) {
                    document.querySelector(`#${this.ShiftKeysCode2[i]}`).innerText = this.ShiftKeysNormalValue2[i]; 
                }

            }
            if (!this.Properties.caps){
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toLowerCase();
                })
            } else {
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toUpperCase();
                })
            }
        })
    }

    _mouseShiftRightUp() {
        document.querySelector('#ShiftRight').addEventListener('mouseup', (event) => {
            if (this.Properties.shift){
                for (let i = 0; i < this.ShiftKeysCode.length; i++) {
                    document.querySelector(`#${this.ShiftKeysCode[i]}`).innerText = this.ShiftKeysNormalValue[i];               
            }
            } else {
                for (let i = 0; i < this.ShiftKeysCode2.length; i++) {
                    document.querySelector(`#${this.ShiftKeysCode2[i]}`).innerText = this.ShiftKeysNormalValue2[i]; 
                }

            }
            if (!this.Properties.caps){
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toLowerCase();
                })
            } else {
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toUpperCase();
                })
            }
        })
    }

    _capsMouseDown () {
        document.querySelector('#CapsLock').addEventListener('mouseup', () => {
            this.Properties.caps =!this.Properties.caps;
            if (this.Properties.caps){
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toUpperCase();
                })
            } else {
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toLowerCase();
                })
            }
        })
    }


    _keyUpButton () {
    window.addEventListener('keyup', (event) => {
        if(event.code == "CapsLock"){
            document.querySelector('#CapsLock').dispatchEvent(new Event('mouseup'));
        }

        if (event.code == "ShiftLeft"){
            document.querySelector('#ShiftLeft').dispatchEvent(new Event('mouseup'));
        }       

        if (event.code == "ShiftRight"){
        document.querySelector('#ShiftLeft').dispatchEvent(new Event('mouseup'));
        }
        

    })
}

    _languageValue() {
        window.addEventListener('keydown', (event) => {
            if (event.code == "ControlLeft" || event.code == "ControlRight"){
                this.Properties.control = true;
                this._getLanguage();
            }
        })

        window.addEventListener('keydown', (event) => {
            if (event.code == "AltLeft" || event.code == "AltRight"){
               this.Properties.alt = true;
               this._getLanguage();
            }    
         })

        window.addEventListener('keyup', (event) => {
            if (event.code == "ControlLeft" || event.code == "ControlRight"){
                this.Properties.control = false;
                this._getLanguage();
            }
        })

        window.addEventListener('keyup', (event) => {
            if (event.code == "AltLeft" || event.code == "AltRight"){
                this.Properties.alt = false;
                this._getLanguage();
            } 
        })
    }    

    _getLanguage() {
        if ((this.Properties.control) && (this.Properties.alt)) {
            this.Properties.shift = !this.Properties.shift;
            window.localStorage.setItem('lang', this.Properties.shift);
            let i = 0;
            if (!this.Properties.shift){
                document.querySelectorAll(".button").forEach(elem => {
                    elem.innerText = this.KeysValuesRu[i];
                    i++;
                });
            } else {
                document.querySelectorAll(".button").forEach(elem => {
                    elem.innerText = this.KeysValuesEng[i];
                    i++;
                });
            }
            if (this.Properties.caps){
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toUpperCase();
                })
            } else {
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toLowerCase();
                })
            }
        }
    }
}

let keysBoard = new KeyBoard();
