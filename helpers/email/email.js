import nodemailer from "nodemailer";

export const emailRegistro = async ({ nombre, email, token }) => {
  const transport = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASSWORD_EMAIL,
    },
  });

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "UpTask - Confirma tu cuenta",
    text: `Confirma tu cuenta de UpTask`,
    html: `
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f2f2f2;">
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px; box-shadow: 1px 1px 3px black; background-color: white; padding: 20px;">
                <h2 style="text-align: center;">UpTask</h2>
                <p>Hola ${nombre}, comprueba tu cuenta en UpTask.</p>
                <p>Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace:</p>
                <a href="${process.env.URL_FONTEND}/confirmar/${token}" style="background-color: #2d3ead; color: white; border-radius: 9999px; padding: 10px 20px; text-decoration: none; box-shadow: 1px 1px 3px black; font-weight: bold;">Comprobar cuenta</a>
                <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje.</p>
            </div>
        </div>
    `,
  });
};

export const emailOlvidePassword = async ({ nombre, email, token }) => {
  const transport = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASSWORD_EMAIL,
    },
  });

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "UpTask - Reestablece tu contraseña",
    text: `Reestablece tu contraseña de UpTask`,
    html: `
          <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f2f2f2;">
              <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px; box-shadow: 1px 1px 3px black; background-color: white; padding: 20px;">
                  <h2 style="text-align: center;">UpTask</h2>
                  <p>Hola ${nombre}, has solicitado reestablecer la contraseña de tu cuenta en UpTask.</p>
                  <p>Ya está casi estas por reestablecer tu cuenta, solo debes entrar en el siguiente enlace:</p>
                  <a href="${process.env.URL_FONTEND}/olvide-password/${token}" style="background-color: #2d3ead; color: white; border-radius: 9999px; padding: 10px 20px; text-decoration: none; box-shadow: 1px 1px 3px black; font-weight: bold;">Reestablecer contraseña</a>
                  <p>Si tu no solicitaste este email, puedes ignorar el mensaje.</p>
              </div>
          </div>
      `,
  });
};
