class pageGeneration{
    static generatePage(target) {
        const container = document.getElementsByClassName("content")[0];
        if (target.toLowerCase() === "register") {
            container.innerHTML = `<form id="registerForm">
            <label for="login">Login:</label>
            <input type="text" id="login" placeholder="jdoe" required/>
            <label for="email">Email:</label>
            <input type="text" id="email" placeholder="jdoe@example.xyz" required/>
            <label for="passwordField">Password:</label>
            <input id='passwordField' placeholder="type password here" type="password"required/>
            <label for="passwordRepeat">Repeat password:</label>
            <input id='passwordRepeat' placeholder="repeat password" type="password"required/>
            <label for="phoneNum">Phone number:</label>
            <input type="text" id="phoneNum" placeholder="+48123456789" required/>
            <label for="zipcode">ZIP code:</label>
            <input type="text" id="zipcode" placeholder="12-345" required/>
            <button id="submitButton" type="submit">Zarejestruj</button>
            <a onclick="pageGeneration.generatePage('login')">Already have an account? Click here to login</a>
        </form>`;
        }
        else if (target.toLowerCase() === "login") {
            container.innerHTML = `<form id="registerForm">
            <label for="login">Login:</label>
            <input type="text" id="login" placeholder="jdoe" required/>
            <label for="passwordField">Password:</label>
            <input id='passwordField' placeholder="type password here" type="password"required/>
            <button id="submitButton" type="submit">Zaloguj</button>
            <a onclick="pageGeneration.generatePage('register')">No account yet? Click here to register</a>
        </form>`;
        }
        validation.listenForChangesInInputs(target);
    }
};