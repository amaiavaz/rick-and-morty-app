import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json({message: "No autorizado"});
  }
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res.status(401).json({message: "No autorizado"});
  }

  jwt.verify(token, "patata", (error, decoded) => {
    if (error) {
      res.status(401).json({message: "No autorizado"});
    } else {
      console.log(decoded);
      const {id} = decoded;
      req.user_id = id;
      next();
    }
  });
}