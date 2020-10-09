import React from 'react'
import html from 'react-inner-html'

//use react-inner-html to fix the html paragragh
const SummaryFix = ({summary}) => {
    return (
        <div {...html(summary)} />
    )
}

export default SummaryFix
