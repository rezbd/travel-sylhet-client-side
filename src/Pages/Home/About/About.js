import React from 'react';
import { Accordion } from 'react-bootstrap';

const About = () => {
    return (
        <div id="faq" className="w-50 mx-auto pt-3 pb-5">
            <h2 className="my-5">Frequently Asked Questions</h2>
            <Accordion className="mb-5">
                <Accordion.Item eventKey="0" className="faq-body">
                    <Accordion.Header>Does Travel Sylhet have family trips?</Accordion.Header>
                    <Accordion.Body>
                        Travel Sylhet offers a wide range of Family Adventures around the globe. The minimum age (for Family trips) varies depending on destination, and Intrepid has set minimum ages to ensure that the included activities suit each age range. Additionally, you’ll notice that some of the more adventurous destinations have a higher minimum age. Please view our family adventures for more information.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How many people will be on my trip? </Accordion.Header>
                    <Accordion.Body>
                        Good things come in small packages, which is why we keep our group sizes down. This means we’re small enough to remain flexible as we thread our way through communities without intimidating the locals. On most of our trips you’ll be part of an intimate group of 12-16 people, though our group sizes are on average 10 people. Our Overland trips are in purpose-built vehicles that can carry up to 24 travellers. Group sizes are displayed on each trip’s overview page on our website.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Are there age restrictions on your trips?</Accordion.Header>
                    <Accordion.Body>
                        For the majority of our trips the minimum age is 15. An adult must accompany all children under the age of 18. Our Overland Adventures have a minimum age of 18. Younger children can join us on our Family trips and Short Break Adventures, but check each trip for its minimum age, which is located on the trip’s overview page on the website. Most of our trips don’t have a maximum age limit, but a Self-Assessment Form is required for all passengers 70 years and over.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Can I just do part of a trip?</Accordion.Header>
                    <Accordion.Body>
                        Although you won’t be reimbursed for any portion of the trip unused, you can opt to sign off the trip if you need to leave a day or so earlier. If you let us know before travel that you’ll be arriving late or need to leave before the trips ends, we will notify our team on the ground to best accommodate your requirements.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>If I am travelling solo, will I be charged a single supplement?</Accordion.Header>
                    <Accordion.Body>
                        As a solo traveller, you will be paired up with another passenger of the same gender as per your passport information. If you’re not comfortable sharing a room with someone of the same gender, you also have the choice to pay for a single supplement (available on the majority of our trips).
                        If you don’t identify with the gender assigned on your passport, please let us know at time of booking and we’ll arrange the rooming configuration accordingly.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>What will the food be like on my trip?</Accordion.Header>
                    <Accordion.Body>
                        Food is one of the most exciting parts of travel. There may be some familiar fare but often you’ll be confronted with the new, interesting and downright weird of the culinary world but we like to think of it as an adventure for all the senses. In addition to this, our flexible itineraries often allow you to eat with the group or branch out on your own - this means you can eat to suit any budget or desire.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>How do I obtain Essential Trip Information?</Accordion.Header>
                    <Accordion.Body>
                        Make sure you bring these with you. Every trip has a set of Essential Trip Information, accessible on our website, that gives you in-depth information about all aspects of your trip. To access your Essential Trip Information, please visit your trip’s specific facts page on our website. The Essential Trip Information are accessible at the top of this page.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>How safe are my belongings whilst on the trip?</Accordion.Header>
                    <Accordion.Body>
                        While we take all the precautions we can to make sure your belongings are safe, we are travelling to some exciting destinations that are sometimes home to some pretty skilled thieves. Travel insurance is a must and a lockable bag or money belt will always help too.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default About;