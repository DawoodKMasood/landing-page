import clientCentricAnimation from '@/assets/animation/whyus/client-centric-approach.json';
import resultDrivenAnimation from '@/assets/animation/whyus/results-driven-methodology.json';
import expertiseExperienceAnimation from '@/assets/animation/whyus/expertise-and-experience.json';

const whyUsContent = {
  title: ' Why Choose Us',
  description: ' Innovative Solutions for Modern Challenges',
  cards: [
    {
      key: 'client-centric-approach',
      heading: 'Client-Centric Approach',
      description:
        'Your satisfaction is our top priority. We believe in keeping our clients informed and involved throughout the process, ensuring a transparent and collaborative working relationship',
      animation: clientCentricAnimation,
    },
    {
      key: 'results-driven-methodology',
      heading: 'Results-Driven Methodology',
      description:
        'Our solutions are designed to streamline operations. We focus on delivering tangible results, providing metrics and reports to track the progress and impact of our solutions.',
      animation: resultDrivenAnimation,
    },
    {
      key: 'expertise-and-experience',
      heading: 'Expertise and Experience',
      description:
        'Our team is composed of seasoned professionals with years of experience in the tech industry. We have a history of successfully implementing tech solutions across various industries, demonstrating our ability to handle diverse technological challenges.',
      animation: expertiseExperienceAnimation,
    },
  ],
};

export { whyUsContent };
