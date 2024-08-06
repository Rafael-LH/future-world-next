"use client"

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <h1>:c</h1>
      <p>Ha ocurrido algun error</p>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  )
}

export default error