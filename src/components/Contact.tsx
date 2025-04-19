
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/30 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-white/30 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <Mail className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Email</h4>
                <p className="text-gray-600">hello@example.com</p>
              </div>
              <div className="bg-white/30 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <MessageSquare className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Social Media</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Twitter: @username</p>
                  <p>LinkedIn: /in/username</p>
                  <p>GitHub: @username</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
