import config from "./config.js";
import schedule from "node-schedule";
import {
  createReportFarmacon,
  createReportFemco,
} from "./controllers/jobcontroller.js";

schedule.scheduleJob(config.TIME_EXEC_REPORTS, async function () {
  await createReportFarmacon();
  await createReportFemco();
});
createReportFarmacon();
createReportFemco();