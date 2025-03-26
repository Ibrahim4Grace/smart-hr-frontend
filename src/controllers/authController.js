export const registerPage = (req, res) => {
    res.render('auth/register');
};
export const forgetPasswordPage = (req, res) => {
    res.render('auth/forget-password');
};
export const otpPage = (req, res) => {
    res.render('auth/otp');
};
export const resetPasswordPage = (req, res) => {
    res.render('auth/reset-password');
};
export const authPage = (req, res) => {
    res.render('auth/login');
};
