import { BarLoader } from 'react-spinners'

export default function Loader() {
  return (
    <main className="flex justify-center items-center min-h-dvh">
            <BarLoader
                color="#1E3A8A"
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </main>
  )
}

