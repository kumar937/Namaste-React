export const formValidator = (email, password, name, isSignUpForm) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
    const isNameValid = /^[A-Za-z\s]{2,50}$/.test(name);

    if(!isEmailValid){
        return 'Invalid email address';
    }
    if(!isPasswordValid){
        return 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character';
    }
    if(isSignUpForm && !isNameValid){
        return 'Name must be between 2 and 50 characters long and contain only letters and spaces';
    }
    
    return null;
}
