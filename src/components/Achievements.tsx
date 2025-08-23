import { Trophy, Award, Users, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      title: "Research Paper Publication",
      subtitle: "ICAIH 2025 Conference",
      description: "Published research paper on 'Deepfake Detection using CNN + RNN' at the International Conference on Artificial Intelligence and Healthcare 2025.",
      icon: <BookOpen className="text-primary" size={32} />,
      type: "research",
      year: "2025",
      featured: true
    },
    {
      title: "1st Prize Winner",
      subtitle: "FPV Drone Competition",
      description: "Won first place in the FPV Drone competition at Techno-Cultural Fest for innovative drone design and flight performance.",
      icon: <Trophy className="text-yellow-500" size={32} />,
      type: "competition",
      year: "2024",
      featured: true
    },
    {
      title: "JVTM Participation",
      subtitle: "Bacti-Go Mobile App",
      description: "Successfully participated in the JVTM (Junior Venture Technology Management) program with our healthcare mobile application.",
      icon: <Users className="text-accent" size={32} />,
      type: "program",
      year: "2024"
    },
    {
      title: "Hackathon Enthusiast",
      subtitle: "6+ Hackathons Participated",
      description: "Actively participated in numerous hackathons, showcasing problem-solving skills and innovative thinking in competitive environments.",
      icon: <Award className="text-primary-glow" size={32} />,
      type: "competition",
      year: "2023-2024",
      count: "6+"
    }
  ];

  const stats = [
    { label: "Research Papers", value: "1", suffix: "" },
    { label: "Competition Wins", value: "1", suffix: "st Prize" },
    { label: "Hackathons", value: "6", suffix: "+" },
    { label: "Projects Completed", value: "10", suffix: "+" }
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements</span> & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones and accomplishments that showcase my dedication to innovation and excellence
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-hover neon-border bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                  <span className="text-lg">{stat.suffix}</span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={`card-hover neon-border bg-card/50 backdrop-blur-sm overflow-hidden group animate-fade-in ${
                achievement.featured ? 'md:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="p-4 rounded-xl bg-secondary/50 group-hover:bg-secondary/70 transition-colors">
                    {achievement.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold gradient-text">
                          {achievement.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {achievement.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {achievement.year}
                        </Badge>
                        {achievement.count && (
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            {achievement.count}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Type Badge */}
                    <div className="pt-2">
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${achievement.type === 'research' ? 'bg-blue-500/10 text-blue-400' : ''}
                          ${achievement.type === 'competition' ? 'bg-yellow-500/10 text-yellow-400' : ''}
                          ${achievement.type === 'program' ? 'bg-green-500/10 text-green-400' : ''}
                        `}
                      >
                        {achievement.type === 'research' && 'Research'}
                        {achievement.type === 'competition' && 'Competition'}
                        {achievement.type === 'program' && 'Program'}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Decorative element for featured achievements */}
                {achievement.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-gradient-secondary border border-border/50">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-muted-foreground mb-6">
              Always looking for opportunities to learn, grow, and make an impact through technology
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Open to Collaborations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm text-muted-foreground">Seeking Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;