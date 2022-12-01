import { useState, Context, useContext } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { StateContext } from '../App'
import { Link } from 'react-router-dom'
import '../css/EventForm.css'
import axios from 'axios';
import arrow from '../images/arrow.png'

function AddEventForm({height, width}) {
    const state = useContext(StateContext).state
    const setState = useContext(StateContext).setState

    const [buildEvent, setBuild] = useState({})


    const updateBuild = (e, attr) => {
        buildEvent[attr] = e.target.value
        setBuild(buildEvent)
        console.log(buildEvent)
    }

    const onSubmit = () => {
        buildEvent.lat = state.recentClickPos.lat
        buildEvent.lng = state.recentClickPos.lng
        buildEvent.id = state.nextId
        var event = {
            "title": buildEvent.title,
            "description": buildEvent.description,
            "time": buildEvent.time,
            "currCap": buildEvent.currCap,
            "capacity": buildEvent.capacity,
            "major": buildEvent.major,
            "id": buildEvent.id,
            "lat": buildEvent.lat,
            "lng": buildEvent.lng,
            "location": buildEvent.location
        }
        var ev = JSON.parse(JSON.stringify(buildEvent))
        state.events.push(ev)
        state.nextId = state.nextId + 1
        setState(JSON.parse(JSON.stringify(state)))
        console.log('in onsubmit', state)
        axios.post("https://fsdc18.azurewebsites.net/api/add-event", event)
        .then(console.log('in onsubmit', state))
        .catch((error) => console.log(error));
        
    }
    return (
        <Flex direction='row'>
        <Link to="/"><Image ml='20' mr='0' pr='0' h='35' w='35' src={arrow}/></Link>

        <div class="form">
        <div class="form-container">
            <h3>Add an event</h3>
            <h6><em>Click on Map to Select Location.</em></h6>
            <div class="input-box">
                <input variant='outline' placeholder='Title' type='text' required onInput={
                    (e) => updateBuild(e, 'title')
                }/>
            </div>
            <div class="input-box">
                <input variant='outline' type='time' required onInput={
                    (e) => updateBuild(e, 'time')
                }/>
            </div>
            <div class="input-box">
                <input  variant='outline' placeholder='Open Seats' type='number' required onInput={
                    (e) => updateBuild(e, 'currCap')
                }/>
            </div>
            <div class="input-box">
                <input  variant='outline' placeholder='Total Seats' type='number' required onInput={
                    (e) => updateBuild(e, 'capacity')
                }/>
            </div>

            <div class="input-box">
                <input  variant='outline' placeholder='room/floor (optional)' type='text' required onInput={
                    (e) => updateBuild(e, 'location')
                }/>
            </div>

            <div class="input-box">
            <select required onChange={(e) => updateBuild(e, 'major')}>
                <option value="none">Select Subject</option>
                <option value="AEROENG">Aerospace Engineering</option>
                <option value="AEROSPC">Aerospace Studies</option>
                <option value="AFRICAM">African American Studies</option>
                <option value="AGRS">Ancient Greek & Roman Studies</option>
                <option value="AHMA">Anc Hist & Medit Archae</option>
                <option value="AMERSTD">American Studies</option>
                <option value="ANTHRO">Anthropology</option>
                <option value="ARABIC">Arabic</option>
                <option value="ARCH">Architecture</option>
                <option value="ARESEC">Ag & Resource Econ & Pol</option>
                <option value="ARMENI">Armenian</option>
                <option value="ART">Art Practices</option>
                <option value="ASAMST">Asian Am & Asn Diaspora Stds</option>
                <option value="AST">Applied Science & Tech</option>
                <option value="ASTRON">Astronomy</option>
                <option value="BIOENG">Bioengineering</option>
                <option value="BIOLOGY">Biology</option>
                <option value="BIOPHY">Biophysics</option>
                <option value="BOSCRSR">Bosnian/Croatian/Serbian</option>
                <option value="BUDDSTD">Buddhist Studies</option>
                <option value="BURMESE">Burmese</option>
                <option value="CATALAN">Catalan</option>
                <option value="CELTIC">Celtic Studies</option>
                <option value="CHEM">Chemistry</option>
                <option value="CHICANO">Chicanx Latinx Studies</option>
                <option value="CHINESE">Chinese</option>
                <option value="CHMENG">Chemical Engineering</option>
                <option value="CIVENG">Civil & Environmental Eng</option>
                <option value="CLASSIC">Classics</option>
                <option value="CMPBIO">Computational Biology</option>
                <option value="COGSCI">Cognitive Science</option>
                <option value="COLWRIT">College Writing Programs</option>
                <option value="COMPLIT">Comparative Literature</option>
                <option value="COMPBIO">Comparative Biochemistry</option>
                <option value="COMPSCI">Computer Science</option>
                <option value="CRITTH">Critical Theory</option>
                <option value="CUNEIF">Cuneiform</option>
                <option value="CYBER">Information and Cybersecurity</option>
                <option value="CYPLAN">City & Regional Planning</option>
                <option value="DANISH">Danish</option>
                <option value="DATA">Data Science, Undergraduate</option>
                <option value="DATASCI">Data Science</option>
                <option value="DEMOG">Demography</option>
                <option value="DESINV">Design Innovation</option>
                <option value="DEVENG">Development Engineering</option>
                <option value="DEVP">Development Practice</option>
                <option value="DEVSTD">Development Studies</option>
                <option value="DUTCH">Dutch</option>
                <option value="EALANG">East Asian Languages</option>
                <option value="ECON">Economics</option>
                <option value="EDSTEM">CalTeach</option>
                <option value="EDUC">Education</option>
                <option value="EECS">Electrical Eng & Computer Sci</option>
                <option value="EGYPT">Egyptian</option>
                <option value="ELENG">Electrical Engineering</option>
                <option value="ENERES">Energy and Resources</option>
                <option value="ENGIN">Engineering</option>
                <option value="ENGLISH">English</option>
                <option value="ENVDES">Environmental Design</option>
                <option value="ENVECON">Environ Econ & Policy</option>
                <option value="EPS">Earth & Planetary Science</option>
                <option value="ESPM">Env Sci, Policy, & Mgmt</option>
                <option value="ETHSTD">Ethnic Studies</option>
                <option value="EUST">European Studies</option>
                <option value="EWMBA">Evening & Weekend MBA</option>
                <option value="FILIPN">Filipino</option>
                <option value="FILM">Film</option>
                <option value="FINNISH">Finnish</option>
                <option value="FOLKLOR">Folklore</option>
                <option value="FRENCH">French</option>
                <option value="GEOG">Geography</option>
                <option value="GERMAN">German</option>
                <option value="GLOBAL">Global Studies</option>
                <option value="GMS">Global Metro Studies</option>
                <option value="GPP">Global Poverty & Practice</option>
                <option value="GREEK">Greek</option>
                <option value="GSPDP">Grad Professional Dev Pgm</option>
                <option value="GWS">Gender & Womens Studies</option>
                <option value="HEBREW">Hebrew</option>
                <option value="HINDI">Hindi</option>
                <option value="ANTHRO">Anthropology</option>
                <option value="HISTART">History of Art</option>
                <option value="HISTORY">History</option>
                <option value="HMEDSCI">Health & Medical Sciences</option>
                <option value="HUM">Arts & Humanities</option>
                <option value="HUNGARI">Hungarian</option>
                <option value="IAS">International & Area Stds</option>
                <option value="INDENG">Industrial Eng & Ops Rsch</option>
                <option value="INDONES">Indonesian</option>
                <option value="INFO">Information</option>
                <option value="INTEGBI">Integrative Biology</option>
                <option value="ISF">Interdisciplinary Studies</option>
                <option value="ITALIAN">Italian Studies</option>
                <option value="JAPAN">Japanese</option>
                <option value="JEWISH">Jewish Studies</option>
                <option value="JOURN">Journalism</option>
                <option value="KHMER">Khmer</option>
                <option value="KOREAN">Korean</option>
                <option value="LANPRO">Language Proficiency Pgm</option>
                <option value="LATAMST">Latin American Studies</option>
                <option value="LATIN">Latin</option>
                <option value="LAW">Law</option>
                <option value="LDARCH">Landscape Arch & Env Plan</option>
                <option value="LEGALST">Legal Studies</option>
                <option value="LGBT">LGBT Studies</option>
                <option value="LINGUIS">Linguistics</option>
                <option value="LS">Letters & Science</option>
                <option value="MATH">Mathematics</option>
                <option value="MATSCI">Materials Science & Eng</option>
                <option value="MBA">Business Admin-MBA</option>
                <option value="MCELLBI">Molecular & Cell Biology</option>
                <option value="MECENG">Mechanical Engineering</option>
                <option value="MEDIAST">Media Studies</option>
                <option value="MEDST">Medieval Studies</option>
                <option value="MELC">Mid Eastern Lang and Cultures</option>
                <option value="MESTU">Middle Eastern Studies</option>
                <option value="MFE">Financial Engineering</option>
                <option value="MILAFF">Military Affairs</option>
                <option value="MILSCI">Military Science</option>
                <option value="MONGOLN">Mongolian</option>
                <option value="MPS">Math and Physical Sciences</option>
                <option value="MUSIC">Music</option>
                <option value="NATAMST">Native American Studies</option>
                <option value="NATRES">Natural Resources</option>
                <option value="NAVSCI">Naval Science</option>
                <option value="NEUROSC">Neuroscience</option>
                <option value="NORWEGN">Norwegian</option>
                <option value="NSE">Nanoscale Science & Eng</option>
                <option value="NUCENG">Nuclear Engineering</option>
                <option value="NUSCTX">Nutritional Science & Tox</option>
                <option value="NWMEDIA">New Media</option>
                <option value="OPTOM">Optometry</option>
                <option value="PACS">Peace & Conflict Studies</option>
                <option value="PBHLTH">Public Health</option>
                <option value="PERSIAN">Persian</option>
                <option value="PHDBA">Business Admin-PhD</option>
                <option value="PHILOS">Philosophy</option>
                <option value="PHYSED">Physical Education</option>
                <option value="PHYSICS">Physics</option>
                <option value="PLANTBI">Plant & Microbial Biology</option>
                <option value="POLECON">Political Economy</option>
                <option value="POLISH">Polish</option>
                <option value="POLSCI">Political Science</option>
                <option value="PORTUG">Portuguese</option>
                <option value="PSEUDO">Pseudocourse</option>
                <option value="PSYCH">Psychology</option>
                <option value="PUBAFF">Public Affairs</option>
                <option value="PUBPOL">Public Policy</option>
                <option value="PUNJABI">Punjabi</option>
                <option value="RDEV">Real Estate Development</option>
                <option value="RELIGST">Religious Studies</option>
                <option value="RHETOR">Rhetoric</option>
                <option value="RUSSIAN">Russian</option>
                <option value="SANSKR">Sanskrit</option>
                <option value="SASIAN">South Asian</option>
                <option value="SCANDIN">Scandinavian</option>
                <option value="SCMATHE">Science & Math Education</option>
                <option value="SEASIAN">Southeast Asian</option>
                <option value="SLAVIC">Slavic Languages & Lit</option>
                <option value="SOCIOL">Sociology</option>
                <option value="SOCWEL">Social Welfare</option>
                <option value="SPANISH">Spanish</option>
                <option value="SSEASN">South & SE Asian Studies</option>
                <option value="STAT">Statistics</option>
                <option value="STS">Science & Tech Studies</option>
                <option value="STUDIES">Advanced Doctoral Studies</option>
                <option value="SWEDISH">Swedish</option>
                <option value="TAMIL">Tamil</option>
                <option value="TELUGU">Telugu</option>
                <option value="THEATER">Theater Dance & Perf Stds</option>
                <option value="TIBETIAN">Tibetian</option>
                <option value="TURKISH">Turkish</option>
                <option value="UGBA">Business Admin-Undergrad</option>
                <option value="UGIS">UGIS-UG Interdisc Studies</option>
                <option value="UKRAINI">Ukrainian Language and Lit</option>
                <option value="URDU">Urdu</option>
                <option value="VIETNMS">Vietnamese</option>
                <option value="VISSCI">Vision Science</option>
                <option value="VISSTD">Visual Studies</option>
                <option value="XMBA">Executive MBA</option>
                <option value="Yiddish">Yiddish</option>
            </select>
            </div>
            <div class="input-box">
                <input variant='outline' placeholder='Event Description ' type='text' required onInput={
                    (e) => updateBuild(e, 'description')
                } />
            </div>
            </div>
            
            
            <Flex>
                <Box>Selected</Box>
                <CheckIcon />
                
            </Flex>
            <div class="button-container">
                <input class="submit-button" type='submit' value='Post Event' onClick={onSubmit}/>
                
                <Link to='/'>
                    <div class="back-button"> Go Back </div>
                </Link>
            </div>
            
        </div>
        </Flex>
    )
}

export default AddEventForm
