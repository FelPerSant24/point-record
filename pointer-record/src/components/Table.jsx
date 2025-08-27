import React, { useState } from 'react'; // Importe useState
import { MdOutlineReport } from 'react-icons/md';
import ReportModal from './ReportModal'; // Importe o modal
import { toast } from 'react-toastify';

function Table({ data, withReportButton = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center p-8">
        <p className="text-gray-500 italic">Nenhum dado de ponto para exibir.</p>
      </div>
    );
  }

  const headers = [
    "Data",
    "Horário de Entrada",
    "Horário de Saída para o Almoço",
    "Horário de Retorno do Almoço",
    "Horário de Saída",
    "Total de Horas Trabalhadas"
  ];

  const handleReportClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleReportSubmit = (item, reason) => {
    // Lógica para enviar o reporte para o servidor ou API
    console.log("Registro a ser reportado:", item);
    console.log("Motivo:", reason);
    
    // Mostra um toast de sucesso
    toast.success('Reporte enviado com sucesso!', {
      position: "bottom-right"
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
            {withReportButton && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reporte
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {item[header]}
                </td>
              ))}
              {withReportButton && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleReportClick(item)} title="Reportar">
                    <MdOutlineReport size={20} color="#EF4444" />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedItem && (
        <ReportModal
          isOpen={isModalOpen}
          onClose={closeModal}
          itemToReport={selectedItem}
          onReportSubmit={handleReportSubmit}
        />
      )}
    </div>
  );
}

export default Table;