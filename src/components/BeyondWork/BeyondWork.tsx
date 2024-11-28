import React from 'react';
import { motion } from 'framer-motion';
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
        url: "https://soundcloud.com/your-profile"
      },
      details: [
        "Produced 10+ original tracks",
        "Specialized in ambient and electronic genres",
        "Home studio setup with professional equipment"
      ]
    },
    {
      title: "Chess",
      icon: <Gamepad2 size={24} />,
      description: "Strategic player with a passion for chess theory and competitive matches",
      link: {
        text: "View Chess.com Profile",
        url: "https://chess.com/member/your-profile"
      },
      details: [
        "1800+ ELO rating",
        "Participated in local tournaments",
        "Regular online competitor"
      ]
    },
    {
      title: "Cricket",
      icon: <Trophy size={24} />,
      description: "Active cricket player and enthusiast with experience in local leagues",
      link: {
        text: "Read My Cricket Blog",
        url: "https://your-blog.com/cricket"
      },
      details: [
        "Opening batsman for local club",
        "5+ years of competitive experience",
        "Regular weekend practice sessions"
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