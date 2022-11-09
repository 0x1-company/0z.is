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
  const github = await resolver?.getText('com.github')
  if (github === undefined) {
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
      destination: github.includes('https://github.com') ? github : `https://github.com/${github}`,
    },
  }
}