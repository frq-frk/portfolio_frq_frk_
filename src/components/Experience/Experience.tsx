import Section from '../Section';
import ExperienceCard from './ExperienceCard';
import SectionTitle from '../common/SectionTitle';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Verifone',
      companyURL:'https://www.verifone.com/en/global',
      period: '2022 - Present',
      description: [
        'Implemented Host Based Product Restrictions feature support of Visa Fleet 2.0 and Wright Express cards on Site Payment Terminal for Payment FEP’s NWS, VAPS, P66 & NBS',
        'Engineered a new feature to enable transmission of ISO Prefix to Site Level Authorization Loyalty host for Above Site Authorized Mobile payments.',
        'Built a feature of site terminal to sync time with the payment host for Payment FEP’s VAPS & P66; which reduced nearly 15% of the payment time zone conflicts',
        'In times as a member of Customer Success Team, collaborated with cross-functional teams to deliver high-quality software solutions with high priority sticking to the short deadlines'
      ]
    },
    {
      title: 'Python Developer Intern',
      company: 'Saathi Global Education Network',
      companyURL:'https://wellfound.com/company/saathigen',
      period: '2020 - 2021',
      description: [
        'Fixed email validation bug in ‘forgot password’ functionality.',
        'Developed prototype of search, wish list and connections feature feasible for MVP1.',
        'Designed and deployed a robust super admin privilege exchange functionality, complete with real-time history tracking feature, resulting an 25% increase in system accountability in system and 10% increase in client sign ups',
        'Participated in design discussions and contributed to team\'s best outcomes'
      ]
    }
  ];

  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="A timeline of my professional journey and key achievements"
        />
        <div className="relative mt-12 ml-4">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.title}
              {...exp}
              isLast={index === experiences.length - 1}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;