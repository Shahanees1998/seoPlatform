import type { Metadata } from 'next'
import '../globals-public.css'
import React from 'react'
// import { fixSession } from 'libs/helpers'

import '../globals.scss'
import '../data-tables-css.css'
import 'primeicons/primeicons.css'
import { getUserProfile } from 'actions/authActions'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Couriler',
  description: 'Your personal courier service'
}

export default async function RootLayout ({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>): Promise<JSX.Element> {
  const user = await getUserProfile()

  if (user?.success) {
    return redirect('/bord')
  }

  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}
