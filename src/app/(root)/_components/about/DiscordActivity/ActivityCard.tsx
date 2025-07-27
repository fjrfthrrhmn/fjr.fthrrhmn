import Typography from "@/components/custom/typography";
import { formatActivityDetails, getActivityBackground, getActivityIcon, getActivityImage } from "./utils";
import { Activity } from "@/services/layard";
import Image from "next/image";

interface ActivityCardProps {
  className?: string,
  activity: Activity
}

export const ActivityCard = ({ activity, className }: ActivityCardProps) => {
  const { title, subtitle } = formatActivityDetails(activity);
  const backgroundClass = getActivityBackground(activity.name);
  const activityImage = getActivityImage(activity);
  const activityIcon = getActivityIcon(activity.name);

  return (
    <div
      className={`mb-2 last:mb-0 group relative overflow-hidden flex gap-4 items-center px-2 py-1 sm:p-4 ${backgroundClass} shadow-xl rounded-xl ${className}`}
    >
      {/* Activity Image */}
      <Image
        src={activityImage}
        alt={activity.name}
        width={60}
        height={60}
        className="rounded-lg"
      />

      {/* Activity Content */}
      <div className="flex flex-col flex-1 min-w-0">
        <Typography.Text variant="sm/semibold" className="text-white line-clamp-2">
          {title}
        </Typography.Text>
        <Typography.Text variant="xs/normal" className="line-clamp-1">
          {subtitle}
        </Typography.Text>
      </div>

      {/* Background Icon */}
      <img
        src={activityIcon}
        alt={activity.name}
        className="opacity-30 absolute -right-5 top-3 w-20 h-20 rotate-12 group-hover:opacity-100 group-hover:-right-2 transition-all duration-300"
      />
    </div>
  );
};
