import React from 'react'

/**
 * @description redirect at server level
 * @returns {object} next.js redirection object
 */
export async function getServerSideProps () {

    return {
        'redirect': {
            'destination': 'https://github.com/bamdadsabbagh/memaudio-org--www',
            'permanent': false,
        },
    }

}

/**
 * @returns {React.ReactElement} react component
 */
export default function GitPage () {

    return <></>

}