import React from 'react';

const styles = {
    header: {
        fontSize: 40,
        fontFamily: 'verdun',
        textAlign: 'center',
        margin: 10,
        padding: 10,
    }
}

export default function Header () {
    return (
        <div>
         <h1 style={styles.header} className='header'>Welcome</h1>
        </div>
    )
}