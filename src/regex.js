const regex = {
    userid: /^(?=.*[a-zA-Z])((?=.*\d)).{6,15}$/,
    password: /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/,
};

export default regex;
