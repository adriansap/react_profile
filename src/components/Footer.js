import React from 'react';


function Footer() {
 
        let styles = {
            position: 'fixed',
            bottom: 0,
            width: '100%',
            height: '60px',
            backgroundColor: 'lightgrey',
            color:'white',
        };

    return (

        <footer class="footer" style={styles}>
            <div class="container">
                <span class="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>
    )
}

export default Footer;