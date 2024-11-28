import { Music2, Gamepad2, Trophy } from 'lucide-react';
import Section from '../Section';
import SectionTitle from '../common/SectionTitle';
import InterestCard from './InterestCard';

const BeyondWork = () => {
  const interests = [
    {
      title: "Music Production",
      icon: <Music2 size={24} />,
      description: "Creating electronic music and ambient soundscapes in my home studio",
      link: {
        text: "Listen on SoundCloud",
        url: "https://soundcloud.com/frq_frk"
      },
      details: [
        "Produced few original tracks",
        "Specialized in electronic genres and vocals",
        "Inclined more into Independent Music"
      ]
    },
    {
      title: "Chess",
      icon: <Gamepad2 size={24} />,
      description: "Strategic player with a passion for chess theory and competitive matches",
      link: {
        text: "View Chess.com Profile",
        url: "https://www.chess.com/member/frq_frk"
      },
      details: [
        "1200+ ELO rating",
        "Participated in few online tournaments",
        "Regular online competitor"
      ]
    },
    {
      title: "Story teller",
      icon: <Trophy size={24} />,
      description: "A story writer who loves to bring the words to the life",
      link: {
        text: "Read My story Blog",
        url: "https://storysterme.blogspot.com/"
      },
      details: [
        "Written many short stories",
        "Working on many other fiction books",
        "Loves to attend regular openmic sessions"
      ]
    }
  ];

  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Beyond Work" 
          subtitle="Exploring my passions and interests outside the world of coding"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {interests.map((interest, index) => (
            <InterestCard 
              key={interest.title}
              {...interest}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BeyondWork;