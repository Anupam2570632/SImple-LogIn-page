const newPasswordInput = document.getElementById('newPassword');
const newNameInput = document.getElementById('newName');
const logInPage = document.getElementById('LogInPage');
const newAccountPage = document.getElementById('newAccountPage');
newAccountPage.classList.add('hidden')
const loadLogInbtn = document.getElementById('loadLogIn');
const loadCreateAccount = document.getElementById('loadCreateAccount')
loadLogInbtn.classList.add('border-cyan-700');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const mainPage = document.getElementById('main-page');
const blogPage = document.getElementById('blog');


const openLogInPage = () => {
    newNameInput.value = '';
    newPasswordInput.value = '';
    loadLogInbtn.classList.add('border-cyan-700')
    loadCreateAccount.classList.remove('border-cyan-700')

    logInPage.classList.remove('hidden');
    newAccountPage.classList.add('hidden');
}

const openNewAccountPage = () => {
    nameInput.value = '';
    passwordInput.value = '';
    loadLogInbtn.classList.remove('border-cyan-700')
    loadCreateAccount.classList.add('border-cyan-700')

    newAccountPage.classList.remove('hidden');
    logInPage.classList.add('hidden');
}

const signIn = () => {
    const name = nameInput.value;
    const password = passwordInput.value;

    if (name && password.length >= 6) {
        const getData = localStorage.getItem(`${name}`);
        console.log(getData)
        if (getData === password) {
            mainPage.classList.add('hidden');
            blogPage.classList.remove('hidden');
            nameInput.value = '';
            passwordInput.value = '';
        }
        else {
            alert('Wrong password or Name Input//Or create an account')
        }
    }
    else {
        alert('Enter a name and password.Password contain at least 6 letter or character')
    }

    console.log(password, name);
}


const createAccount = () => {
    const name = newNameInput.value;
    const password = newPasswordInput.value;

    if (name && password.length >= 6) {
        localStorage.setItem(`${name}`, `${password}`);
        newNameInput.value = '';
        newPasswordInput.value = '';
        alert('Account created successfully')
    }
    else {
        alert('Enter a name and password.Password contain at least 6 letter or character');
    }

}