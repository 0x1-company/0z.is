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
  const twitter = await resolver?.getText('com.twitter')
  if (twitter === undefined) {
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
      destination: twitter.includes('https://twitter.com') ? twitter : `https://twitter.com/${twitter}`,
    },
  }
}