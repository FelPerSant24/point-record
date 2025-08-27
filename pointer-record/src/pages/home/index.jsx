import { useState, useEffect,} from "react";
import { Link } from "react-router-dom";
function Home() {
  const [registerTime, setRegisterTime] = useState()
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000)

    return () => {
        clearInterval(timer);
    }
  }, [])

  function registerTimeFunction() {
    const time = formatTime(currentTime)
    setRegisterTime(time)
    console.log(`Horário registrado:  + ${time}`)
  }

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");

    const months = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

    const daysOfWeek = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];

  const weekDay = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()]
  const year = date.getFullYear();

    return `${weekDay} - ${day}  ${month}  ${year}`
  }

  //aqui nessa porra
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="text-gray-600 font-medium">{formatDate(currentTime)}</div>
          <div className="flex items-center">
            <div>
              <div className="font-semibold text-gray-800">Nome do agente</div>
              <div className="text-sm text-gray-500">Junior Posição</div>
            </div>
          </div>
        </header>

        {/* Time Tracking Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">electronic point</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-5xl font-bold text-gray-800">{formatTime(currentTime)}</span>
              <span className="text-xl text-gray-500 ml-2 mt-2">{}</span>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Status atual</div>
              <div className="flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="font-semibold text-gray-800">Registrado em</span>
              </div>
              <div className="w-full flex justify-center items-center">
                {registerTime ? (
                  <span className="text-gray-500 italic">{registerTime}</span>
                ) : (
                  <span className="invisible">00:00:00</span>
                )
              }
              </div>
              
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <button 
            disabled={!!registerTime}
            onClick={registerTimeFunction}
            value={registerTime}
            className="flex-1 bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 cursor-pointer">
              Entrada
            </button>
            <button className="flex-1 bg-red-500 text-white font-semibold py-3 rounded-lg border border-gray-300 hover:bg-red-600 transition-colors duration-200 cursor-pointer">
              Saída
            </button>
          </div>
        </div>

        {/* My Timesheet & Quick Links */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Point history</h2>
            <div className="flex items-center space-x-2 text-blue-600 font-semibold cursor-pointer hover:text-blue-700">
              
              
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entrada</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Almoço</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Saida</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horas trabalhadas</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1027 H023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Project</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Task</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">02:00am</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold cursor-pointer hover:text-blue-700">
                    Submit Leave Request
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1024 N024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ptoat</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">End</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">02:00am</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold cursor-pointer hover:text-blue-700">
                    View Team Schedule
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                   
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1027 H027</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Plojek</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Tad</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">03:00am</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">351 Hours</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                   
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1027 H027</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Timekuoar</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Total</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">02:00am</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold cursor-pointer hover:text-blue-700">
                    Edit Profile
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
