// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="main-container">
        <div className="faqs-container">
          <h1 className="heading-faqs">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(eachFaq => (
              <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
