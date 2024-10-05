import React from 'react'

const ContenusComponent: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="w-full md:w-1/1 lg:w-1/1 mb-6">
        <div className="w-full bg-grey px-10 py-5 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-5 text-left border-b border-gray-200 py-5 flex justify-between items-center">Comment réparer son radiateur automobile ? <a href="#"><img src="/images/hero/edit.png" /></a></h2>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/2 px-5">
              <h2 className="text-1xl font-bold mb-5 text-left">Mot-clé cible : <span className="font-medium">Réparation radiateur automobile</span></h2>
              <h2 className="text-1xl font-bold mb-5 text-left flex items-center">Lien de publication prod : <a href="#"><img className="px-3" src="/images/hero/graph.png" /></a></h2>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 px-5">
              <select id="tabs" className="bg-gray-50 px-3 py-3 mt-5 border shadow-lg border-blue text-blue text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Status</option>
                <option>Contrat</option>
                <option>Liste Mots-clés</option>
                <option>Backlinks</option>
                <option>Social</option>
                <option>Configuration IA</option>
              </select>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full grid md:w-1/1 lg:w-1/1 px-5 mb-10 mt-12">
              <a href="#"><img className="w-full" src="/images/hero/graph-img.png" /></a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ContenusComponent
