export const localMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.loggedInUser = req.session.user || {};
    // console.log(res.locals.loggedInUser);
    next();
};

export const protectMiddleware = (req, res, next) => {
    if (res.locals.loggedIn) {
        return res.redirect("/");
    } else {
        next();
    }
};

export const publicMiddleware = (req, res, next) => {
    if (!res.locals.loggedIn) {
        return res.redirect("/");
    } else {
        next();
    }
};
