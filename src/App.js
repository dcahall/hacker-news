import './App.css';
import { Container } from '@mui/material';

import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { News } from "./pages/News/News";
import { Main } from "./components/Main/Main";
import { Topic } from "./pages/Topic/Topic";
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';


function App() {
	const [activeTopic, setActiveTopic] = useState(null);

    return (
            <Container maxWidth='lg'>
				<Router>
					<Header/>
					<Main>
							<Switch>
								<Route exact path="/">
									<ErrorBoundary>
										<News setActiveTopic={setActiveTopic}/>
									</ErrorBoundary>
								</Route>
								<Route path="/:id">
									<ErrorBoundary>
										<Topic topic={activeTopic} setActiveTopic={setActiveTopic}/>
									</ErrorBoundary>
								</Route>
							</Switch>
					</Main>
				</Router>
            </Container>
    );
}

export default App;
