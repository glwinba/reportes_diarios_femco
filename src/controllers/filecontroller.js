import fs from "fs";
import logger from "../configs/logger.js";
import { notificationMailError } from "./notificationcontroller.js";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
export const removeFilesReports = async (file) => {
  fs.rm(file, function (err) {
    if (err)
      notificationMailError(`Error al remover el file: ${file} error: ${err}`);
  });
  logger.info(`Se removieron correctamente todos los archivos generados.`);
};

export function fileExist() {
  try {
    if (
      fs.existsSync(`${__dirname}/../files`) &&
      fs.existsSync(`${__dirname}/../logs`)
    ) {
      return logger.info("Las carpetas estan creadas correctamente.");
    }
    if (!fs.existsSync(`${__dirname}/../files`)) {
      fs.mkdirSync(`${__dirname}/../files`, { recursive: true });
    }

    if (!fs.existsSync(`${__dirname}/../logs`)) {
      fs.mkdirSync(`${__dirname}/../logs`, { recursive: true });
    }

    return logger.info("La carpeta no existe pero se creo nuevamente.");
  } catch (error) {
    notificationMailError(`Error al crear las carpetas...`);
  }
}
