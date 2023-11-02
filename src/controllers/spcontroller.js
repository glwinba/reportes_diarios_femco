import sequelize  from "../database/connection.js";
import { notificationMailError } from "./notificationcontroller.js";

export async function spExecute() {
  try {
    let data = await sequelize.query(
      `EXEC [BM_SERV_ESP].[SP_MAILS_PROVEEDORES] @OPCION = 9, @EMPRESA_ID = '868'`
    );
    return data;
  } catch (error) {
    notificationMailError(`Error al ejecutar SP Farmacon ${error}`);
  }
}

export async function spExecuteFemco() {
  try {
    const empresaIds = ["869", "907", "439", "442", "868"];
    const promises = empresaIds.map(async (empresaId) => {
      const result = await sequelize.query(
        `EXEC [BM_SERV_ESP].[SP_MAILS_PROVEEDORES] @OPCION = 9, @EMPRESA_ID = '${empresaId}'`
      );
      return result[0];
    });

    const results = await Promise.all(promises);
    const data = results.flat(); 

    return data;
  } catch (error) {
    notificationMailError(`Error al ejecutar SP Femco ${error}`);
  }
}
