export const getWrite = (req, res) => {
    return res.render("write-board");
};

export const postWrite = (req, res) => {
    const {
        body: { title, contents },
        session: {
            user: { _id },
        },
    } = req;

    console.log(req.session);

    console.log(_id);

    console.log(title, contents);
    return res.send(req.body.body);
};
