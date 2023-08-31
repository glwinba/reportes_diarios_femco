import xl from "excel4node";
import { dateFormatLetter } from "../helpers/dateHelper";
import { cabeceras, cellsExcel, styleCabeceras } from "../arreglos/excelArrays";
import path from "path";

export const createExcelFarmacon = async (data) =>
  new Promise((resolve, reject) => {
    let wb = new xl.Workbook();
    let ws = wb.addWorksheet("DST CESE - Reporte cumplimiento");
    const date = dateFormatLetter();
    const namePath = `DST CESE - Reporte cumplimiento FARMACON ${date}.xlsx`;
    const pathExcel = path.join(`${__dirname}/../files/${namePath}`);
    const styleCabecera = wb.createStyle(styleCabeceras);
    const styleCells = wb.createStyle();

    for (const [index, value] of cabeceras.entries()) {
      ws.cell(1, index + 1)
        .string(value)
        .style(styleCabecera);
    }

    for (const [indexData, valueData] of data) {
      for (const [indexCells, valueCells] of cellsExcel.entries()) {
        ws.cell(indexData + 2, indexCells + 1).string(
          valueData[valueCells.nombre]
        ).style(styleCells);
      }
    }

    wb.write(pathExcel, (error, stats) => {
      if (error) {
        console.log(`Hubo un error: ${error}`);
        reject(error);
      } else {
        resolve([pathExcel, namePath]);
      }
    });
  });
