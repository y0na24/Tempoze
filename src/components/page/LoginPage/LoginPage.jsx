import Form from '@/components/common/Form/Form'
import FormButton from '@/components/ui/FormButton'
import FormButtonDesk from '@/components/ui/FormButtonDesk'

function LoginPage() {
  return (
    <div className='flex items-center'>
      <Form title='Добро пожаловать!'>
        <FormButtonDesk display='hidden sm:block' />
        <FormButton display='sm:hidden' />
      </Form>
    </div>
  )
}

export default LoginPage
