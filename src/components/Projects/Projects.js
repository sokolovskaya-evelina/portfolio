import React from 'react';
import style from './Projects.module.scss'
import Project from './Project/Project';
import Title from '../../common/components/title/Title';
import socialImage from './../../assets/image/social_network.jpg'
import todolistImage from './../../assets/image/Todolist.jpg'
import counterImage from './../../assets/image/counter.jpg'
import keyboardImage from './../../assets/image/keyboard.jpg'
import calculatorImage from './../../assets/image/calculator.jpg'
import gemPuzzleImage from './../../assets/image/gemPuzzle.jpg'
import ITunesImage from './../../assets/image/ITunes.jpg'
import momentumImage from './../../assets/image/momentum.jpg'
import shelterImage from './../../assets/image/shelter.jpg'


const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }
    const counter = {
        backgroundImage: `url(${counterImage})`
    }
    const keyboard = {
        backgroundImage: `url(${keyboardImage})`
    }
    const gemPuzzle = {
        backgroundImage: `url(${gemPuzzleImage})`
    }
    const ITunes = {
        backgroundImage: `url(${ITunesImage})`
    }
    const momentum = {
        backgroundImage: `url(${momentumImage})`
    }
    const shelter = {
        backgroundImage: `url(${shelterImage})`
    }
    const calculator = {
        backgroundImage: `url(${calculatorImage})`
    }
    return (
        <div className={style.works_block} id="projects">
            <div className={style.works_container}>
                <Title title={'Projects'}/>
                <div className={style.projects}>
                    {/*<Project style={social} title={'Social Network'}
                             link={'https://sokolovskaya-evelina.github.io/social_network'}
                             description={'Use TypeScript, React, Redux, Redux-Thunk, API, Axios, TDD, Unit-tests, Reselect, Ant Design'}
                    />*/}
                    <Project style={todolist} title={'Todo list'}
                             link={'https://sokolovskaya-evelina.github.io/todolist'}
                             description={'Use TypeScript, React, Redux, Redux-Thunk, API, Axios, TDD, Unit-tests, Storybook, Material-UI'}/>
                    <Project style={counter} title={'Counter'} link={'https://sokolovskaya-evelina.github.io/counter'}
                             description={'Use TypeScript, React, Redux, LocalStorage'}/>
                    <Project style={shelter} title={'Shelter'}
                             link={'https://sokolovskaya-evelina.github.io/shelter/pages/main/main.html'}
                             description={'HTML, CSS, Vanilla JS'}/>
                    <Project style={momentum} title={'Momentum'}
                             link={'https://sokolovskaya-evelina.github.io/momentum/'}
                             description={'HTML, CSS, Vanilla JS, API, LocalStorage'}/>
                    <Project style={gemPuzzle} title={'gemPuzzle'}
                             link={'https://sokolovskaya-evelina.github.io/gem-puzzle/'}
                             description={'HTML, CSS, Vanilla JS, LocalStorage'}/>
                    <Project style={ITunes} title={'ITunes'} link={'https://sokolovskaya-evelina.github.io/iTunes/'}
                             description={'HTML, CSS, Vanilla JS'}/>
                    <Project style={keyboard} title={'Keyboard'}
                             link={'https://sokolovskaya-evelina.github.io/keyboard/'}
                             description={'HTML, CSS, Vanilla JS'}/>
                    <Project style={calculator} title={'Calculator'}
                             link={'https://sokolovskaya-evelina.github.io/calculator/'}
                             description={'HTML, CSS, Vanilla JS'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;