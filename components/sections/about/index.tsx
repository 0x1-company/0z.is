import styles from './styles.module.css'

export default function AboutSection() {
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to <span style={{ color: '#0070f3'}}>0z.is</span>
      </h1>
      <h3>0z.is/[your ENS]/[telegram,twitter,github or url]</h3>

      <div className={styles.description}>
        <a target='_blank' href='https://0z.is/vitalik.eth'>
          0z.is/vitalik.eth
        </a>
        <br />
        <a target='_blank' href='https://0z.is/ens.eth/twitter'>
          0z.is/ens.eth/twitter
        </a>
        <br />
        <a target='_blank' href='https://0z.is/ens.eth/github'>
          0z.is/ens.eth/github
        </a>
      </div>
    </div>
  )
}