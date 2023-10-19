import config from "./config";
import schedule from "node-schedule";
import {
  createReportFarmacon,
  createReportFemco,
} from "./controllers/jobcontroller";

schedule.scheduleJob(config.TIME_EXEC_REPORTS, async function () {
  await createReportFarmacon();
  await createReportFemco();
});
