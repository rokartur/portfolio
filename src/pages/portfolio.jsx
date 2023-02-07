import Router from "preact-router";
import AllProjects from "./allProjects.jsx";
import SelectedProject from "./selectedProject.jsx";

const Portfolio = () => {
    return (
        <Router>
            <AllProjects path={"/portfolio"}/>
            <SelectedProject path={"/portfolio/:project"}/>
        </Router>
    );
}

export default Portfolio;
