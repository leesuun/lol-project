export const logout = (req, res) => {
    req.session.loggedIn = false;
    req.session.user = null;
    return res.redirect("/");
};
