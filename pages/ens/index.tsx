import styles from './styles.module.css'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import AboutSection from '../../components/sections/about'
import CTASection from '../../components/sections/cta'
import { ethers } from 'ethers'
import { Link, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

type ENSPageProps = {
  initialInputValue?: string
  url: string | null
  github: string | null
  telegram: string | null
  twitter: string | null
}

const ENSPage = ({
  initialInputValue,
  url,
  github,
  telegram,
  twitter,
}: ENSPageProps) => {
  return (
    <div className={styles.container}>
    <Head>
      <title>0z.is</title>
      <meta name="description" content="Redirect to URL set in ENS text record" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@0zURL" />
      <meta name="twitter:creator" content="@0zURL" />
      <meta name="twitter:image" content="https://0z.is/ogp.png" />
      <meta property="og:title" content="0z.is" />
      <meta property="og:description" content="Redirect to URL set in ENS text record" />
      <meta property="og:image" content="https://0z.is/ogp.png" />
    </Head>

    <main className={styles.main}>
      <AboutSection />
      <CTASection initialInputValue={initialInputValue} />

      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Td>url</Td>
              <Td isNumeric>
                <Link
                  isExternal
                  href={url === null ? `https://app.ens.domains/name/${initialInputValue}/details` : `https://0z.is/${initialInputValue}` }
                >
                  {url === null ? '❌' : `https://0z.is/${initialInputValue}` }
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>com.github</Td>
              <Td isNumeric>
                <Link
                  isExternal
                  href={github === null ? `https://app.ens.domains/name/${initialInputValue}/details` : `https://0z.is/${initialInputValue}/github` }
                >
                  {github === null ? '❌' : `https://0z.is/${initialInputValue}/github` }
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>org.telegram</Td>
              <Td isNumeric>
                <Link
                  isExternal
                  href={telegram === null ? `https://app.ens.domains/name/${initialInputValue}/details` : `https://0z.is/${initialInputValue}/telegram` }
                >
                  {telegram === null ? '❌' : `https://0z.is/${initialInputValue}/telegram` }
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>com.twitter</Td>
              <Td isNumeric>
                <Link
                  isExternal
                  href={twitter === null ? `https://app.ens.domains/name/${initialInputValue}/details` : `https://0z.is/${initialInputValue}/twitter` }
                >
                  {twitter === null ? '❌' : `https://0z.is/${initialInputValue}/twitter` }
                </Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </main>

    <footer className={styles.footer}>
      <span>
        &copy; Copyright ONE, Inc. 2022. All Rights Reserved.
      </span>
    </footer>
  </div>
  )
}

export default ENSPage

const provider = new ethers.providers.InfuraProvider('homestead',process.env.INFURA_API_KEY)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ens = context.query.name as string

  const resolver = await provider.getResolver(ens)
  const url = await resolver?.getText('url')
  const github = await resolver?.getText('com.github')
  const telegram = await resolver?.getText('org.telegram')
  const twitter = await resolver?.getText('com.twitter')

  return {
    props: {
      initialInputValue: ens,
      url: url,
      github: github,
      telegram: telegram,
      twitter: twitter,
    }
  }
}