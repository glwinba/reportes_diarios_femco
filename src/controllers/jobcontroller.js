import logger from "../configs/logger.js";
import { createExcelFarmacon, createExcelFemco } from "./excelcontroller.js";
import { fileExist, removeFilesReports } from "./filecontroller.js";
import { sendMail, sendMailFemco } from "./mailcontroller.js";
import { notificationMailError } from "./notificationcontroller.js";
import { spExecute, spExecuteFemco } from "./spcontroller.js";

export async function createReportFarmacon() {
  logger.info(`********* El proceso crear Reporte Farmacon comenzo. *******`);
  try {
    await fileExist();
    const data = await spExecute();
    const path = await createExcelFarmacon(data);
    await sendMail(path);
    await removeFilesReports(path[0]);
    logger.info(`********* El proceso crear Reporte Farmacon termino. *******`);
  } catch (error) {
    notificationMailError(`Error al ejecutar funcion FARMACON ${error}`);
  }
}

export async function createReportFemco() {
  logger.info(`********* El proceso crear Reporte Femco comenzo. *******`);
  try {
    await fileExist();
    const data = await spExecuteFemco();
    const path = await createExcelFemco(data);
    await sendMailFemco(path);
    await removeFilesReports(path[0]);
    logger.info(`********* El proceso crear Reporte Femco termino. *******`);
  } catch (error) {
    notificationMailError(`Error al ejecutar funcion FEMCO ${error}`);
  }
}
