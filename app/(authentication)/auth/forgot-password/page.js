import { ForgotPasswordForm, FormTemplate } from '@/components'
import React from 'react'

function page() {
  return (
    <FormTemplate actionLabel={"forgot"} label={"account"}>
      <ForgotPasswordForm />
    </FormTemplate>
  )
}

export default page