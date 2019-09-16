const jwt = require('jsonwebtoken');

module.exports = (req, res, mext) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({ error: 'No Token provided' });
    
    const parts = authHeader.split(' ');

    if (!parts.length === 2) 
        return res.status(401).send({ error: 'Token error' });

    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme)) 
        return res.status(401).send({ error: 'Token malformatted' });

    jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token invalid' });

        req.userID = decoded.id;
        return next();
    });
    
}