import React from 'react'
import { Box, Typography, Container } from '@material-ui/core'
import RadioGroup from './RadioGroup'

const questions = [{
  key: 'media1',
  title: 'Coronavirus Bioweapon – How China Stole Coronavirus From Canada And Weaponized It',
  article: ['Last year a mysterious shipment was caught smuggling Coronavirus from Canada. It was traced to Chinese agents working at a Canadian lab. Subsequent investigation by GreatGameIndia linked the agents to Chinese Biological Warfare Program from where the virus is suspected to have leaked causing the Wuhan Coronavirus outbreak. ',
    '(This report on Coronavirus Bioweapon has caused a major international controversy and is suppressed actively by a section of mainstream media.). ',
    'On June 13, 2012 a 60-year-old Saudi man was admitted to a private hospital in Jeddah, Saudi Arabia, with a 7-day history of fever, cough, expectoration, and shortness of breath. He had no history of cardiopulmonary or renal disease, was receiving no long-term medications, and did not smoke.',
    'Egyptian virologist Dr. Ali Mohamed Zaki isolated and identified a previously unknown coronavirus from his lungs. After routine diagnostics failed to identify the causative agent, Zaki contacted Ron Fouchier, a leading virologist at the Erasmus Medical Center (EMC) in Rotterdam, the Netherlands, for advice. ',
    'Fouchier sequenced the virus from a sample sent by Zaki. Fouchier used a broad-spectrum “pan-coronavirus” real-time polymerase chain reaction (RT-PCR) method to test for distinguishing features of a number of known coronaviruses known to infect humans.',
    'This Coronavirus sample was acquired by Scientific Director Dr. Frank Plummer (key to Coronavirus investigation Frank Plummer was recently assassinated in Africa) of Canada’s National Microbiology Laboratory (NML) in Winnipeg directly from Fouchier, who received it from Zaki. This virus was reportedly stolen from the Canadian lab by Chinese agents.'],
},
{
  key: 'media2',
  title: 'Tito’s Vodka begs: Don’t use alcohol as hand sanitizer in coronavirus outbreak',
  article: ['Tito’s is for drinking, not for sanitizing.',
    'The Texas-based liquor brand known for its vodka is urging the public that its hooch cannot, in fact, be used as a hand sanitizer or in homemade disinfectants to ward off coronavirus.',
    'The Tito’s official Twitter account has been painstakingly responding to tweets one-by-one from fans who seem to believe that since the recipe for DIY sanitizer calls for isopropyl alcohol, the ingredient can be replaced with vodka.',
    '"I made some hand sanitizer out your vodka,” one Twitter user wrote. “The hand sanitizer doesn’t taste bad either. Cheers to Tito’s vodka. Keeping me germ-free and feeling good at the same time."',
    'The brand responded to the tweet along with a link to the Centers for Disease Control and Prevention.',
    '"Per the CDC, hand sanitizer needs to contain at least 60% alcohol,” the response read. “Tito’s Handmade Vodka is 40% alcohol, and therefore does not meet the current recommendation of the CDC. Please see attached for more information."',
    '"As soon as we saw the incorrect articles and social posts, we wanted to set the record straight,” a spokesperson for Tito’s said in a statement provided to the Dallas Morning News. “While it would be good for business for our fans to use massive quantities of Tito’s for hand sanitizer, it would be a shame to waste the good stuff, especially if it doesn’t sanitize (which it doesn’t, per the CDC)."'],
},
{
  key: 'media3',
  title: 'Don’t want to self-quarantine? The sheriff could send armed guards to your house.',
  article: ['In Kentucky, 24 people who tested positive for the novel coronavirus have voluntarily cooperated with orders to self-quarantine to prevent the spread of the disease to others.',
    'But one 53-year-old man in Nelson County refused to follow medical advice. He recently checked himself out of a University of Louisville hospital against his doctors’ advice and told the local health department he would not comply with an order to isolate himself from others. ',
    'On Saturday, the Nelson County Sheriff’s Office posted armed deputies outside the man’s house over the weekend to enforce the quarantine. “It’s a step I hoped I’d never have to take, but we can’t allow one person who we know has the virus to refuse to protect their neighbors,” Kentucky Gov. Andy Beshear (D), who worked with the sheriff’s office and a judge to order a forced quarantine, told the Lexington Herald-Leader. ',
    'Although the Louisville Courier-Journal reported that the infected man, who has not been identified, later agreed to stay in his home, Nelson County Sheriff Ramon Pineiroa said Monday he would keep officers stationed at his house in case he changed his mind. The man is one of 25 Kentucky residents to test positive for coronavirus, according to the latest numbers released by Beshear’s office Monday night.'],
},
{
  key: 'media4',
  title: 'Massive US Depopluation Predicted',
  article: ['As the world grapples to contain the Covid-19 Pandemic, Alarmimg Data Predicts the US will lose 227 Million population by year 2025.',
    'There have been many questions about the countries forecast specially the one focusing on the United States of America (USA). The majority of the economic and demographic data used in the making of the forecasts is widely available by institutions such as the CIA, IMF, UN, USG, etc. ',
    'The 2014 strain of Ebola has a death rate of 50-60% but try to imagine what would happen if there is a pandemic of Ebola with hundreds of thousands or millions infected with the virus. So far the few cases of Ebola-infected people have “enjoyed” intensive healthcare with anti-viral and breathing assistance but above all with abundant human support by Physicians and nurses. ',
    'In a pandemic scenario that kind of healthcare won’t be available for the overwhelming number of infected leading to a dramatic increase of the death rate due to the lack of proper healthcare. ',
    'The “quality” factor is that the death rate could increase to 80-90% in a pandemic scenario from the stated 50-60% rate. The figure itself is not important what is relevant is the fact that the scenario can evolve beyond the initial conditions from a 50% death toll to more than 90%.'],
}]

const Section2 = () => (
  <Box>
    <Typography variant="h4">In the News</Typography>
    <Typography variant="body2">Please rate the following news articles on a scale from 1-5.</Typography>
    <Container style={{ paddingTop: 20 }}>
      {questions.map(q => <RadioGroup {...q} k={q.key} />)}
    </Container>
  </Box>
)

export default Section2
