import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Category from '../pages/Category';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Search from '../pages/Search';
import Services from '../pages/Services';
import Skills from '../pages/Skills';

const AppRoute = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/services">
                <Services/>
            </Route>
            <Route exact path="/projects">
                <Projects/>
            </Route>
            <Route exact path="/skills">
                <Skills/>
            </Route>
            <Route exact path="/blogs">
                <Blog/>
            </Route>
            <Route exact path="/contact">
                <Contact/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/resume">
                <Resume/>
            </Route>
            <Route exact path="/blog/post/:id">
                <Post/>
            </Route>
            <Route exact path="/blog/:category">
                <Category/>
            </Route>
            <Route exact path="/search">
                <Search/>
            </Route>
        </Switch>
    );
};

export default AppRoute;