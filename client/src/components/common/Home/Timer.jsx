import React from 'react'
import PropTypes from 'prop-types'

import { pauseBtn, playBtn, restartImg } from '@/assets/assets'

function Timer({ time, updateTimer, restartTimer, status, setStatus }) {
  const [interv, setInterv] = React.useState()
 

  const startTimer = () => {
    runTimer()
    setStatus(true)
    setInterv(setInterval(runTimer, 1000))
  }

  const stopTimer = () => {
    clearInterval(interv)
    setStatus(false)
  }

  const resetTimer = () => {
    clearInterval(interv)
    setStatus(false)
    restartTimer()
  }

  let updatedS = time.s
  let updatedM = time.m
  let updateH = time.h

  const runTimer = () => {
    if (updatedM === 60) {
      updateH++
      updatedM = 0
    }

    if (updatedS === 60) {
      updatedM++
      updatedS = 0
    }

    updatedS++
    updateTimer(updatedS, updatedM, updateH)
  }

  const hours = () => {
    if (time.h === 0) {
      return ''
    }
    return <span className='block'>{time.h >= 10 ? time.h : `0${time.h}`}</span>
  }

  return (
    <div className='flex items-center gap-6 mb-12 relative'>
      <p className='flex items-center font-bold text-5xl sm:text-[3rem]'>
        {hours()}
				&nbsp;&nbsp;
        <span className='block'>{time.m >= 10 ? time.m : `0${time.m}`}</span>
				&nbsp;:&nbsp;
        <span className='block'>{time.s >= 10 ? time.s : `0${time.s}`}</span>
      </p>
      <div className='flex items-center gap-4 absolute left-56'>
        {status && (
        <button type='button' onClick={stopTimer}>
          <img src={pauseBtn} alt='Пауза' width={45} height={45} />
        </button>
        )}

        {!status && (
        <button type='button' onClick={startTimer}>
          <img src={playBtn} alt='Старт' width={45} height={45} />
        </button>
        )}
        <button type='button' onClick={resetTimer}>
          <img src={restartImg} alt='Рестарт' width={47} height={47} />
        </button>
      </div>
    </div>
  )
}

Timer.propTypes = {
  time: PropTypes.object,
  restartTimer: PropTypes.func,
  updateTimer: PropTypes.func,
}

export default Timer
