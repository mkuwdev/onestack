export const ParentGrid = ({ children, className = '' }) => {
    return (
        <div
          className={`container mx-auto max-w-screen-xl flex-grow py-8 px-5 ${className}`}
        >
            <div className="grid grid-cols-12 lg:gap-8">
              {children}
            </div>
        </div>
      )
}

export const GridNine = ({ children, className = ''}) => {
  return (
    <div className={`lg:col-span-9 md:col-span-12 col-span-12 mb-5 ${className}`}>
      {children}
    </div>
  )
}

export const GridSeven = ({ children, className = '' }) => {
    return (
      <div className={`lg:col-span-7 md:col-span-12 col-span-12 mb-5 ${className}`}>
        {children}
      </div>
    )
}

export const GridTwo = ({ children, className = '' }) => {
    return (
      <div className={`lg:col-span-2 md:col-span-12 col-span-12 mb-5 ${className}`}>
        {children}
      </div>
    )
}

export const GridThree = ({ children, className = '' }) => {
    return (
      <div className={`lg:col-span-3 md:col-span-12 col-span-12 ${className}`}>
        {children}
      </div>
    )
}