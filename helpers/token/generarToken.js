import jwt from 'jsonwebtoken'

const generarToken = (nombre, email) => {
    return jwt.sign({nombre, email}, process.env.JWT_SECRET,{
        expiresIn: '2d'
    })
}

export default generarToken