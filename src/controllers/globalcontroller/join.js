export const getJoin = (req, res) => {
    return res.render("join");
};

export const postJoin = (req, res) => {
    const {
        body: { userid, password, paswwrod2, nickname },
    } = req;

    console.log(req.body);
    return res.end();
};
