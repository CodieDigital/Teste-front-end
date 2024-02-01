import { ScheduleProvider } from '../context/ScheduleContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'
import '../styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScheduleProvider>
        <Component {...pageProps} />
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </ScheduleProvider>
    </>
  )
}
