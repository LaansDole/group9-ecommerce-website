const { createJWT } = require("./jwt");

const attachCookiesToResponse = ({ res, user, refreshToken }) => {
    const accessTokenJWT = createJWT(
        { payload: { user } },
        process.env.JWT_SECRET
    );
    const refreshTokenJWT = createJWT(
        { payload: { user, refreshToken } },
        process.env.JWT_SECRET
    );

    const oneDay = 1000 * 60 * 60 * 24;
    const longerExp = 1000 * 60 * 60 * 24 * 30;

    res.cookie("accessToken", accessTokenJWT, {
        httpOnly: true,
        // secure: true, // later in production
        samesite: "strict",
        expires: new Date(Date.now() + oneDay),
    });

    res.cookie("refreshToken", refreshTokenJWT, {
        httpOnly: true,
        // secure: true, // later in production
        samesite: "strict",
        expires: new Date(Date.now() + longerExp),
    });
};

module.exports = attachCookiesToResponse;