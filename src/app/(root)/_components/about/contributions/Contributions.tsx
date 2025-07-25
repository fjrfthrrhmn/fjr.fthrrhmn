'use client';
import { Title } from '@/components/custom/title';
import { Github } from 'lucide-react';
import { useContributions } from '@/common/hooks/useGithub';
import { ContributionsGraph } from './ContributionsGraph';
import moment from 'moment';

const arrayToDateMap = (arr: Array<any>): Record<string, any> => {
  return arr.reduce((acc, item) => {
    acc[item.date] = item;
    return acc;
  }, {} as Record<string, any>);
};


export const Contributions = () => {
  const data = useContributions('fjrfthrrhmn');
  const dataMap = arrayToDateMap(data.contributions);

  const total = Object.values(dataMap).reduce((acc, d) => acc + d.count, 0);
  const year = moment().year();

  return (
    <div className="space-y-6">
      <Title text="Contributions" icon={Github} desc={`Open source activity on GitHub — ${total} contributions in ${year}.`} />
      <ContributionsGraph data={dataMap} />
    </div>
  );
};
