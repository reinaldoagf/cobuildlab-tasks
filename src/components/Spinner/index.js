import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
const SpinnerComponent = () => {
  return (
    <BeatLoader
      color='#bb2e3e' loading cssOverride={{
        position: 'fixed',
        background: 'rgb(0 0 0 / 40%)',
        height: '100%',
        width: '100%',
        left: '0px',
        top: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '2'
      }} size={30}
    />
  )
}

export default SpinnerComponent
