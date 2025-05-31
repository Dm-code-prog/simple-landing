'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from '@/styles/Beta.module.css'
import bgMetal from '@/images/bg-metal.png'
import bgMetal2 from '@/images/bg-metal-2.jpg'
import phoneBookScreen from '@/images/screen-phonebook.png'
import loginScreen from '@/images/login-screen.png'
import sendingMoneyScreen from '@/images/sending-money-screen.png'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei'
import { PhoneModel } from '@/components/models/Phone'
import TeamMembers from './TeamMembers'

function Striplight(props) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color='white' />
    </mesh>
  )
}

export default function Beta() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link href='/' className={styles.logo}>
            <Image src='/logo.svg' alt='Simple' width={80} height={18} />
          </Link>
          <div className={styles.navLinks}>
            <a href='#how-it-works' className={styles.navLink}>
              How it works
            </a>
            <a href='#about-us' className={styles.navLink}>
              About Us
            </a>
            <a href='#get-app' className={styles.navButton}>
              Get App
            </a>
          </div>
        </div>
      </nav>

      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>
              Simple crypto
              <br />
              payments by phone
              <br />
              number
            </h1>
          </motion.div>

          <motion.div
            className={styles.phoneContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src={phoneBookScreen}
              alt='Phone showing crypto payment'
              width={300}
              height={600}
              className={styles.phoneImage}
            />
          </motion.div>
        </div>
        <div style={{ width: '300px', height: '550px', zIndex: 1000, position: 'relative' }}>
          <Canvas
            camera={{ position: [0, 0, 6], zoom: 200, far: 1000, near: -1000 }}
            onCreated={(state) => {
              state.gl.setClearColor('#000000', 0)
              if (state.raycaster) {
                state.raycaster.filter = (object) => {
                  return object.isMesh && object.geometry && !object.userData.isHtml
                }
              }
            }}
            raycaster={{ enabled: false }}
          >
            <Environment backgroundIntensity={0.5} preset='night' />
            <OrthographicCamera makeDefault far={1000} near={-1000} position={[0, 0, 6]} zoom={200} />
            <PhoneModel position={[0, 0, 0]} scale={2.5} />
            <OrbitControls />
          </Canvas>
        </div>
        <motion.div
          className={`${styles.transferCard} ${styles.sendingCard}`}
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>You sent Inna</span>
            <span className={styles.cardAmount}>$1250</span>
            <div className={styles.avatar}></div>
          </div>
        </motion.div>

        <motion.div
          className={`${styles.transferCard} ${styles.receivingCard}`}
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>Gavril sent you</span>
            <span className={styles.cardAmount}>$9490</span>
            <div className={styles.avatar}></div>
          </div>
        </motion.div>

        <div className={styles.backgroundImage}>
          <Image src={bgMetal} alt='Metal background' fill style={{ objectFit: 'cover' }} className={styles.bgImage} />
        </div>
        <div className={styles.backgroundGradients}>
          <div className={styles.gradient1}></div>
          <div className={styles.gradient2}></div>
          <div className={styles.gradient3}></div>
        </div>
      </main>

      <section className={styles.identitySection}>
        <div className={styles.identityContent}>
          <motion.div
            className={styles.identityText}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.identityTitle}>
              Phone
              <br />
              number is a<br />
              user identity
            </h2>
            <p className={styles.identityDescription}>
              Automatically create a crypto wallet or add your
              <br />
              existing one and link it with your number
            </p>
          </motion.div>

          <motion.div
            className={styles.identityPhoneContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={loginScreen}
              alt='Login screen showing phone number verification'
              width={320}
              height={640}
              className={styles.identityPhoneImage}
            />
          </motion.div>
        </div>

        <div className={styles.identityBackground}>
          <Image
            src={bgMetal2}
            alt='Metal background'
            fill
            style={{ objectFit: 'cover' }}
            className={styles.identityBgImage}
          />
        </div>
        <div className={styles.identityGradients}>
          <div className={styles.identityGradient1}></div>
          <div className={styles.identityGradient2}></div>
          <div className={styles.identityGradient3}></div>
        </div>
      </section>

      <section className={styles.sendingSection}>
        <div className={styles.sendingContent}>
          <motion.div
            className={styles.sendingPhoneContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={sendingMoneyScreen}
              alt='Send money screen showing easy crypto transfer'
              width={350}
              height={700}
              className={styles.sendingPhoneImage}
            />

            <motion.div
              className={`${styles.featureCard} ${styles.featureCard1}`}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className={styles.featureIcon}>⚡</div>
              <span className={styles.featureText}>No Gas Fees</span>
            </motion.div>

            <motion.div
              className={`${styles.featureCard} ${styles.featureCard2}`}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.featureIcon}>🔗</div>
              <span className={styles.featureText}>No Blockchain Complexity</span>
            </motion.div>

            <motion.div
              className={`${styles.featureCard} ${styles.featureCard3}`}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className={styles.featureIcon}>✨</div>
              <span className={styles.featureText}>Just 3 Clicks</span>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.sendingText}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className={styles.sendingTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Send money to
              <br />
              anyone in just
              <br />
              <span className={styles.highlightText}>3 clicks</span>
            </motion.h2>

            <motion.p
              className={styles.sendingDescription}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Forget about blockchain complexity, gas fees, and
              <br />
              wallet addresses. Send crypto as easily as sending
              <br />a text message.
            </motion.p>

            <motion.div
              className={styles.sendingFeatures}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={styles.feature}>
                <div className={styles.featureBullet}></div>
                <span>No technical knowledge required</span>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureBullet}></div>
                <span>Instant transfers worldwide</span>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureBullet}></div>
                <span>Bank-level security</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.sendingBackground}>
          <Image
            src={bgMetal}
            alt='Metal background'
            fill
            style={{ objectFit: 'cover' }}
            className={styles.sendingBgImage}
          />
        </div>
        <div className={styles.sendingGradients}>
          <div className={styles.sendingGradient1}></div>
          <div className={styles.sendingGradient2}></div>
          <div className={styles.sendingGradient3}></div>
          <div className={styles.sendingGradient4}></div>
        </div>
      </section>

      <section id='about-us' className={styles.teamSection}>
        <div className={styles.teamContent}>
          <motion.div
            className={styles.teamHeader}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className={styles.teamSectionLabel}>Family</span>
            <h2 className={styles.teamTitle}>People</h2>
            <p className={styles.teamSubtitle}>The great minds behind our work.</p>
          </motion.div>

          <TeamMembers />
        </div>

        <div className={styles.teamBackground}>
          <Image
            src={bgMetal2}
            alt='Metal background'
            fill
            style={{ objectFit: 'cover' }}
            className={styles.teamBgImage}
          />
        </div>
        <div className={styles.teamGradients}>
          <div className={styles.teamGradient1}></div>
          <div className={styles.teamGradient2}></div>
          <div className={styles.teamGradient3}></div>
        </div>
      </section>
    </div>
  )
}
