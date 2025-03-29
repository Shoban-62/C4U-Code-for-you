import { useState } from "react";
import "/src/Tests/styles/Tests.css";

const Tests = () => {
    const [test, setTest] = useState(0);

    return (
        <div className="tests-container">
            <div>
                <h1>Form of test</h1>
                <div className="test-content">
                    
                        <div className="test-selector">
                            <h3>Select a Test</h3>
                            <div className="button-group">
                                <button className={test === 1 ? 'test-button-active' : 'test-button'} onClick={() => setTest(1)}>Personality Test</button>
                                <button className={test === 2 ? 'test-button-active' : 'test-button'} onClick={() => setTest(2)}>Learner Type Test</button>
                                <button className={test === 3 ? 'test-button-active' : 'test-button'} onClick={() => setTest(3)}>Academic Record</button>
                                <button className={test === 4 ? 'test-button-active' : 'test-button'} onClick={() => setTest(4)}>Interview Preparation</button>
                            </div>
                        </div>
                    {test === 1 ? (
                        <>
                            <div className="personality-test">
                                <h2>Big Five Personality Test</h2>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <section>
                                        <h3>Openness to Experience</h3>
                                        <div className="question">
                                            <p>1. I enjoy trying new and unconventional experiences.</p>
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <label key={value}>
                                                    <input type="radio" name="q1" value={value} />
                                                    {value}
                                                </label>
                                            ))}
                                        </div>

                                        <div className="question">
                                            <p>2. I am interested in abstract ideas and philosophical discussions.</p>
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <label key={value}>
                                                    <input type="radio" name="q2" value={value} />
                                                    {value}
                                                </label>
                                            ))}
                                        </div>
                                    </section>

                                    <section>
                                        <h3>Conscientiousness</h3>
                                        <div className="question">
                                            <p>3. I like to keep things organized and structured in my daily life.</p>
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <label key={value}>
                                                    <input type="radio" name="q3" value={value} />
                                                    {value}
                                                </label>
                                            ))}
                                        </div>
                                    </section>

                                    <section>
                                        <h3>Extraversion</h3>
                                        <div className="question">
                                            <p>4. I feel energized when I am around a lot of people.</p>
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <label key={value}>
                                                    <input type="radio" name="q4" value={value} />
                                                    {value}
                                                </label>
                                            ))}
                                        </div>
                                    </section>

                                    <section>
                                        <h3>Agreeableness</h3>
                                        <div className="question">
                                            <p>5. I tend to trust people and believe in their good intentions.</p>
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <label key={value}>
                                                    <input type="radio" name="q5" value={value} />
                                                    {value}
                                                </label>
                                            ))}
                                        </div>
                                    </section>

                                    <section>
                                        <h3>Neuroticism</h3>
                                        <div className="question">
                                            <p>6. I often feel anxious or worried about small things.</p>
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <label key={value}>
                                                    <input type="radio" name="q6" value={value} />
                                                    {value}
                                                </label>
                                            ))}
                                        </div>
                                    </section>

                                    <div className="button-group-final">
                                        <button  onClick={() => setTest(2)} type="submit">Submit Test</button>
                                        <button>Back to Tests</button>
                                    </div>
                                </form>
                            </div>
                        </>
                    ) : test === 2 ? (
                        <>
                            <div className="learning-test">
                                <h2>Learning Style Test</h2>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <section>
                                        <h3>Visual Learning Style</h3>
                                        <div className="question">
                                            <p>1. I prefer to learn through diagrams and visual aids.</p>
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <label key={value}>
                                                    <input type="radio" name="q1" value={value} />
                                                    {value}
                                                </label>
                                            ))}
                                        </div>
                                        <div className="question">
                                            <p>2. I remember information better when it's presented in charts or graphs.</p>
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <label key={value}>
                                                    <input type="radio" name="q2" value={value} />
                                                    {value}
                                                </label>
                                            ))}
                                        </div>
                                    </section>

                                    <section>
                                        <h3>Auditory Learning Style</h3>
                                        <div className="question">
                                            <p>3. I learn best through listening and discussions.</p>
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <label key={value}>
                                                    <input type="radio" name="q3" value={value} />
                                                    {value}
                                                </label>
                                            ))}
                                        </div>
                                    </section>

                                    <section>
                                        <h3>Kinesthetic Learning Style</h3>
                                        <div className="question">
                                            <p>4. I prefer hands-on learning experiences.</p>
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <label key={value}>
                                                    <input type="radio" name="q4" value={value} />
                                                    {value}
                                                </label>
                                            ))}
                                        </div>
                                    </section>

                                    <div className="button-group-final">
                                        <button onClick={() => setTest(3)} type="submit">Submit Test</button>
                                        <button >Back to Tests</button>
                                    </div>
                                </form>
                            </div>
                        </>
                    ) : test === 3 ? (
                        <>
                            <div className="academic-record">
                                <h2>Academic Record</h2>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <section>
                                        <h3>High School Education</h3>
                                        <div className="form-group">
                                            <label htmlFor="schoolName">School Name:</label>
                                            <input type="text" id="schoolName" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="grade10">10th Grade Percentage:</label>
                                            <input type="number" id="grade10" min="0" max="100" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="grade12">12th Grade Percentage:</label>
                                            <input type="number" id="grade12" min="0" max="100" required />
                                        </div>
                                    </section>

                                    <section>
                                        <h3>Undergraduate Education</h3>
                                        <div className="form-group">
                                            <label htmlFor="collegeName">College Name:</label>
                                            <input type="text" id="collegeName" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="degree">Degree Program:</label>
                                            <select id="degree" required>
                                                <option value="">Select a degree</option>
                                                <option value="btech">B.Tech</option>
                                                <option value="be">B.E</option>
                                                <option value="bsc">B.Sc</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cgpa">Current CGPA:</label>
                                            <input type="number" id="cgpa" step="0.01" min="0" max="10" required />
                                        </div>
                                    </section>

                                    <div className="button-group-final">
                                        <button onClick={() => setTest(4)} type="submit">Submit Record</button>
                                        <button >Back to Tests</button>
                                    </div>
                                </form>
                            </div>
                        </>
                    ) : test === 4 ? (
                        <>
                            <div className="interview-form">
                                <h1>Interview Preparation Form</h1>
                                
                                <section>
                                    <h2>1. Data Structures & Algorithms (DSA)</h2>
                                    <div className="question-group">
                                        <label htmlFor="q1">Q1: How would you find the kth largest element in an array?</label>
                                        <textarea id="q1" rows="3" placeholder="Write your answer..."></textarea>
                                    </div>
                                    <div className="question-group">
                                        <label htmlFor="q2">Q2: What is the difference between a linked list and an array?</label>
                                        <textarea id="q2" rows="3" placeholder="Write your answer..."></textarea>
                                    </div>
                                </section>

                                <section>
                                    <h2>2. Computer Science Fundamentals</h2>
                                    <div className="question-group">
                                        <label htmlFor="q3">Q3: How do you detect a cycle in a linked list?</label>
                                        <textarea id="q3" rows="3" placeholder="Write your answer..."></textarea>
                                    </div>
                                    <div className="question-group">
                                        <label htmlFor="q4">Q4: What is the difference between heap and stack memory?</label>
                                        <textarea id="q4" rows="3" placeholder="Write your answer..."></textarea>
                                    </div>
                                </section>

                                <section>
                                    <h2>3. System Design & Backend Concepts</h2>
                                    <div className="question-group">
                                        <label htmlFor="q5">Q5: How would you design a URL shortener like Bit.ly?</label>
                                        <textarea id="q5" rows="3" placeholder="Write your answer..."></textarea>
                                    </div>
                                </section>

                                <div>
                                    <button  className="back-button">Submit Report</button>
                                </div>
                                
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Tests;