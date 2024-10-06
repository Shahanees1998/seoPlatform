import React from 'react'

const SocioComponent: React.FC = (): JSX.Element => {
  return (
  <>

<div className="w-full md:w-1/1 lg:w-1/1 mb-6">
              <div className="w-full bg-grey px-10 py-5 rounded-xl shadow">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full md:w-1/1 lg:w-1/1 px-5">
                    <h2 className="text-2xl font-bold text-left py-5 flex justify-between items-center">Social Média <img src="/images/hero/social.png" /></h2>
                  </div>
                  <div className="w-full md:w-1/1 lg:w-1/1 px-5 flex justify-end items-center sm-flex-none">
                    <div className="w-full border-b border-gray-200 mt-5"></div>
                  </div>
                  <div className="w-full md:w-1/1 lg:w-1/1 px-5 mt-12 mb-10">
                    <h2 className="text-2xl font-bold text-left mr-5 mb-10">Récapitulatif</h2>
                    <div className="flex items-center">
                      <a ><img className="mr-5" src="/images/hero/iocn1.png" /></a>
                      <p className="text-lg">2 Posts / semaine</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/1 lg:w-1/1 px-5 mb-10">
                    <div className="flex items-center">
                      <a ><img className="mr-5" src="/images/hero/iocn2.png" /></a>
                      <p className="text-lg">2 Posts / semaine</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/1 lg:w-1/1 px-5 mb-10">
                    <div className="flex items-center">
                      <a ><img className="mr-5" src="/images/hero/iocn3.png" /></a>
                      <p className="text-lg">2 Posts / semaine</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/1 lg:w-1/1 px-5 mb-10">
                    <div className="flex items-center">
                      <a ><img className="mr-5" src="/images/hero/iocn4.png" /></a>
                      <p className="text-lg">2 Posts / semaine</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/1 lg:w-1/1 px-5 mb-10 flex flex-wrap mt-12">
                    <div className="flex justify-center py-5 mt-5 mx-auto">
                      <a href="clients-ajout.html">
                        <button type="button" style={{ backgroundColor: '#1B44C8' }} className="block px-10 py-2 text-center text-white font-bold text-1xl bg-dark-blue rounded-full">Valider</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  </>
  )
}

export default SocioComponent
