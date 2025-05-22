'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Suspense, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useAnimationControls, useInView } from 'framer-motion'
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

import phoneImg from '@/images/iphone-dimension.png'
import footerPhoneImg from '@/images/iphone.png'

import sliderContactImg from '@/images/slider-contact.png'
import sliderReceivedImg from '@/images/slider-received.png'
import sliderSumImg from '@/images/slider-sum.png'

import TransferCards from '@/components/dom/TransferCards'
import { Layout } from '@/components/dom/Layout'
import { useEffectWithoutFirstRender } from '@/helpers/hooks/useEffectOnlyOnce'
// import Model from '@/components/3D/Scene'
import { OrbitControls } from '@react-three/drei'
// import { Phone } from '@/components/canvas/phone/Phone'
// import { DebugPhone } from '@/components/canvas/DebugPhone'
import { View } from '@/components/canvas/View'

const sliderImages = [sliderContactImg, sliderSumImg, sliderReceivedImg]

const transfersText = [
  {
    header: 'Phone number is a User Identity',
    p: 'Automatically create a crypto wallet or add your existing one and link it with your phone number. Of course, you can switch to the username if you want to.',
  },
  {
    header: 'Transfer to friends directly from messages',
    p: 'Find your friends in the contact list and send crypto simple as a message. View the history of transfers with your friends in a form of a chat.',
  },
  {
    header: 'Simple Protocol',
    p: 'Transfer crypto from and to any network in any asset. We will cover everything for you.',
  },
  {
    header: 'Pay by a debit card in crypto',
    p: 'Issuing a Simple debit card and pay with your cryptocurrencies anywhere',
  },
  // {
  //   header: "Receive payments for self-employed",
  //   p: "Accept payments in crypto in any situation you want.",
  // },
  // {
  //   header: "Seamless fiat to crypto conversion",
  //   p: "Send crypto and receive fiat money just in one transaction.",
  // },
]

const sectionAnimation = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
  viewPort: {
    amount: 0.2,
    once: true,
  },
}

const sectionAnimationProps = {
  variants: sectionAnimation,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: sectionAnimation.viewPort,
}

const sideHeaderAnimation = {
  hidden: (custom) => ({
    x: custom.x, // set -x value to start from left side and x to start from right side
    opacity: 0,
  }),
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: custom.delay },
  }),
}

const howItWorksCardAnimation = {
  empty: {
    width: 0,
    borderRadius: '15px 0px 0px 15px',
  },
  filled: {
    width: '100%',
    backgroundColor: '#5356D9',
    transition: { duration: 6, ease: 'linear' },
    borderRadius: '15px',
  },
  filledInstant: {
    width: '100%',
    backgroundColor: '#5356D9',
    transition: { duration: 1, ease: 'linear' },
    borderRadius: '15px',
  },
}

