export const cabeceras = [
  "Año",
  "Mes cumplimiento",
  "Empresa FEMCO",
  "Plaza",
  "RFC Proveedor",
  "Razon social",
  "Score %",
  "CFDI Nomina",
  "Declaración IVA",
  "Registro STPS",
  "Estatus de Registro",
  "Pago COP",
  "Pago INFONA",
  "Pago IVA",
  "Pago Ret - ISR",
  "Acuse IMSS",
  "Acuse INFONA",
  "Acuse IVA",
  "CDP",
  "CFDI Servicio",
  "Contrato",
  "Listado Trabajadores",
  "ODC",
  "faltan",
];

export const cellsExcel = [
  { nombre: "Año", type: "number" },
  { nombre: "Mes cumplimiento", type: "string" },
  { nombre: "Empresa FEMCO", type: "string" },
  { nombre: "Plaza", type: "string" },
  { nombre: "RFC Proveedor", type: "string" },
  { nombre: "Razon social", type: "string" },
  { nombre: "Score %", type: "number" },
  { nombre: "CFDI Nomina", type: "number" },
  { nombre: "Declaración IVA", type: "number" },
  { nombre: "Registro STPS", type: "number" },
  { nombre: "Estatus de Registro", type: "number" },
  { nombre: "Pago COP", type: "number" },
  { nombre: "Pago INFONA", type: "number" },
  { nombre: "Pago IVA", type: "number" },
  { nombre: "Pago Ret - ISR", type: "number" },
  { nombre: "Acuse IMSS", type: "number" },
  { nombre: "Acuse INFONA", type: "number" },
  { nombre: "Acuse IVA", type: "number" },
  { nombre: "CDP", type: "number" },
  { nombre: "CFDI Servicio", type: "number" },
  { nombre: "Contrato", type: "number" },
  { nombre: "Listado Trabajadores", type: "number" },
  { nombre: "ODC", type: "number" },
  { nombre: "faltan", type: "number" },
];

export const styleCabeceras = {
  font: {
    color: "#ffffff",
    size: 11,
    bold: true,
  },
  fill: {
    type: "pattern",
    patternType: "solid",
    bgColor: "#4472C4",
    fgColor: "#4472C4",
  },
  border: {
    left: {
      style: "thin",
      color: "black",
    },
    right: {
      style: "thin",
      color: "black",
    },
    top: {
      style: "thin",
      color: "black",
    },
    bottom: {
      style: "thin",
      color: "black",
    },
    outline: false,
  },
};

export const styleCells = {
  font: {
    color: "#000000",
    size: 11,
  },
  border: {
    left: {
      style: "thin",
      color: "black",
    },
    right: {
      style: "thin",
      color: "black",
    },
    top: {
      style: "thin",
      color: "black",
    },
    bottom: {
      style: "thin",
      color: "black",
    },
    outline: false,
  },
};
