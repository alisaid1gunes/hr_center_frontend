import { autoFitColumns } from "./autoFitColumns";
import * as XLSX from "xlsx/xlsx.mjs";

export const handleExcel = (applicantList) => {
  const ws = XLSX.utils.json_to_sheet(applicantList);
  const wscols = autoFitColumns(applicantList, ws);
  ws["!cols"] = wscols;
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, "applicants.xlsx");
};
