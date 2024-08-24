import React from 'react';

const Projects = () => {
    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="project">
                <div className="project-content">
                    <img src='/image/Step.PNG' alt="Step navigation app" />
                    <div className="project-description">
                        <h3>Step navigation app</h3>
                        <p>"Step navigation" typically refers to the user interface (UI) design pattern that guides users through a multi-step process.</p>
                        <button onClick={() => handleClick('https://example.com/step-navigation')}>View project</button>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-content">
                    <div className="project-description">
                        <h3>Bank app</h3>
                        <p>Web-based banking application designed to provide users with a seamless and efficient banking experience.</p>
                        <button onClick={() => handleClick('https://example.com/bank-app')}>View project</button>
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
                        <button onClick={() => handleClick('https://example.com/worldwise')}>View project</button>
                    </div>
                    <img src='/image/' alt="Worldwise app" />
                </div>
            </div>
            <div className="project">
                <div className="project-content">
                    <img src='/image/advice.PNG' alt="Get advice app" />
                    <div className="project-description">
                        <h3>Get advice app</h3>
                        <p>GetAdvice offers a platform where you can receive advice from knowledgeable peers.</p>
                        <button onClick={() => handleClick('https://example.com/get-advice')}>View project</button>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-content">
                    <img src='/image/Classy-Weather.PNG' alt="Classy Weather app" />
                    <div className="project-description">
                        <h3>Classy Weather app</h3>
                        <p>Classy Weather offers detailed forecasts, customizable notifications, and unique visualizations, all wrapped in a sleek, modern design.</p>
                        <button onClick={() => handleClick('https://example.com/classy-weather')}>View project</button>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-content">
                    <img src='/image/usePopcorn.PNG' alt="usePopcorn app" />
                    <div className="project-description">
                        <h3>usePopcorn app</h3>
                        <p>usePopcorn app allows you search for recommendations, tracking your watchlist, or diving deep into film details. It provides all the tools you need to enjoy movies.</p>
                        <button onClick={() => handleClick('https://example.com/usepopcorn')}>View project</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
