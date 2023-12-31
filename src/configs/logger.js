import { createLogger, format, transports } from "winston";
import * as url from "url";

const timeZoned = () => {
  return new Date().toLocaleString("es-MX", {
    timeZone: "America/Mexico_City",
  });
};

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default createLogger({
  format: format.combine(
    format.simple(),
    format.timestamp({
      format: timeZoned,
    }),
    format.printf(
      (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
    )
  ),
  transports: [
    new transports.File({
      maxsize: 5120000,
      maxFiles: 5,
      filename: `${__dirname}/../logs/logs-file.log`,
    }),
    new transports.Console({
      level: "debug",
    }),
  ],
});
