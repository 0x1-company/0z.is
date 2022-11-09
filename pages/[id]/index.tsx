import { ethers } from 'ethers'
import { GetServerSideProps } from 'next'

const provider = new ethers.providers.InfuraProvider('homestead',process.env.INFURA_API_KEY)

const page = () => {
  return <></>
}

export default page

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ens = context.query.id as string
  const resolver = await provider.getResolver(ens)
  const url = await resolver?.getText('url')
  if (url === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      }
    }
  }
  return {
    redirect: {
      permanent: false,
      destination: url,
    },
  }
}