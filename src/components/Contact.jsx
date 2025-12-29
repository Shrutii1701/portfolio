import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            await emailjs.sendForm(
                'service_m9e2qs2',     // Your Service ID
                'template_d5lhyif',    // Your Template ID
                formRef.current,
                'ih-PGkE6xQJIReJG1'      // Your EmailJS Public Key
            );

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });
            formRef.current.reset();
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or email me directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="user_name">Name</label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_email">Email</label>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your message..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send size={18} />
                    </button>
                </form>

                {status.message && (
                    <div className={`form-status ${status.type}`}>
                        {status.message}
                    </div>
                )}

                <div className="social-links">
                    <a
                        href="https://github.com/Shrutii1701"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="GitHub"
                    >
                        <Github size={22} />
                    </a>
                    <a
                        href="https://linkedin.com/in/shruti"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={22} />
                    </a>
                    <a
                        href="mailto:shruti@example.com"
                        className="social-link"
                        aria-label="Email"
                    >
                        <Mail size={22} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
