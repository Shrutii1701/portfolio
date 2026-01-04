import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const contactInfo = [
    {
        icon: Mail,
        label: 'EMAIL',
        value: 'mishraa.shrutii17@gmail.com',
        href: 'mailto:mishraa.shrutii17@gmail.com',
        color: 'purple'
    },
    {
        icon: Linkedin,
        label: 'LINKEDIN',
        value: 'linkedin.com/in/shrutiimishraa',
        href: 'https://www.linkedin.com/in/shrutiimishraa/',
        color: 'purple'
    },
    {
        icon: Github,
        label: 'GITHUB',
        value: 'github.com/Shrutii1701',
        href: 'https://github.com/Shrutii1701',
        color: 'purple'
    },
    {
        icon: MapPin,
        label: 'LOCATION',
        value: 'India',
        href: null,
        color: 'purple'
    },
];

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
                'service_m9e2qs2',
                'template_4x9uzbd',
                formRef.current,
                'ih-PGkE6xQJIReJG1'
            );

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });
            formRef.current.reset();
        } catch (error) {
            console.error('Email send failed:', error);
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
            <h2 className="section-title">Contact Me</h2>
            <p className="section-subtitle">
                Let's connect and create something amazing together
            </p>

            <div className="contact-grid">
                {/* Left Side - Contact Info */}
                <div className="contact-info-card">
                    <h3 className="contact-info-title">Get In Touch</h3>
                    <p className="contact-info-desc">
                        Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and cybersecurity!
                    </p>

                    <div className="contact-links">
                        {contactInfo.map((item, index) => {
                            const IconComponent = item.icon;
                            const content = (
                                <div className={`contact-link-card ${item.color}`}>
                                    <div className={`contact-link-icon ${item.color}`}>
                                        <IconComponent size={22} />
                                    </div>
                                    <div className="contact-link-content">
                                        <span className="contact-link-label">{item.label}</span>
                                        <span className="contact-link-value">{item.value}</span>
                                    </div>
                                </div>
                            );

                            return item.href ? (
                                <a
                                    key={index}
                                    href={item.href}
                                    target={item.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="contact-link-wrapper"
                                >
                                    {content}
                                </a>
                            ) : (
                                <div key={index} className="contact-link-wrapper">
                                    {content}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="contact-form-card">
                    <h3 className="contact-form-title">Send a Message</h3>

                    <form ref={formRef} onSubmit={handleSubmit} className="contact-form-new">
                        <div className="form-group">
                            <label htmlFor="user_name">NAME</label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_email">EMAIL</label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">MESSAGE</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your message..."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary submit-btn-new"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
                            <Send size={18} />
                        </button>
                    </form>

                    {status.message && (
                        <div className={`form-status ${status.type}`}>
                            {status.message}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
