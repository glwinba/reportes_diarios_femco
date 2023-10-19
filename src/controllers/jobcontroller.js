import logger from "../configs/logger";
import { createExcelFarmacon, createExcelFemco } from "./excelcontroller";
import { removeFilesReports } from "./filecontroller";
import { sendMail, sendMailFemco } from "./mailcontroller";
import { notificationMailError } from "./notificationcontroller";
import { spExecute, spExecuteFemco } from "./spcontroller";

export async function createReportFarmacon() {
  logger.info(`********* El proceso crear Reporte Farmacon comenzo. *******`);
  try {
    const data = await spExecute();
    const path = await createExcelFarmacon(data);
    await sendMail(path);
    await removeFilesReports(path[0]);
    logger.info(`********* El proceso crear Reporte Farmacon termino. *******`);
  } catch (error) {
    notificationMailError(`Error en el envio de mail ${error}`);
  }
}

export async function createReportFemco() {
  logger.info(`********* El proceso crear Reporte Femco comenzo. *******`);
  try {
    const data = await spExecuteFemco();
    const path = await createExcelFemco(data);
    await sendMailFemco(path);
    await removeFilesReports(path[0]);
    logger.info(`********* El proceso crear Reporte Femco termino. *******`);
  } catch (error) {
    notificationMailError(`Error en el envio de mail ${error}`);
  }
}