const cardImageAnimation = {
  hidden: {
    opacity: 0,
    display: 'none',
  },

  visible: {
    opacity: 1,
    display: 'block',
    transition: { duration: 2 },
  },
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export default function Home() {
  const router = useRouter()

  const cardContainerRef = useRef()
  const cardContainerInView = useInView(cardContainerRef)

  const [number, setNumber] = useState()
  const [sliderActiveIndex, setSliderActiveIndex] = useState()

  const cardControls = {
    first: useAnimationControls(),
    second: useAnimationControls(),
    third: useAnimationControls(),
  }

  const imageControls = {
    first: useAnimationControls(),
    second: useAnimationControls(),
    third: useAnimationControls(),
  }

  const handlePhoneWaitlistSubmit = (type) => (event) => {
    const myForm = type === 'mobile' ? document.getElementById('form-container') : event.target.parentNode
    const formData = new FormData(myForm)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() =>
        alert(
          'Success! We have received your phone number and added you to our waitlist. We will be in touch as soon as the app becomes available.',
        ),
      )
      .catch((error) => alert(error))
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const navbar = document.getElementById('landing-nav')

      document.addEventListener('scroll', navbarControl)

      function navbarControl() {
        if (scrollY > 75) {
          navbar.classList.add('navbar-background')
        } else {
          navbar.classList.remove('navbar-background')
        }
      }
    }
  }, [])

  useEffect(() => {
    const animation = async () => {
      setSliderActiveIndex(0)
      await cardControls.first.start('filled')

      setSliderActiveIndex(1)
      await cardControls.second.start('filled')

      setSliderActiveIndex(2)
      await cardControls.third.start('filled')
    }
    if (cardContainerInView) {
      animation()
    }
  }, [cardContainerInView])

  useEffect(() => {
    const animation = async () => {
      await sleep(1000)
      await imageControls.first.start('visible')

      await sleep(6000)
      await imageControls.first.start('hidden')
      await imageControls.second.start('visible')

      await sleep(6000)
      await imageControls.second.start('hidden')
      await imageControls.third.start('visible')

      await sleep(6000)
      await imageControls.third.start('hidden')
    }
    if (cardContainerInView) {
      animation()
    }
  }, [cardContainerInView])

  useEffect(() => {
    const setStartingPositions = async () => {
      await cardControls.first.set('empty')
      await cardControls.second.set('empty')
      await cardControls.third.set('empty')

      await imageControls.first.set('hidden')
      await imageControls.second.set('hidden')
      await imageControls.third.set('hidden')
    }
    setStartingPositions()
  }, [])

  return (
    <Layout>
      <main className='main-content'>
        <section className='hero-section'>
          <motion.div
            className='hero-content'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='hero-title'>Send crypto as easy as a message</h1>
            <p className='hero-subtitle'>The simplest way to transfer assets with zero crypto knowledge</p>
            <div className='hero-cta'>
              <h3>Join Waitlist</h3>
              <form name='waitlist' method='POST' data-netlify='true' onSubmit={handlePhoneWaitlistSubmit('desktop')}>
                <input type='hidden' name='form-name' value='waitlist' />
                <input type='tel' placeholder='Enter phone number' name='phone' required />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type='submit'
                  className='submit-button'
                >
                  Join waitlist
                </motion.button>
              </form>
              <p className='waitlist-note'>Enter your phone number to get notified when the app is ready</p>
            </div>
          </motion.div>

          <motion.div
            className='hero-visual'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className='phone-container'>
              <View className='phone-view' orbit>
                <Suspense fallback={null}>
                  {/* <Phone /> */}
                  <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color='hotpink' />
                  </mesh>
                </Suspense>
              </View>
            </div>
          </motion.div>
        </section>

        <section className='features-section'>
          <div className='container'>
            <motion.div className='section-header' {...sectionAnimationProps}>
              <h2>Simple features for everyone</h2>
              <p>Make crypto transfers as simple as sending a text message</p>
            </motion.div>

            <div className='features-grid'>
              {transfersText.map((feature, index) => (
                <motion.div
                  key={index}
                  className='feature-card'
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3>{feature.header}</h3>
                  <p>{feature.p}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className='how-it-works-section'>
          <div className='container'>
            <motion.div className='section-header' {...sectionAnimationProps}>
              <h2>How it works</h2>
              <p>Three simple steps to start sending crypto</p>
            </motion.div>

            <div ref={cardContainerRef} className='how-it-works-cards'>
              <div className='card-container'>
                <motion.div className='progress-bar' variants={howItWorksCardAnimation} animate={cardControls.first} />
                <motion.div className='card-image' variants={cardImageAnimation} animate={imageControls.first}>
                  <Image src={sliderImages[0]} alt='Add contact' width={300} height={600} />
                </motion.div>
                <div className='card-content'>
                  <h3>1. Add Contact</h3>
                  <p>Find your friend in your contact list</p>
                </div>
              </div>

              <div className='card-container'>
                <motion.div className='progress-bar' variants={howItWorksCardAnimation} animate={cardControls.second} />
                <motion.div className='card-image' variants={cardImageAnimation} animate={imageControls.second}>
                  <Image src={sliderImages[1]} alt='Enter amount' width={300} height={600} />
                </motion.div>
                <div className='card-content'>
                  <h3>2. Enter Amount</h3>
                  <p>Type the amount you want to send</p>
                </div>
              </div>

              <div className='card-container'>
                <motion.div className='progress-bar' variants={howItWorksCardAnimation} animate={cardControls.third} />
                <motion.div className='card-image' variants={cardImageAnimation} animate={imageControls.third}>
                  <Image src={sliderImages[2]} alt='Send money' width={300} height={600} />
                </motion.div>
                <div className='card-content'>
                  <h3>3. Send</h3>
                  <p>Confirm and send the payment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='cta-section'>
          <div className='container'>
            <motion.div className='cta-content' {...sectionAnimationProps}>
              <h2>Ready to start?</h2>
              <p>Join thousands of users already on our waitlist</p>
              <div className='cta-form' id='form-container'>
                <form
                  name='waitlist-footer'
                  method='POST'
                  data-netlify='true'
                  onSubmit={handlePhoneWaitlistSubmit('mobile')}
                >
                  <input type='hidden' name='form-name' value='waitlist-footer' />
                  <input type='tel' placeholder='Enter phone number' name='phone' required />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type='submit'
                    className='submit-button'
                  >
                    Join waitlist
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
