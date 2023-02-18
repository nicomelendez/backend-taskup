import jwt from 'jsonwebtoken'

const generarToken = (nombre, email, id) => {
    return jwt.sign({nombre, email, id}, process.env.JWT_SECRET,{
        expiresIn: '2d'
    })
}

export default generarToken