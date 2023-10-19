import xl from "excel4node";
import { dateFormatLetter } from "../helpers/dateHelper";
import { cabeceras, cellsExcel, styleCabeceras } from "../arreglos/excelArrays";
import path from "path";
import { orderArray, orderArrayFemco } from "../helpers/orderData";
import { notificationMailError } from "./notificationcontroller";

export const createExcelFarmacon = (data) =>
  new Promise((resolve, reject) => {
    let wb = new xl.Workbook();
    let ws = wb.addWorksheet("DST CESE - Reporte cumplimiento");
    const date = dateFormatLetter();
    const namePath = `DST CESE - Reporte cumplimiento FARMACON ${date}.xlsx`;
    const pathExcel = path.join(`${__dirname}/../files/${namePath}`);
    const styleCabecera = wb.createStyle(styleCabeceras);
    const styleCells = wb.createStyle();
    const data_ordenada = orderArray(data[0]);
    for (const [index, value] of cabeceras.entries()) {
      ws.cell(1, index + 1)
        .string(value)
        .style(styleCabecera);
    }

    for (let a = 0; a < data_ordenada.length; a++) {
      for (let cells = 0; cells < cellsExcel.length; cells++) {
        const element = cellsExcel[cells];
        if (element.type != "string") {
          ws.cell(a + 2, cells + 1)
            .number(data_ordenada[a][element.nombre])
            .style(styleCells);
        } else {
          ws.cell(a + 2, cells + 1)
            .string(data_ordenada[a][element.nombre])
            .style(styleCells);
        }
      }
    }

    wb.write(pathExcel, (error, stats) => {
      if (error) {
        notificationMailError(`Error en el envio de mail ${error}`);
        reject(error);
      } else {
        resolve([pathExcel, namePath]);
      }
    });
  });

export const createExcelFemco = (data) =>
  new Promise((resolve, reject) => {
    let wb = new xl.Workbook();
    let ws = wb.addWorksheet("DST CESE - Reporte cumplimiento");
    const date = dateFormatLetter();
    const namePath = `DST CESE - Reporte cumplimiento CADENA_IMMEX_SEGAMEX ${date}.xlsx`;
    const pathExcel = path.join(`${__dirname}/../files/${namePath}`);
    const styleCabecera = wb.createStyle(styleCabeceras);
    const styleCells = wb.createStyle();
    const data_ordenada = orderArrayFemco(data);
    for (const [index, value] of cabeceras.entries()) {
      ws.cell(1, index + 1)
        .string(value)
        .style(styleCabecera);
    }

    for (let a = 0; a < data_ordenada.length; a++) {
      for (let cells = 0; cells < cellsExcel.length; cells++) {
        const element = cellsExcel[cells];
        if (element.type != "string") {
          ws.cell(a + 2, cells + 1)
            .number(data_ordenada[a][element.nombre])
            .style(styleCells);
        } else {
          ws.cell(a + 2, cells + 1)
            .string(data_ordenada[a][element.nombre])
            .style(styleCells);
        }
      }
    }

    wb.write(pathExcel, (error, stats) => {
      if (error) {
        notificationMailError(`Error en el envio de mail ${error}`);
        reject(error);
      } else {
        resolve([pathExcel, namePath]);
      }
    });
  });
