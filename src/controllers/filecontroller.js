import fs from "fs";
import logger from "../configs/logger";
import { notificationMailError } from "./notificationcontroller";

export const removeFilesReports = async (file) => {
    fs.rm(file, function (err) {
      if (err)
        notificationMailError(`Error al remover el file: ${file} error: ${err}`);
    });
    logger.info(`Se removieron correctamente todos los archivos generados.`);
  };