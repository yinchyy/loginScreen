class validation{
    static errClass = "dataError";
    static validateLogin() {
        const login = document.getElementById("login");
        if(!/^\w{4,}/.test(login.value)){
            login.className= this.errClass;
        }
        else{
            login.className="";
        }        
    }
    static validatePasswordOnly() {
        const passwordField=document.getElementById("passwordField");
        if(passwordField.value.length>=8 && passwordField.value.match(/[0-9]+/) && passwordField.value.match(/[a-z]+/) && passwordField.value.match(/[A-Z]+/) && passwordField.value.match(/[^0-9a-zA-Z]+/)){
            passwordField.className = "";
            return true;
        }
        else{
            passwordField.className = this.errClass;
            return false;
        }
       
    }

    static validateFormInputs() {
        const passwordField=document.getElementById("passwordField");
        const repeatPassword = document.getElementById("passwordRepeat");
        const phoneNum = document.getElementById("phoneNum");
        const email = document.getElementById("email");
        const zipcode = document.getElementById("zipcode");
        const submitButton = document.getElementById("submitButton");
        const mailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
        validation.validateLogin();
        if ((mailRegex.test(email.value))) {
            email.className="";
        }
        else{
            email.className = this.errClass;
        }
        if (validation.validatePasswordOnly()) {
            if (repeatPassword.value === passwordField.value) {
                repeatPassword.className = "";
            }
        }
        else {
            repeatPassword.className = this.errClass;
        }
        if(!/^\+48[0-9]{9}/.test(phoneNum.value) || phoneNum.value.length != 12){
            phoneNum.className=this.errClass;
        }
        else{
            phoneNum.className="";
        }
        if(/^[0-9]{2}-[0-9]{3}/.test(zipcode.value) && zipcode.value.length === 6){
            zipcode.className = "";
        }
        else{
            zipcode.className = this.errClass;
        }
        if (validation.isSubmitAllowed())
        {
            submitButton.className="";
        }
        else{
            submitButton.className = "inactive";
        }
    }
    static isSubmitAllowed() {
        if(document.getElementsByClassName(this.errClass).length === 0)
        {
            return true;
        }
        else{
            return false;
        }   
    }
    static validateLoginPage() {
        validation.validateLogin();
        validation.validatePasswordOnly();
        if (validation.isSubmitAllowed())
        {
            submitButton.className="";
        }
        else{
            submitButton.className = "inactive";
        }
    }
    static listenForChangesInInputs(target) {
        const elems = document.querySelectorAll("input");
        if (target.toLowerCase() === "login") {
            for(let elem of elems){
                elem.addEventListener("keyup",()=>{
                    validation.validateLoginPage();
                });
            }
        }
        else if (target.toLowerCase() === "register") {
            for(let elem of elems){
                elem.addEventListener("keyup",()=>{
                  validation.validateFormInputs();
                });
            }    
        }
    }
};