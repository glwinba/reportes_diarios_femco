import xl from "excel4node";
import { dateFormatLetter } from "../helpers/dateHelper.js";
import {
  cabeceras,
  cellsExcel,
  styleCabeceras,
} from "../arreglos/excelArrays.js";
import path from "path";
import {
  capitalizarPrimerLetra,
  formatScore,
  orderArray,
  orderArrayFemco,
} from "../helpers/orderData.js";
import { notificationMailError } from "./notificationcontroller.js";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
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
    ws.row(1).filter();

    for (let a = 0; a < data_ordenada.length; a++) {
      for (let cells = 0; cells < cellsExcel.length; cells++) {
        const element = cellsExcel[cells];
        if (element.type != "string") {
          ws.cell(a + 2, cells + 1)
            .number(data_ordenada[a][element.nombre])
            .style(styleCells);
        } else {
          if (element.nombre === "EMPRESA_CONTRATANTE") {
            ws.cell(a + 2, cells + 1)
              .string("FARMACON")
              .style(styleCells);
          } else if (element.nombre === "EMPRESA_CONTRATANTE2") {
            ws.cell(a + 2, cells + 1)
              .string("NACIONAL")
              .style(styleCells);
          } else if (element.nombre === "MES_CUMPLIMIENTO") {
            ws.cell(a + 2, cells + 1)
              .string(capitalizarPrimerLetra(data_ordenada[a][element.nombre]))
              .style(styleCells);
          } else if (element.nombre === "Score") {
            ws.cell(a + 2, cells + 1)
              .number(formatScore(data_ordenada[a][element.nombre]))
              .style(styleCells);
          } else {
            ws.cell(a + 2, cells + 1)
              .string(data_ordenada[a][element.nombre])
              .style(styleCells);
          }
        }
      }
    }

    wb.write(pathExcel, (error, stats) => {
      if (error) {
        notificationMailError(`Error al crear excel ${error}`);
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
    ws.row(1).filter();

    for (let a = 0; a < data_ordenada.length; a++) {
      for (let cells = 0; cells < cellsExcel.length; cells++) {
        const element = cellsExcel[cells];
        if (element.type != "string") {
          ws.cell(a + 2, cells + 1)
            .number(data_ordenada[a][element.nombre])
            .style(styleCells);
        } else {
          if (element.nombre === "EMPRESA_CONTRATANTE") {
            switch (data_ordenada[a][element.nombre]) {
              case "FARMACON S.A. DE C.V.":
                ws.cell(a + 2, cells + 1)
                  .string("FARMACON")
                  .style(styleCells);
                break;
              case "CADENA COMERCIAL OXXO, S.A. DE C.V":
                ws.cell(a + 2, cells + 1)
                  .string("OXXO")
                  .style(styleCells);
                break;
              case "IMPULSORA DE MERCADOS DE MEXICO SA DE CV":
                ws.cell(a + 2, cells + 1)
                  .string("IMMEX")
                  .style(styleCells);
                break;
              case "SERVICIOS GASOLINEROS DE MÉXICO SA DE CV":
                ws.cell(a + 2, cells + 1)
                  .string("SERVICIOS GASOLINEROS DE MÉXICO SA DE CV")
                  .style(styleCells);
                break;
              case "INMOBILIARIA 78 SA DE CV":
                ws.cell(a + 2, cells + 1)
                  .string("INMOBILIARIA 78 SA DE CV")
                  .style(styleCells);
                break;
            }
          } else if (element.nombre === "EMPRESA_CONTRATANTE2") {
            switch (data_ordenada[a]["EMPRESA_CONTRATANTE"]) {
              case "FARMACON S.A. DE C.V.":
                ws.cell(a + 2, cells + 1)
                  .string("NACIONAL")
                  .style(styleCells);
                break;
              case "CADENA COMERCIAL OXXO, S.A. DE C.V":
                ws.cell(a + 2, cells + 1)
                  .string("CADENA COMERCIAL OXXO, S.A. DE C.V")
                  .style(styleCells);
                break;
              case "IMPULSORA DE MERCADOS DE MEXICO SA DE CV":
                ws.cell(a + 2, cells + 1)
                  .string("NACIONAL")
                  .style(styleCells);
                break;
              case "SERVICIOS GASOLINEROS DE MÉXICO SA DE CV":
                ws.cell(a + 2, cells + 1)
                  .string("SERVICIOS GASOLINEROS DE MÉXICO SA DE CV")
                  .style(styleCells);
                break;
              case "INMOBILIARIA 78 SA DE CV":
                ws.cell(a + 2, cells + 1)
                  .string("INMOBILIARIA 78 SA DE CV")
                  .style(styleCells);
                break;
            }
          } else if (element.nombre === "MES_CUMPLIMIENTO") {
            ws.cell(a + 2, cells + 1)
              .string(capitalizarPrimerLetra(data_ordenada[a][element.nombre]))
              .style(styleCells);
          } else if (element.nombre === "Score") {
            ws.cell(a + 2, cells + 1)
              .number(formatScore(data_ordenada[a][element.nombre]))
              .style(styleCells);
          } else {
            ws.cell(a + 2, cells + 1)
              .string(data_ordenada[a][element.nombre])
              .style(styleCells);
          }
        }
      }
    }

    wb.write(pathExcel, (error, stats) => {
      if (error) {
        notificationMailError(`Error al crear excel femco ${error}`);
        reject(error);
      } else {
        resolve([pathExcel, namePath]);
      }
    });
  });
