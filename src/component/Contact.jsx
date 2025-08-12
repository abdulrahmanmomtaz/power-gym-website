function Contact (){
    return (
        <section id="contact">
            <h2>Contact Us</h2>
        <p>Have questions or want to join? Reach out to us now!</p>
        <div className="contact-content">
        <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>📞 +20 123 456 7890</p>
            <p>📧 info@fitnessclub.com</p>
            <p>📍 123 Main Street, Cairo, Egypt</p>
        </div>
    </div>
        </section>
    )
}

export default Contact;