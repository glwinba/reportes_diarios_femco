import logger from "../configs/logger";
import { createExcelFarmacon } from "./excelcontroller";

export async function createReportFarmacon(){
    logger.info(`********* El proceso crear Reporte Farmacon comenzo. *******`);
    await createExcelFarmacon();

    logger.info(`********* El proceso crear Reporte Farmacon termino. *******`);
}