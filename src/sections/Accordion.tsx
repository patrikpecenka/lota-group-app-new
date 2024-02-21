import AccordionList from 'components/AccordionList'
import classes from '../styles/Accordion.module.css'

const Accordion = () => {
  return (
    <div className={classes.wrapper}>
      <AccordionList question={''} answer={''} id={0} />
    </div>
  )
}

export default Accordion