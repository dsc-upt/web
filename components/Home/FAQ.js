import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from 'react-accessible-accordion';
import Link from "../../utils/ActiveLink";

function FAQ() {
    return (
        <section className="faq-area ptb-100 bg-gray">
            <div className="container">
                <div className="section-title">
                    <h2>FAQ</h2>
                    <div className="bar"/>
                    <p>The below are some of the frequently asked questions by the students</p>
                </div>
                <div className="faq-accordion">
                    <Accordion allowZeroExpanded={true}>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    I am not from CS branch, can I join DSC UPT ?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="accordion-content">
                                    Any branch student can join DSC UPT, there is no restriction to join the club
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    I am from first year branch, am I allowed to join ?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="accordion-content">
                                    Students from any year can join DSC UPT and contribute to the club
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    I dont have much technical knowledge but I would like to help DSC UPT
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="accordion-content">
                                    No worries, we constantly looking for people who will help us as volunteers during
                                    the events, workshops and would love to have you on the team! Let us know your
                                    intentions filling the form from{' '}
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>{' '}
                                    page
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
