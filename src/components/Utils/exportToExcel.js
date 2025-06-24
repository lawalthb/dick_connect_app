import * as XLSX from 'xlsx';

export const exportToExcel = (data, columns, fileName = 'advert_data') => {
  const formattedData = data.map((item) => {
    const row = {};
    columns.forEach((col) => {
      let value = item[col.key];
      if (col.key.toLowerCase().includes('date') && value instanceof Date) {
        value = value.toISOString().split('T')[0];
      }
      row[col.label] = value;
    });
    return row;
  });

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Adverts');

  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};
