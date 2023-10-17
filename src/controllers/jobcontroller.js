import logger from "../configs/logger";
import { createExcelFarmacon, createExcelFemco } from "./excelcontroller";
import { spExecute, spExecuteFemco } from "./spcontroller";

export async function createReportFarmacon(){
    logger.info(`********* El proceso crear Reporte Farmacon comenzo. *******`);
    const data = await spExecute();
    await createExcelFarmacon(data);

    logger.info(`********* El proceso crear Reporte Farmacon termino. *******`);
}

export async function createReportFemco(){
    logger.info(`********* El proceso crear Reporte Femco comenzo. *******`);
    const data = await spExecuteFemco();
    await createExcelFemco(data);

    logger.info(`********* El proceso crear Reporte Femco termino. *******`);
}