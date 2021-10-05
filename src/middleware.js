export const localMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.loggedInUser = req.session.user || {};
    res.locals.userInfo = req.session.userInfo;
    // console.log(res.locals.loggedInUser);
    next();
};

export const protectMiddleware = (req, res, next) => {
    //비로그인 유저 기능 제한 미들웨어
    if (!res.locals.loggedIn) {
        return res.redirect("/");
    } else {
        next();
    }
};

export const publicMiddleware = (req, res, next) => {
    // 로그인 유저 페이지 이동 제한
    if (!res.locals.loggedIn) {
        next();
    } else {
        return res.redirect("/");
    }
};
