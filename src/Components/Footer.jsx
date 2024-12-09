const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              About Lingo Journey
            </h2>
            <p>
              Welcome to <strong>Lingo Journey</strong>, your companion in
              learning new languages! We are dedicated to making language
              learning accessible, interactive, and enjoyable for everyone.
              Explore our lessons, practice pronunciation, and take your skills
              to the next level.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Contact Info</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@lingojourney.com"
                  className="hover:text-blue-400 transition"
                >
                  Email: contact@lingojourney.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-blue-400 transition"
                >
                  Phone: +1 234 567 890
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ajnahid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  LinkedIn: linkedin.com/in/ajnahid
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/start-learning"
                  className="hover:text-blue-400 transition"
                >
                  Start Learning
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center border-t border-gray-700 mt-8 pt-4">
          <p>
            © {new Date().getFullYear()} Lingo Journey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
