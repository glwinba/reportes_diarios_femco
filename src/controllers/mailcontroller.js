import config from "../config.js";
import handlebars from "handlebars";
import fs from "fs";
import logger from "../configs/logger.js";
import { dateFormatLetter } from "../helpers/dateHelper.js";
import { transporter } from "../configs/mailconfig.js";

const htmlFileFarmacon = `${__dirname}/../templates/farmacon.html`;

export const sendMail = (pathDoc) =>
  new Promise((resolve, reject) => {
    const dateFileName = dateFormatLetter();
    const htmlSync = fs.readFileSync(htmlFileFarmacon, { encoding: "utf-8" });
    const template = handlebars.compile(htmlSync);
    const htmlToSend = template();

    const mailConfigs = {
      from: config.MAIL_USER,
      to: "oscar.gloria@yza.mx",
      subject: `FARMACON / REPORTE DIARIO ${dateFileName}`,
      html: htmlToSend,
      cc: [
        "aespindola@glwinba.com",
        "cfonseca@glwinba.com"
      ],
      attachments: [
        {
          filename: pathDoc[1],
          path: pathDoc[0],
        },
      ],
    };
    transporter.sendMail(mailConfigs, (error, info) => {
      if (error) {
        notificationMailError(`Error en el envio de mail ${error}`);
        reject(error);
      } else {
        logger.info(`El correo se envio correctamente`);
        resolve(info);
      }
    });
  });


  export const sendMailFemco = (pathDoc) =>
  new Promise((resolve, reject) => {
    const dateFileName = dateFormatLetter();
    const htmlSync = fs.readFileSync(htmlFileFarmacon, { encoding: "utf-8" });
    const template = handlebars.compile(htmlSync);
    const htmlToSend = template();

    const mailConfigs = {
      from: config.MAIL_USER,
      to: "aespindola@glwinba.com",
      subject: `FEMCO / REPORTE DIARIO ${dateFileName}`,
      html: htmlToSend,
      cc: [
        "cfonseca@glwinba.com"
      ],
      attachments: [
        {
          filename: pathDoc[1],
          path: pathDoc[0],
        },
      ],
    };
    transporter.sendMail(mailConfigs, (error, info) => {
      if (error) {
        notificationMailError(`Error en el envio de mail ${error}`);
        reject(error);
      } else {
        logger.info(`El correo se envio correctamente`);
        resolve(info);
      }
    });
  });