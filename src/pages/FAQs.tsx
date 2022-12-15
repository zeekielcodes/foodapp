import React from 'react'
import Banner from '../components/Banner'
import SingleFAQ from '../components/SingleFAQ'
import questions from "../faqs.json"

function FAQs() {
  return (
    <div>
        <Banner pageName="FAQ Page" page="faq"/>
        <div className="faqs">
            <h1>Frequently Asked Questions</h1>
            <p className='text-[16px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
            <div className="questions-container">
                {questions.questions.map(faq => <SingleFAQ question={faq.question} answer={faq.answer}/>)}
            </div>
        </div>
    </div>
  )
}

export default FAQs