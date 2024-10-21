import { getContracts } from 'actions/contractActions'
import Landing from 'components/Statistics/landing'
import React from 'react'
const Statictics = async (): Promise<JSX.Element> => {
  const contarcts = await getContracts()
  return (
    <>
      <Landing contarcts={contarcts}/>
    </>
  )
}

export default Statictics
