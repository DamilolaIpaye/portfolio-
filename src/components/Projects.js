import React from 'react';

const Projects = () => {
    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="projects" className='projects-section'>
            <h2>My Projects</h2>
            <div className="project">
                <div className="project-content">
                    <img src='/image/Step.PNG' alt="Step navigation app" />
                    <div className="project-description">
                        <h3>Step navigation app</h3>
                        <p>"Step navigation" typically refers to the user interface (UI) design pattern that guides users through a multi-step process.</p>
                        <button onClick={() => handleClick('https://step-sand.vercel.app/')}>View project</button>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-content">
                    <div className="project-description">
                        <h3>Bank app</h3>
                        <p>Web-based banking application designed to provide users with a seamless and efficient banking experience.</p>
                        <button onClick={() => handleClick('https://bank-xi-mauve.vercel.app/')}>View project</button>
                    </div>
                    <img src='/image/bank.PNG' alt="Bank app" />
                </div>
            </div>
            <div className="project">
                <div className="project-content">
                    <img src='/image/.PNG' alt="Atomic-blog app" />
                    <div className="project-description">
                        <h3>Atomic-blog app</h3>
                        <p>Description of project 1...</p>
                        <button onClick={() => handleClick('https://example.com/atomic-blog')}>View project</button>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-content">
                    <div className="project-description">
                        <h3>Worldwise app</h3>
                        <p>WorldWise helps you explore countries, and current events through a variety of features tailored to your learning style.</p>
                        <button onClick={() => handleClick('https://worldwise-beryl-pi.vercel.app/')}>View project</button>
                    </div>
                    <img src='/image/worldwise.PNG' alt="Worldwise app" />
                </div>
            </div>
            <div className="project">
                <div className="project-content">
                    <img src='/image/advice.PNG' alt="Get advice app" />
                    <div className="project-description">
                        <h3>Get advice app</h3>
                        <p>GetAdvice offers a platform where you can receive advice from knowledgeable peers.</p>
                        <button onClick={() => handleClick('https://get-advice-psi.vercel.app/')}>View project</button>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-content">
                    <img src='/image/Classy-Weather.PNG' alt="Classy Weather app" />
                    <div className="project-description">
                        <h3>Classy Weather app</h3>
                        <p>Classy Weather offers detailed forecasts, customizable notifications, and unique visualizations, all wrapped in a sleek, modern design.</p>
                        <button onClick={() => handleClick('https://classy-weather-3pq8.vercel.app/')}>View project</button>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-content">
                    <img src='/image/usePopcorn.PNG' alt="usePopcorn app" />
                    <div className="project-description">
                        <h3>usePopcorn app</h3>
                        <p>usePopcorn app allows you search for recommendations, tracking your watchlist, or diving deep into film details. It provides all the tools you need to enjoy movies.</p>
                        <button onClick={() => handleClick('https://popcorn1-rosy.vercel.app/')}>View project</button>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-content">
                    <div className="project-description">
                        <h3>Tip Calculator app</h3>
                        <p>The Tip Calculator app is a simple yet efficient tool designed to help users calculate tips quickly and accurately.</p>
                        <button onClick={() => handleClick('https://tip-calculator-gray-tau.vercel.app/')}>View project</button>
                    </div>
                    <img src='/image/tip-calculator.PNG' alt="tip-calculator app" />
                </div>
            </div>
            <div className="project">
                <div className="project-content">
                    <img src='/image/quiz.PNG' alt="React-quiz app" />
                    <div className="project-description">
                        <h3>React-quiz app</h3>
                        <p> React quiz app involves building a dynamic, interactive user interface that can present questions, record user responses, and provide feedback or scores.</p>
                        <button onClick={() => handleClick('https://react-quiz-phi-eight.vercel.app/')}>View project</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
