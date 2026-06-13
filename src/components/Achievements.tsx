import { Trophy, Award, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useSmoothCounter } from '@/hooks/useSmoothCounter';

const StatCard = ({ label, value, suffix }: { label: string; value: number; suffix: string }) => {
  const { count, ref } = useSmoothCounter({ end: value, duration: 2000 });

  return (
    <Card className="neon-border bg-card/50 backdrop-blur-sm text-center hover:shadow-card hover:-translate-y-1 transition-all duration-400 group">
      <CardContent className="p-6" ref={ref}>
        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 tabular-nums">
          {count}
          <span className="text-lg md:text-xl">{suffix}</span>
        </div>
        <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
          {label}
        </p>
      </CardContent>
    </Card>
  );
};

const Achievements = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollReveal({ threshold: 0.2 });
  const { ref: cardsRef, isInView: cardsInView } = useScrollReveal({ threshold: 0.1 });

  const achievements = [
    {
      title: "Research Paper Publication",
      subtitle: "ICAIH 2025 Conference",
      description: "Published research paper on 'Deepfake Detection using CNN + RNN' at the International Conference on Artificial Intelligence and Healthcare 2025.",
      icon: <BookOpen className="text-primary" size={28} />,
      type: "research",
      year: "2025",
      featured: true
    },
    {
      title: "1st Prize Winner",
      subtitle: "FPV Drone Competition",
      description: "Won first place in the FPV Drone competition at Techno-Cultural Fest for innovative drone design and flight performance.",
      icon: <Trophy className="text-yellow-500" size={28} />,
      type: "competition",
      year: "2024",
      featured: true
    },
    {
      title: "JVTM Participation",
      subtitle: "Bacti-Go Mobile App",
      description: "Successfully participated in the JVTM (Jnana Vijnana Tantrajnana Mela) program with our healthcare mobile application.",
      icon: <Users className="text-accent" size={28} />,
      type: "program",
      year: "2024"
    },
    {
      title: "Hackathon Enthusiast",
      subtitle: "6+ Hackathons Participated",
      description: "Actively participated in numerous hackathons, showcasing problem-solving skills and innovative thinking in competitive environments.",
      icon: <Award className="text-primary-glow" size={28} />,
      type: "competition",
      year: "2023-2024",
      count: "6+"
    }
  ];

  const stats = [
    { label: "Research Papers", value: 3, suffix: "" },
    { label: "Competition Wins", value: 1, suffix: "st Prize" },
    { label: "Hackathons", value: 6, suffix: "+" },
    { label: "Projects Completed", value: 6, suffix: "+" }
  ];

  const typeColors: Record<string, string> = {
    research: 'bg-blue-500/10 text-blue-400',
    competition: 'bg-yellow-500/10 text-yellow-400',
    program: 'bg-green-500/10 text-green-400',
  };

  const typeLabels: Record<string, string> = {
    research: 'Research',
    competition: 'Competition',
    program: 'Program',
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Achievements</span> & Recognition
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones and accomplishments that showcase my dedication to innovation and excellence
          </p>
        </motion.div>

        {/* Statistics with animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <StatCard label={stat.label} value={stat.value} suffix={stat.suffix} />
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={achievement.featured ? 'md:col-span-2' : ''}
            >
              <Card
                className={`neon-border bg-card/50 backdrop-blur-sm overflow-hidden group hover:shadow-card hover:-translate-y-1 transition-all duration-400 relative ${
                  achievement.featured ? '' : ''
                }`}
              >
                {/* Featured pulse */}
                {achievement.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      className="w-3 h-3 bg-primary rounded-full"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [1, 0.5, 1],
                        boxShadow: [
                          '0 0 0 0 hsl(var(--primary) / 0.4)',
                          '0 0 0 10px hsl(var(--primary) / 0)',
                          '0 0 0 0 hsl(var(--primary) / 0)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                )}

                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <motion.div
                      className="p-3 md:p-4 rounded-xl bg-secondary/50 group-hover:bg-secondary/70 transition-colors flex-shrink-0"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {achievement.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 space-y-3 min-w-0">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold gradient-text">
                            {achievement.title}
                          </h3>
                          <p className="text-primary font-medium text-sm md:text-base">
                            {achievement.subtitle}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                            {achievement.year}
                          </Badge>
                          {achievement.count && (
                            <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                              {achievement.count}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {achievement.description}
                      </p>

                      {/* Type Badge */}
                      <div className="pt-1">
                        <Badge
                          variant="secondary"
                          className={typeColors[achievement.type] || ''}
                        >
                          {typeLabels[achievement.type]}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="inline-block p-8 rounded-2xl glass border border-border/30">
            <h3 className="text-xl md:text-2xl font-bold gradient-text mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Always looking for opportunities to learn, grow, and make an impact through technology
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2.5 h-2.5 bg-primary rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-muted-foreground">Open to Collaborations</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2.5 h-2.5 bg-accent rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span className="text-sm text-muted-foreground">Seeking Opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;