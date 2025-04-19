
import { motion } from "framer-motion";
import { Code, Briefcase, Brush, LayoutDashboard } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Code,
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: LayoutDashboard,
      items: ["Node.js", "Express", "PostgreSQL", "REST APIs"]
    },
    {
      category: "Design",
      icon: Brush,
      items: ["UI/UX", "Figma", "Adobe XD", "Responsive Design"]
    },
    {
      category: "Tools",
      icon: Briefcase,
      items: ["Git", "VS Code", "Docker", "AWS"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/30 backdrop-blur-lg rounded-xl p-6 hover:shadow-xl transition-all border border-white/20"
            >
              <skill.icon className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
