import moment from 'moment';

const getColor = (level: number) => ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'][level] ?? '#161b22';
const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

type Contribution = {
  [date: string]: {
    count: number;
    level: number;
  };
};

// TODO: Improve this code
export const ContributionsGraph = ({ data }: { data: Contribution }) => {
  const start = moment().startOf('year');
  const today = moment();
  const padStart = start.clone().startOf('week');
  const padEnd = today.clone().endOf('week'); 

  const totalDays = padEnd.diff(padStart, 'days') + 1;
  const allDates = Array.from({ length: totalDays }, (_, i) => padStart.clone().add(i, 'days').format('YYYY-MM-DD'));

  // Group into weeks
  const weeks: string[][] = [];
  for (let i = 0; i < allDates.length; i += 7) {
    weeks.push(allDates.slice(i, i + 7));
  }

  const months: { weekIndex: number; name: string }[] = [];
  let lastMonth = '';
  weeks.forEach((week, i) => {
    const date = moment(week[0]);
    const monthName = date.format('MMM');
    const year = date.year();

    if (monthName !== lastMonth && year === start.year()) {
      months.push({ weekIndex: i, name: monthName });
      lastMonth = monthName;
    }
  });
  

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        {/* Month labels */}
        <div className="flex mb-2">
          <div className="w-8" />
          <div className="flex gap-[2px]">
            {weeks.map((_, weekIdx) => {
              const month = months.find(m => m.weekIndex === weekIdx);
              return (
                <div key={weekIdx} className="w-3.5 h-4 text-xs text-gray-500 flex items-center justify-center">
                  {month?.name || ''}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main grid */}
        <div className="flex">
          {/* Day labels */}
          <div className="flex flex-col gap-[2px] mr-2">
            {dayLabels.map((day, idx) => (
              <div key={idx} className="w-6 h-3.5 text-xs text-gray-500 flex items-center">
                {idx % 2 === 1 ? day : ''}
              </div>
            ))}
          </div>

          {/* Contributions grid */}
          <div className="grid grid-flow-col auto-cols-max gap-[2.5px]">
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="grid grid-rows-7 gap-[2.5px]">
                {week.map((date, dayIdx) => {
                  const current = data?.[date];
                  const isFuture = moment(date).isAfter(today, 'day');
                  const level = isFuture ? 0 : current?.level ?? 0;
                  const count = isFuture ? 0 : current?.count ?? 0;

                  return (
                    <div
                      key={dayIdx}
                      className="w-3.5 h-3.5 rounded"
                      title={isFuture ? '' : `${count} contributions on ${date}`}
                      style={{
                        backgroundColor: getColor(level),
                        opacity: isFuture ? 0.3 : 1,
                        cursor: isFuture ? 'default' : 'pointer',
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Color Legend */}
        <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map(level => (
              <div key={level} className="w-3 h-3 rounded" style={{ backgroundColor: getColor(level) }} />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};
