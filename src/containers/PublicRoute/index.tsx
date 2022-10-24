import React from 'react'

interface FormProps {
    children? : React.ReactNode;
}

const PublicRoute = (props : FormProps) => {

    const {children} = props;
    
    return <>{children}</>
}

export default PublicRoute