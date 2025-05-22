'use client'

import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

import bgMetal from '@/images/bg-metal.png'
import styles from '../get-tx.module.css'
import { Modal } from '@/components/dom/Modal'
import { Button } from '@/components/dom/Button'

const MOCK_TX = {
  id: '1c381b5b-0488-4680-a92d-53f7f5f29474',
  sender_phone: '6516', // sender_phone: "+37433216516",
  amount: 85.22,
  fee: 0.1,
}

const modalContent = {
  header: 'To receive and store funds, you need a Simple wallet',
  description: 'Assets are stored securely and can only be accessed via your device.',
}

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const a = searchParams.get('a')
  const s = searchParams.get('s')

  const ref = useRef()

  const openModal = () => {
    ref.current.open()
  }

  const goToWeb = () => {
    router.push('https://simp1e-money.netlify.app/')
  }

  return (
    <>
      <Image
        style={{ objectFit: 'cover', filter: 'brightness(0.6)' }}
        fill
        placeholder='blur'
        alt='metal-bg'
        src={bgMetal}
      />
      <div className={styles.bgImgContainer}>
        <main className={styles.getTxPage}>
          <h1 className={styles.receivedHeader}>${a}</h1>

          <span className={styles.senderNumber}>
            from{' '}
            <span onClick={openModal} className={styles.hiddenData}>
              +1 484-300
            </span>
            {'  '}
            {s}
          </span>

          <h6 className={styles.commentLabel}>comment:</h6>
          <span onClick={openModal} className={styles.commentData}>
            are you seriously
          </span>

          <button className={styles.receiveButton} onClick={openModal}>
            Receive the funds
          </button>
          <Modal
            closeAllowed={false}
            actionSheetRef={ref}
            headerContent={modalContent.header}
            descriptionContent={modalContent.description}
            buttonsJSX={
              <>
                <Button onClick={goToWeb} variant={'primary'}>
                  Use Web version
                </Button>
                <Button disabled variant={'ghost'}>
                  Go to App Store
                </Button>
                {/* <Button onClick={goTo} variant={"primary-black"}>Telegram Bot</Button> */}
              </>
            }
          />
        </main>
      </div>
    </>
  )
}
