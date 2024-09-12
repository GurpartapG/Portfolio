import React from 'react';
import styles from './workExperience.module.css';
import SectionIntroduction from './Sectionintroduction';
import WorkListEntry from './WorkListEntry';

export default function WorkExperience() {
    return (
        <section id="work-experience">
            <div className={styles.wrapper}>
                <SectionIntroduction dark={true}>
                    WORK EXPERIENCE
                </SectionIntroduction>
                <div className={styles.sectionContent}>
                    <WorkListEntry title={"Data and Business Analyst"} company={"Sanofi Pasteur - AI CoE"} location={"Toronto, ON"} date={"May 2023 – Apr. 2024"}>
                        <li>Conducted thorough exploratory data analysis (EDA) to unveil insights, mapping data flow for streamlined integration and ensuring accurate representation in Power BI dashboards, leveraging Dataiku and Snowflake.</li>
                        <li>Designed and implemented SQLDBM data models, integrating transformations and business rules across multiple data pipeline stages.</li>
                        <li>Automated data quality checks using Dataiku and SQL, reducing testing time by 90% while significantly expanding
                        coverage to ensure accurate analytical outputs.</li>
                        <li>Evaluated and strategized Generative AI initiatives, providing critical cost and business value analyses, assessing
                        technologies, and developing governance frameworks for informed decision-making across GBUs.</li>
                        <li>Reduced analysis time by 50% by developing Power BI dashboards, facilitating rapid access to critical insights.</li>
                    </WorkListEntry>
                    <WorkListEntry title={"Packer"} company={"Trophy Foods"} location={"Mississauga, ON"} date={"April 2022 – Aug. 2022"}>
                        <li>Led a team of 6 to pack, weigh and label products for storage and shipment, ensuring smooth processing of goods
                        through machinery.</li>
                        <li>Implemented standardized procedures that reduced overall waste production by 30%.</li>
                        <li>Took a leadership role in training new staff members, improving operational efficiency and knowledge transfer.</li>
                    </WorkListEntry>
                    <WorkListEntry title={"Restaurant Manager"} company={"Anokhi Inspired Indian Dining"} location={"Brampton, ON"} date={"July 2020 – Jan. 2022"}>
                        <li>Supervised a diverse team of Front and Back of House staff, managing operations in dining, bar, inventory, and
                        administration to maintain restaurant efficiency.</li>
                        <li>Coordinated interviews, oversaw hiring, ran staff training programs, and effectively communicated with customers
                        and vendors to resolve issues and ensure smooth operation.</li>
                        <li>Achieved Top Choice Indian Restaurant in Brampton award for 2021 and 2022.</li>
                    </WorkListEntry>
                    <WorkListEntry title={"Server"} company={"Anokhi Inspired Indian Dining"} location={"Brampton, ON"} date={"Feb. 2019 – June 2020"}>
                        <li>Provided welcoming and prompt customer service to all customers while managing over 25 tables and demonstrated
                        multi tasking in a fast paced environment.</li>
                        <li>Took on a leadership role by utilising thorough knowledge of policies and procedures to train new staff members.</li>
                        <li>Developed and maintained a fine dining experience for all customers and boosted sales through up selling
                        techniques</li>
                    </WorkListEntry>
                </div>
            </div>
        </section>
    );
}
