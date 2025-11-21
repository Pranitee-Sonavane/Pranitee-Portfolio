import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind or just want to say hello? I'd love to hear from you. 
              Fill out the form and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "fanaa@example.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "San Francisco, CA" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 glass p-4 rounded-lg hover-lift"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-lg">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-2xl space-y-6"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="smooth-transition focus:glow"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="smooth-transition focus:glow"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="smooth-transition focus:glow resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              type="submit"
              className="w-full glow hover-lift"
              size="lg"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
