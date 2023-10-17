import { sequelize } from "../database/connection.js";

export async function spExecute() {
  try {
    let data = await sequelize.query(
      `EXEC [BM_SERV_ESP].[SP_MAILS_PROVEEDORES] @OPCION = 9, @EMPRESA_ID = '868'`
    );
    return data;
  } catch (error) {}
}

export async function spExecuteFemco() {
  try {
    let data = [];
    let data_immex = await sequelize.query(
      `EXEC [BM_SERV_ESP].[SP_MAILS_PROVEEDORES] @OPCION = 9, @EMPRESA_ID = '869'`
    );
    let data_i78 = await sequelize.query(
      `EXEC [BM_SERV_ESP].[SP_MAILS_PROVEEDORES] @OPCION = 9, @EMPRESA_ID = '907'`
    );
    let data_ccoxxo = await sequelize.query(
      `EXEC [BM_SERV_ESP].[SP_MAILS_PROVEEDORES] @OPCION = 9, @EMPRESA_ID = '439'`
    );
    let data_oxxogas = await sequelize.query(
      `EXEC [BM_SERV_ESP].[SP_MAILS_PROVEEDORES] @OPCION = 9, @EMPRESA_ID = '442'`
    );

    data_immex[0].forEach(element => {
      data.push(element);
    });
    data_i78[0].forEach(element => {
      data.push(element);
    });
    data_ccoxxo[0].forEach(element => {
      data.push(element);
    });
    data_oxxogas[0].forEach(element => {
      data.push(element);
    });

    return data;
  } catch (error) {}
}
