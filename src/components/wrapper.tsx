export default function Wrapper({ children } : { children : Readonly<React.ReactNode> }) {
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen p-10">
            {children}
        </div>
    )
}