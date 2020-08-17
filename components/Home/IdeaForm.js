import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

function IdeaForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [idea, setIdea] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    emailjs.init('user_M4xFRYqZzfYr5bqw2Td0y');

    function handleSubmit() {
        if (name === '' || name === undefined) {
            setError('Name field is empty!');
            return;
        }

        if (email === '' || email === undefined) {
            setError('Email field is empty!');
            return;
        }

        if (branch === '' || branch === undefined) {
            setError('Branch field is empty!');
            return;
        }

        if (year === '' || year === undefined) {
            setError('Year field is empty');
            return;
        }

        if (idea === '' || idea === undefined) {
            setError('Idea field is empty');
            return;
        }
        setLoading(true);
        const templateId = 'template_WqJ0qH73';
        const variables = {
            from_name: name,
            from_email: email,
            reply_to: email,
            branch: branch,
            year: year,
            idea: idea
        };
        emailjs.send('gmail', templateId, variables).then((res) => {
            console.log('Email sent! ', res);
            setName('');
            setEmail('');
            setBranch('');
            setYear('');
            setIdea('');
            setError('');
            setLoading(false);
        });
        console.log(name, email, branch, year, idea);
    }

    return (
        <section className="idea-form ptb-100 bg-gray">
            <div className="container">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="analysis-text">
                            <h3>Have an awesome idea?</h3>
                            <h3>Let's brainstorm!</h3>
                            <div className={'bar'} />
                            <div className={'code'}>
                                <p className="mb-1">
                                    <b>Input:</b>
                                </p>
                                <p className="mb-1">
                                    const <b>idea</b> = ["Revolutionary Idea"];
                                </p>
                                <p className="mb-1">
                                    if(
                                    <b>
                                        idea.includes("technicalKnowledge" || "developers" ||
                                        {'  '}"domainKnowledge" || "designers "{' '}
                                    </b>
                                    ){' { '}
                                </p>
                                <p className="ml-4 mb-0">
                                    <b>submitIdea();</b>
                                </p>
                                <p className="mb-1">{' } '}</p>
                                <p className="mb-1">
                                    <b>Output: </b>helpReceived()
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="analysis-form">
                            <form>
                                <div className="form-group">
                                    <input
                                        required={true}
                                        placeholder="Name*"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        required
                                        type="email"
                                        placeholder="Email*"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        required
                                        placeholder="Branch*"
                                        className="form-control"
                                        value={branch}
                                        onChange={(e) => setBranch(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        required
                                        placeholder="Year*"
                                        className="form-control"
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea
                                        placeholder="Idea*"
                                        className="form-control"
                                        required={true}
                                        value={idea}
                                        onChange={(e) => setIdea(e.target.value)}
                                    />
                                </div>
                                <span style={{ color: 'red' }}>{error}</span>
                                <input
                                    value={loading ? 'Sending...' : 'Submit Idea'}
                                    type="button"
                                    onClick={handleSubmit}
                                    className="btn btn-primary"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <svg
                className="idea-form-bottom"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z" fill="#ffffff" />
            </svg>
        </section>
    );
}

export default IdeaForm;
