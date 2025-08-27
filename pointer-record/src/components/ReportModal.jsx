import React, { useState } from 'react';

function ReportModal({ isOpen, onClose, itemToReport, onReportSubmit }) {
  const [reason, setReason] = useState('');
  const [pointType, setPointType] = useState('Horário de Entrada'); // Estado para o tipo de ponto

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reason.trim() === '' || pointType.trim() === '') {
      alert('Por favor, preencha todos os campos do reporte.');
      return;
    }
    onReportSubmit(itemToReport, pointType, reason);
    setReason('');
    setPointType('Horário de Entrada');
    onClose();
  };

  const handleCancel = () => {
    setReason('');
    setPointType('Horário de Entrada');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backdropFilter: 'blur(5px)' }}>
      <div className="bg-white p-8 rounded-lg shadow-xl w-11/12 md:w-1/3 mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Reportar Registro</h2>
        <div className="mb-4">
          <p className="text-sm text-gray-500">Você está reportando o registro de:</p>
          <p className="font-semibold text-gray-700">Data: {itemToReport.Data}</p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Novo campo de seleção */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pointType">
              Tipo de Ponto
            </label>
            <select
              id="pointType"
              value={pointType}
              onChange={(e) => setPointType(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Horário de Entrada">Horário de Entrada</option>
              <option value="Horário de Saída para o Almoço">Horário de Saída para o Almoço</option>
              <option value="Horário de Retorno do Almoço">Horário de Retorno do Almoço</option>
              <option value="Horário de Saída">Horário de Saída</option>
            </select>
          </div>
          {/* Campo de texto para o motivo */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">
              Motivo do Reporte
            </label>
            <textarea
              id="reason"
              rows="4"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Descreva o motivo do reporte..."
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-200"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              Enviar Reporte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReportModal;