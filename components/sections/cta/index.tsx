import { Input } from '@chakra-ui/react'
import { useRef } from 'react'

type CTASectionProps = {
  initialInputValue?: string
}

const CTASection = ({ initialInputValue }: CTASectionProps) => {
  const inputReference = useRef<HTMLInputElement>(null)
  return (
    <div>
      <form
        method='GET'
        action='/ens'
        className='w-full flex justify-center'
        onSubmit={(event) => {
          if (inputReference.current?.value.length === 0) {
            event.preventDefault()
          }
        }}
      >
        <div className='flex items-stretch rounded-xl w-full max-w-lg relative'>
          <div className='pb-2 w-full'>
            <Input
              id='name'
              name='name'
              placeholder='vitalik.eth'
              defaultValue={initialInputValue}
              style={{ width: '100%' }}
            />
          </div>
          <button
            type='submit'
            className='flex text-grey2 absolute right-4 top-1/2 -translate-y-1/2'
          >
          </button>
        </div>
      </form>
    </div>
  )
}

export default CTASection