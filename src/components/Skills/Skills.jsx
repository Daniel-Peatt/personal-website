import styles from './Skills.module.css';

// Local Data
import {SKILL_INFO} from './skillsData.js'

// Images
import javaScriptImg from '../../assets/javascript.png';
import cSharpImg from '../../assets/C_Sharp.png';
import cssImg from '../../assets/CSS.png';
import gitImg from '../../assets/git.png';
import gitHubImg from '../../assets/github.png';
import javaImg from '../../assets/Java.png';
import nodeJsImg from '../../assets/Node.js.png';
import postGresImg from '../../assets/Postgres.png';
import pythonImg from '../../assets/Python.png';
import reactImg from '../../assets/React.png';
import sqlImg from '../../assets/SQL.png';
import expressImg from '../../assets/express.png';

import { useState } from 'react';



function SkillsProp ({img, ...props}) {
    return (
        <img src={img} {...props}/>
    )
}

export default function Skills () {
    
    const [skillTitle, setSkillTitle] = useState("Howdy!"); 
    const [skillText, setSkillText] = useState(`I am a recent Computer Science graduate with a strong background in full-stack web development. Throughout my academic career, I worked on collaborative projects, honing my skills in JavaScript, HTML, CSS, React, and server-side development with Node.js, Express and Postgres. I actively contribute to my GitHub, committing code daily, and continuously expand my expertise through self-driven projects and online courses. Passionate about building efficient and scalable applications. 
        
        Click on a Icon to learn more...`)
    
    function handleSelect(selectedImg) {
        setSkillTitle(selectedImg);

        if (selectedImg === 'Javascript') setSkillText(SKILL_INFO['Javascript'].description);
        if (selectedImg === 'CSS') setSkillText(SKILL_INFO['CSS'].description);
        if (selectedImg === 'React') setSkillText(SKILL_INFO['React'].description);
        if (selectedImg === 'Node.js') setSkillText(SKILL_INFO['NodeJS'].description);
        if (selectedImg === 'Express') setSkillText(SKILL_INFO['Express'].description);
        if (selectedImg === 'Postgres') setSkillText(SKILL_INFO['Postgres'].description);
        if (selectedImg === 'SQL') setSkillText(SKILL_INFO['SQL'].description);
        if (selectedImg === 'Git') setSkillText(SKILL_INFO['Git'].description);
        if (selectedImg === 'GitHub') setSkillText(SKILL_INFO['GitHub'].description);
        if (selectedImg === 'C#') setSkillText(SKILL_INFO['CSHARP'].description);
        if (selectedImg === 'Java') setSkillText(SKILL_INFO['Java'].description);
        if (selectedImg === 'Python') setSkillText(SKILL_INFO['Python'].description);

    }
    return (
        <div className={styles.container}>
            <div className={styles.skillImages}>
                <SkillsProp img={javaScriptImg} onClick={() => handleSelect('Javascript')}/>
                <SkillsProp img={cssImg} onClick={() => handleSelect('CSS')}/>
                <SkillsProp img={reactImg} onClick={() => handleSelect('React')}/>   
                <SkillsProp img={nodeJsImg} onClick={() => handleSelect('Node.js')} />
                <SkillsProp img={expressImg} onClick={() => handleSelect('Express')} />  
                <SkillsProp img={postGresImg} onClick={() => handleSelect('Postgres')}/>
                <SkillsProp img={sqlImg} onClick={() => handleSelect('SQL')}/>
                <SkillsProp img={gitImg} onClick={() => handleSelect('Git')}/>
                <SkillsProp img={gitHubImg} onClick={() => handleSelect('GitHub')}/>
                <SkillsProp img={cSharpImg} onClick={() => handleSelect('C#')}/>
                <SkillsProp img={javaImg} onClick={() => handleSelect('Java')}/>
                <SkillsProp img={pythonImg} onClick={() => handleSelect('Python')}/>
            </div>   
            <div className={styles.generatedText}>
                <h2>{skillTitle}</h2>
                <p>{skillText}</p>
            </div>      
        </div>
    )
}