import Link from 'next/link'

import Container from './Container'

import styles from'../styles/components/Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterGrid}>
        <div className={styles.FooterLogo}>
          <Logo />
        </div>

        <div className={styles.FooterMain}>
          {/* <Container>
            <FooterNav />
          </Container> */}
        </div>

        <div className={styles.FooterTagline}>
          <Container>
            <p>© 2021 Spring Lakes Golf Club. All rights reserved.</p>
          </Container>
        </div>
      </div>
    </div>
  )
}

function FooterNav() {
  return (
    <div className={styles.FooterNav}>
      <nav>
        <Link href="">
          <a>Index</a>
        </Link>
      </nav>
    </div>
  )
}

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245.11 156.68">
      <path d="M158.85,32.49c.55,5.52,2.29,10.58,3.77,15.72a137.37,137.37,0,0,1,5.19,24.59c.32,3.26.84,6.51,1.42,9.73.31,1.67,1,3.28,1.44,4.93.28,1,.28,2-.84,2.6a2.62,2.62,0,0,1-3.13-.82c-.79-1.09-1.46-2.27-2.18-3.4l-.37.06c.09,1.26.21,2.52.26,3.78a25,25,0,0,1,0,3.57,2.07,2.07,0,0,1-4,.69c-1.29-2.53-2.53-5.07-3.79-7.61L156,85.22l-.31.06a10.32,10.32,0,0,0-.13,1.22c0,1.64,0,3.29,0,4.93a4.82,4.82,0,0,1-.07,1.07c-.18.89-.24,1.89-1.34,2.21s-1.73-.32-2.3-1.11a4,4,0,0,0-.47-.35c.14,1.06.24,1.94.37,2.82q1.11,7.22,2.24,14.43c0,.16,0,.32,0,.48.27,3.13.66,6.25.78,9.39.16,4.46.1,8.93.18,13.4.05,3,.23,6.07.23,9.11a37.2,37.2,0,0,1-.38,5.48,2.67,2.67,0,0,1-2.53,2.33,2.4,2.4,0,0,1-2.44-2.08c-.48-1.93-.71-3.92-1-5.89-.24-1.45-.49-2.9-.73-4.35l-.39-.05c-.16.64-.34,1.28-.48,1.93-1,4.5-.57,9.08-.81,13.62-.09,1.88-.56,2.65-1.67,2.79s-2-.67-2.68-2.27c-1.17-3-1.32-6.13-1.59-9.26-.08-.86-.16-1.61-1.26-1.68s-1.38.63-1.5,1.49c-.33,2.45-.58,4.92-1,7.36a3.88,3.88,0,0,1-.93,1.88c-.86,1-1.87.87-2.79-.05a7,7,0,0,1-2-5c-.09-2-.43-4-.66-6l-.36-.06a10.13,10.13,0,0,0-.91,1.46c-.77,1.79-1.49,3.59-2.21,5.4a2.4,2.4,0,0,1-2.61,1.47,2,2,0,0,1-1.85-2c-.1-1.71,0-3.44,0-5.16v-2.4a3.46,3.46,0,0,0-3,1.11,21.2,21.2,0,0,1-2.51,2.41,1.63,1.63,0,0,1-2.82-.8,13.13,13.13,0,0,1-.86-7.63,6.11,6.11,0,0,0,.09-.95c.08-.82-.15-1.14-1.08-1a16.14,16.14,0,0,1-2.86-.06c-2.78-.16-5.31-4.74-5.37-7.33a1.83,1.83,0,0,0-1.68-2.11A6.26,6.26,0,0,1,98.17,122a10.93,10.93,0,0,1-1.44-6,2,2,0,0,0-1.28-2.15c-3.23-1.56-4.16-3.53-3.84-7.46.06-.71,0-1.43,0-2.14a2.59,2.59,0,0,0-1-2.08,3.38,3.38,0,0,1-.89-1.88c-.29-1.77-.33-3.58-.67-5.34a4.45,4.45,0,0,0-1.21-2.23c-2.16-2-2.59-3.86-1.32-6.62A1.53,1.53,0,0,0,86.14,84,13,13,0,0,0,85,83.23C82.72,82,82.25,81,82.78,78.45c-.45-.17-.92-.36-1.39-.52-1.31-.46-2.07-1.25-1.89-2.58.3-2.17-.79-3.39-2.37-4.56a6.49,6.49,0,0,1-1.91-2.37A4.18,4.18,0,0,1,75,65.88a2,2,0,0,0-1-2.32,7.59,7.59,0,0,1-2-2,6.32,6.32,0,0,1-.69-2.79c0-.67,0-1.07-.77-1.33a4.31,4.31,0,0,1-3-5c.06-.51.12-1,.19-1.55A1.49,1.49,0,0,0,66.53,49a3,3,0,0,1-1.92-3.65c.11-.51.21-1,.29-1.53.12-.83.12-1.48-.92-1.88s-1.28-1.51-1.21-2.63c.06-.95,0-1.91,0-2.86s-.36-1.47-1.43-1.49c-2.91-.06-5.83-.43-8.71-.21a9.21,9.21,0,0,0-4.28,2A12.76,12.76,0,0,1,41.83,39a12.37,12.37,0,0,0-3,1q-4.12,1.57-8.25,3.18c-3.34,1.31-6.6,2.86-10,3.86-1.93.56-4.12.18-6.19.27-2.9.12-5.81.21-8.7.46a9.3,9.3,0,0,1-4.8-.53A3.74,3.74,0,0,1,0,46.54c.31-.31.58-.81,1-.9,1.39-.31,2.84-.41,4.22-.76,1.2-.3,2.34-.82,3.51-1.24l-.08-.47c-1-.12-2-.19-3-.36s-2.17-.11-2.07-1.47,1.25-1,2.09-1c1.91-.06,3.83,0,5.73-.18a17.45,17.45,0,0,0,3-.82l0-.49c-1.12-.12-2.23-.3-3.34-.33-.88,0-1.76.08-2-1-.17-.83.67-1.41,1.8-1.67,2.75-.63,5.28.48,7.9.83,3.5.47,6.94,1.41,10.53,1,3-.31,6.1-.56,9.15-.84a2.4,2.4,0,0,0,.58-.12c2.57-.93,5.17-1.81,7.71-2.82a35.55,35.55,0,0,0,3.47-1.79l0-.41c-.69-.11-1.38-.24-2.08-.31a12,12,0,0,1-2.26-.15,1.74,1.74,0,0,1-1-1.12c-.07-.35.41-.87.76-1.2s.75-.27,1.09-.48c1.67-1,3.32-2.11,5-3.18a.79.79,0,0,0,.2-.29c.4-.76.79-1.53,1.19-2.3-2.72-.21-5.62-.39-8.5-.67a7.52,7.52,0,0,1-2.76-.68c-.56-.3-1.24-1.19-1.14-1.68a2.24,2.24,0,0,1,1.54-1.49,50,50,0,0,1,6.92-.25,5.32,5.32,0,0,0,4.87-2.05,15.85,15.85,0,0,1-2.18-.61c-.37-.16-.63-.59-.94-.9a3.25,3.25,0,0,1,1.11-.45c4.82,0,9.64,0,14.46.08,1,0,1.58-.07,1.86-1.14a2.05,2.05,0,0,1,2.14-1.62c2.66.11,5.11-.75,7.59-1.5,1.84-.54,3.7-1,5.52-1.58,2.14-.7,4.25-1.54,6.38-2.3,3.54-1.24,7-2.64,10.63-3.64A61.05,61.05,0,0,1,108.17,1c1.49-.22,3-.54,4.49-.63C115.76.19,118.87,0,122,0c2.86,0,5.73.18,8.59.36a28,28,0,0,1,16.18,5.85,3.68,3.68,0,0,0,2.67.74c3-.15,5.91-.2,8.86-.35,4.38-.22,8.77-.41,13.14-.8a20,20,0,0,0,4.08-1.26,6.37,6.37,0,0,1,1.59-.39c1.11,0,2.23,0,3.35,0a49.61,49.61,0,0,0,9.87-.78,21.55,21.55,0,0,1,10.86.92c2.93,1,6,1.66,8.93,2.67,1.95.67,3.76,1.69,5.65,2.54a2.74,2.74,0,0,0,1,.21c3.79.11,7.6,0,11.37.35A78.36,78.36,0,0,1,239.53,12c1.5.38,3,.6,4.5.9a3.78,3.78,0,0,1,1.08.67c-.39.22-.77.63-1.15.64q-4.2.09-8.4.05c-7.55-.08-15.1-.26-22.65-.23-1.62,0-3.23.75-4.85,1.13a4.09,4.09,0,0,1-1.3.14q-5.83-.52-11.67-1.1c-4.48-.43-8.2,1.26-11.47,4.15-2,1.79-2.14,4-1.47,6.5a8.11,8.11,0,0,1,.29,3.38c-.45,2.62-2.65,3.33-4.84,3.81a30.92,30.92,0,0,1-9.41.63c-2.82-.24-5.66-.19-8.5-.26A6.51,6.51,0,0,0,158.85,32.49ZM149.67,8.22a44.26,44.26,0,0,1,3.52,4.12,47.92,47.92,0,0,1,2.4,4.68,2.7,2.7,0,0,0,.54.79c3,2.93,6.06,5.58,10.75,4.88a2.56,2.56,0,0,0,2.46-1.85,14.44,14.44,0,0,0,.35-2.46,7.22,7.22,0,0,1,.19-1.89A15.82,15.82,0,0,1,175,9.38C176,8.6,177,7.7,178,6.85l-.11-.3c-.58.13-1.16.24-1.73.38A60.5,60.5,0,0,1,170,8.32a74.52,74.52,0,0,1-7.63.31c-2.34,0-4.69,0-7-.08C153.53,8.49,151.7,8.34,149.67,8.22Z" />
    </svg>
  );
}