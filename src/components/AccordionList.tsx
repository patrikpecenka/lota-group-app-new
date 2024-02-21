import { FC } from "react";
import QuestionList from "../constant/QuestionList";
import { Accordion, Container, Title } from '@mantine/core';
import classes from '../styles/Accordion.module.css';

type AccordionListProps = {
  question: string;
  answer: string;
  id: number;
}

const AccordionList: FC<AccordionListProps> = () => {
  const items = QuestionList.map((item) => (
    <Accordion.Item key={item.id} value={item.question} className={classes.item}>
      <Accordion.Control>{item.question}</Accordion.Control>
      <Accordion.Panel>{item.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container size="sm" className={classes.inner}>
      <Title ta="center" className={classes.title}>
        Frequently asked questions
      </Title>
      <Accordion variant="separated" transitionDuration={700}>
        {items}
      </Accordion>
    </Container>
  );
}

export default AccordionList;