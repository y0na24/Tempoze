import React from 'react'
import PropTypes from 'prop-types'

import { pauseBtn, playBtn, restartImg } from '@/assets/assets'

function Timer({
  time, start, stop, reset, status,
}) {
  const hours = () => {
    if (time.h === 0) {
      return ''
    }
    return (
      <span className='block'>{time.h >= 10 ? time.h : `0${time.h}`}</span>
    )
  }

  return (
    <div className='flex items-center gap-6 mb-12'>
      <p className='flex items-center font-bold text-5xl sm:text-[3rem]'>
        {hours()}
&nbsp;&nbsp;
        <span className='block'>{time.m >= 10 ? time.m : `0${time.m}`}</span>
				&nbsp;:&nbsp;
        <span className='block'>{time.s >= 10 ? time.s : `0${time.s}`}</span>
      </p>
      <div className='flex items-center gap-4'>
        {status && (
        <button type='button' onClick={stop}>
          <img src={pauseBtn} alt='Пауза' width={45} height={45} />
        </button>
        )}

        {!status && (
        <button type='button' onClick={start}>
          <img src={playBtn} alt='Старт' width={45} height={45} />
        </button>
        )}
        <button type='button' onClick={reset}>
          <img src={restartImg} alt='Рестарт' width={47} height={47} />
        </button>
      </div>
    </div>
  )
}

Timer.propTypes = {
  time: PropTypes.object,
  status: PropTypes.bool,
  start: PropTypes.func,
  reset: PropTypes.func,
  stop: PropTypes.func,
}

export default Timer
