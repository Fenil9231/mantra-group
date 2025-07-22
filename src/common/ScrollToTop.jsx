import React from 'react';

const ScrollToTop = () => {

    // Scroll To Top 
    const [position, setPosition] = React.useState({top: 0, left: 0})

    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })

    const [visibility, setVisibility] = React.useState(false)
    
    const scrollTop = React.useRef()
    React.useEffect(() => {
        const handleScroll = () => {
            if (scrollTop.current) {
                window.scrollY > 200 
                ? scrollTop.current.style.visibility = 'visible'
                : scrollTop.current.style.visibility = 'hidden'
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []) 
    
    return (
        <>
            <div className="scrollToTop"  
                onClick={() => setPosition({...position, position: {top: 0, left: 0}})}
                ref={scrollTop} 
            >
                <i className="fas fa-chevron-up text-gradient"></i>
            </div>
            
        </>
    );
};

export default ScrollToTop;