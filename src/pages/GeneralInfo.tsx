import React from 'react';

const GeneralInfo = () => {
  return (
    <div className='stats'>
        <div className='subtitle'>
            General
        </div>
        <img id = 'logo' src = { require('../assets/images/icons/logo.jpg') } />
        <div>
            <div className='scorer'>
                <div className='scorer__name'>Matches played</div>
                <div className='scorer__goals'>380</div>
            </div>
            <div className='scorer'>
                <div className='scorer__name'>Total balls played</div>
                <div className='scorer__goals'>371301</div>
            </div>
            <div className='scorer'>
                <div className='scorer__name'>Players used</div>
                <div className='scorer__goals'>981</div>
            </div>
            <div className='scorer'>
                <div className='scorer__name'>Substitutions</div>
                <div className='scorer__goals'>1903</div>
            </div>
        </div>
    </div>
  )
}

export default GeneralInfo;
