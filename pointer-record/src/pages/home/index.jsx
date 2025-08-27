import { useState, useEffect} from "react";

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
      <div className="w-64 bg-white shadow-lg p-6 flex flex-col items-center">
        <div className="flex items-center mb-10">
          <svg
            className="w-8 h-8 text-blue-600 mr-2"
            fill="currentColor"
            viewBox="0 0 40 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 112 0 1 1 0 01-2 0zm6 0a1 1 0 112 0 1 1 0 01-2 0zm-3 7a4 4 0 01-4-4h8a4 4 0 01-4 4z"></path>
          </svg>
          <span className="text-xl font-bold text-gray-800">MonkeyCompany</span>
        </div>
        <nav className="w-full">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                home page
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 bg-gray-200 text-blue-600 font-semibold rounded-lg"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm3 10a1 1 0 110-2 1 1 0 010 2zm2-4a1 1 0 110-2 1 1 0 010 2zm2 4a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
                Time Tracking
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 00-1-1H9zM8 8a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1H8zM6 14a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2z"></path>
                </svg>
                Reports
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                </svg>
                Employees
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a.5.5 0 00-.5.5v3.5a.5.5 0 001 0V3a.5.5 0 00-.5-.5zM15 10a.5.5 0 01-.5.5h-3.5a.5.5 0 010-1h4a.5.5 0 01.5.5zM5 10a.5.5 0 00.5.5h3.5a.5.5 0 000-1h-4A.5.5 0 005 10zm7-4a.5.5 0 01.5-.5h3.5a.5.5 0 010 1h-4A.5.5 0 0112 6zM8 14a.5.5 0 00-.5.5v3.5a.5.5 0 001 0V15a.5.5 0 00-.5-.5z"></path>
                </svg>
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 3a1 1 0 11-2 0 1 1 0 012 0zm2 8a1 1 0 01-1 1H8a1 1 0 01-1-1V9a1 1 0 011-1h2a1 1 0 011 1v4z"></path>
                </svg>
                Help
              </a>
            </li>
          </ul>
        </nav>
      </div>

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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horas trabalhada</th>
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
