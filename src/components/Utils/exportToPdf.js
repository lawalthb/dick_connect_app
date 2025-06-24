import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const exportToPdf = (data, columns, filename = 'advert_data.pdf') => {
  const doc = new jsPDF();

  const tableColumn = columns.map((col) => col.label);
  const tableRows = data.map((row) => columns.map((col) => row[col.key]));

  doc.text('Advert Data Export', 14, 15);

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 20,
    styles: { fontSize: 8 },
    headStyles: { fillColor: [162, 0, 48] },
  });

  doc.save(filename);
};
