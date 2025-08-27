import { MdOutlineReport } from "react-icons/md";
import Table from "../../components/Table";

function Reports() {
    const reportsData = [
    {
      "Data": "23/08/2025",
      "Horário de Entrada": "08:00",
      "Horário de Saída para o Almoço": "12:00",
      "Horário de Retorno do Almoço": "13:00",
      "Horário de Saída": "17:00",
      "Total de Horas Trabalhadas": "8h"
    },
    {
      "Data": "23/08/2025",
      "Horário de Entrada": "09:00",
      "Horário de Saída para o Almoço": "13:00",
      "Horário de Retorno do Almoço": "14:00",
      "Horário de Saída": "18:00",
      "Total de Horas Trabalhadas": "8h"
    },
  ];
    return (
        <div>
            <Table 
            data={reportsData}
            withReportButton="true"
            />
        </div>
    )
}

export default  Reports;