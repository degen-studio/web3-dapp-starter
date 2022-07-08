import { ConnectButton } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return(
    <div className='h-screen w-screen bg-gray-100 flex items-center justify-center'>
      <div className='font-mono space-y-4'>
        <p>The fastest way to get started with your web3 project.</p>
        <p>Developed by @cryptifyLabs.</p>
        <div className='flex justify-center'>
          <ConnectButton/>
        </div>
      </div>
    </div>
  )
}

export default Home