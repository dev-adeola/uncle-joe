// 'use client'

import { getCurrentUserToken } from '@/lib/user'
import { redirect } from 'next/navigation'

function CheckIfAuthenticated({ children }) {

    if (getCurrentUserToken()) return redirect('/overview')
    return children

}

export default CheckIfAuthenticated