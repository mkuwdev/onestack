export const Card = ({ children, className='' }) => {
  return (
    <div className={`bg-white rounded-md border shadow-md ${className}`}>
        {children}
    </div>
  )
}

export const CardHeader = ({ children, className='' }) => {
    return (
        <div className={`border-b p-3 ${className}`}>
            {children}
        </div>
    )
}

export const CardBody = ({ children, className='' }) => {
    return (
        <div className={`p-5 ${className}`}>
            {children}
        </div>
    )
}
