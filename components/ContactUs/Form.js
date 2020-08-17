import React, { useState } from 'react';
import contactImage from '../../images/contact.webp';
import * as emailjs from 'emailjs-com';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
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

        if (phone === '' || phone === undefined) {
            setError('Branch field is empty!');
            return;
        }

        if (subject === '' || subject === undefined) {
            setError('Year field is empty');
            return;
        }

        if (message === '' || message === undefined) {
            setError('Idea field is empty');
            return;
        }

        setLoading(true);
        const templateId = 'template_WqJ0qH73_clone';
        const variables = {
            from_name: name,
            from_email: email,
            subject: subject,
            phone: phone,
            message: message
        };
        emailjs.send('gmail', templateId, variables).then((res) => {
            console.log('Email sent! ', res);
            setName('');
            setEmail('');
            setPhone('');
            setSubject('');
            setMessage('');
            setError('');
            setLoading(false);
        });
    }

    return (
        <section className="contact-area pt-50">
            <div className="container">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <img src={contactImage} alt="image" />
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <form id="contactForm">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            required={true}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            data-error="Please enter your name"
                                            placeholder="Name"
                                        />
                                        <div className="help-block with-errors" />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control"
                                            required={true}
                                            data-error="Please enter your email"
                                            placeholder="Email"
                                        />
                                        <div className="help-block with-errors" />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="form-group">
                                        <input
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="form-control"
                                            placeholder="Phone"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="form-group">
                                        <input
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            className="form-control"
                                            placeholder="Subject"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            name="message"
                                            className="form-control"
                                            id="message"
                                            cols="30"
                                            rows="5"
                                            required
                                            data-error="Write your message"
                                            placeholder="Your Message"
                                        />
                                        <div className="help-block with-errors" />
                                    </div>
                                </div>

                                <span style={{ color: 'red' }}>{error}</span>

                                <div className="col-lg-12 col-md-12">
                                    <input
                                        value={loading ? 'Sending...' : 'Submit message'}
                                        type="button"
                                        onClick={handleSubmit}
                                        className="btn btn-primary"
                                    />
                                    <div id="msgSubmit" className="h3 text-center hidden" />
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Form;
