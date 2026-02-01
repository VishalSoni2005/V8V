import { requireAuth } from '@/lib/auth-util'
import React from 'react'

const page = async () => {
  await requireAuth();
  return (
    <div>page</div>
  )
}

export default page