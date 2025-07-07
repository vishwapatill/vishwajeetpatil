import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SERVICE_ID = 'service_us3byqb';
const TEMPLATE_ID = 'template_contact_me'; // match your EmailJS template
const PUBLIC_KEY = '7NJMbH9h9nHFGsEM5'; // your actual public key from EmailJS

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'fail'>('idle');
  const [lastSentTime, setLastSentTime] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();

    if (lastSentTime && now - lastSentTime < 60000) {
      alert("Please wait at least 1 minute before sending another message.");
      return;
    }

    if (!formRef.current) return;

    setStatus('loading');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setLastSentTime(Date.now());
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('fail');
      });

    setTimeout(() => {
      setStatus('idle');
    }, 10000);
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-lg"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full"></div>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or explore opportunities to collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className={`bg-card border-border modern-glow fade-in-left stagger-1 ${isVisible ? 'visible' : ''}`}>
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="bg-muted border-border text-white placeholder:text-muted-foreground"
                  required
                />
                <Input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="bg-muted border-border text-white placeholder:text-muted-foreground"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="bg-muted border-border text-white placeholder:text-muted-foreground resize-none"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white modern-glow"
                  disabled={status === 'loading' || (lastSentTime && Date.now() - lastSentTime < 60000)}
                >
                  {status === 'loading'
                    ? 'Sending...'
                    : status === 'success'
                    ? 'Message Sent!'
                    : status === 'fail'
                    ? 'Failed! Try Again'
                    : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className={`space-y-8 fade-in-right stagger-2 ${isVisible ? 'visible' : ''}`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:vishwajeetrajpatil2002@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group modern-glow"
              >
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-muted-foreground">vishwajeetrajpatil2002@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/vishwajeet-r-patil/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group modern-glow"
              >
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <p className="text-muted-foreground">Connect with me</p>
                </div>
              </a>

              <a
                href="https://github.com/vishwapatill"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group modern-glow"
              >
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <p className="text-muted-foreground">Check out my code</p>
                </div>
              </a>
            </div>

            <div className="pt-8">
              <a
  href="https://drive.google.com/file/d/1El7w4Zj3qPiOpFlQpyZP1vzqsYPirUFE/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    variant="outline"
    className="border-border text-foreground hover:bg-muted modern-glow transition-all duration-300"
  >
    Download Resume
  </Button>
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
