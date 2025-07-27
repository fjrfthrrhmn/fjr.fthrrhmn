import { activityBackground, activityIcons } from "@/common/constants/about";
import { Activity } from "@/services/layard";

// Function to get activity image
const getActivityImage = (activity: Activity): string => {
  switch (activity.name) {
    case 'Code':
      if(activity.assets?.large_image){
        const httpsIndex = activity.assets.large_image.indexOf('raw');
        const cleanedUrl = activity.assets.large_image.slice(httpsIndex);

        return `https://${cleanedUrl}`;
      }

      return 'https://skillicons.dev/icons?i=vscode';

    case 'Spotify':
      if (activity.assets?.large_image) {
        const imageId = activity.assets.large_image.split(':')[1];
        return `https://i.scdn.co/image/${imageId}`;
      }

      return 'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png';

    case 'Roblox':
      return 'https://i.pinimg.com/736x/d4/2a/6c/d42a6c5c6cd6eba516d0c8bda1f5a79e.jpg';

    default:
      return 'https://skillicons.dev/icons?i=discord';
  }
};

// Function to format activity details
const formatActivityDetails = (activity: Activity): { title: string; subtitle: string } => {
  switch (activity.name) {
    case 'Code':
      const codeTitle = (() => {
        const i = activity.details?.indexOf('-');
        return activity.details?.slice(0, i) || 'Editing code';
      })();

      const codeSubtitle = (() => {
        const i = activity.state?.indexOf(':');
        return activity.state?.slice(0, i) || 'No file info';
      })();

      return { title: codeTitle, subtitle: codeSubtitle };

    case 'Spotify':
      return {
        title: activity.details || 'Unknown Song',
        subtitle: activity.state || 'Unknown Artist',
      };

    case 'Roblox':
      return {
        title: activity.details || 'Playing Roblox',
        subtitle: activity.state || 'In game',
      };

    default:
      return {
        title: activity.details || activity.name,
        subtitle: activity.state || 'Active',
      };
  }
};

// Function to get background class
const getActivityBackground = (activityName: string): string => activityBackground[activityName as keyof typeof activityBackground] || activityBackground.Others;

// Function to get activity icon
const getActivityIcon = (activityName: string): string => activityIcons[activityName as keyof typeof activityIcons] || activityIcons.Others;

export { getActivityBackground, getActivityIcon, getActivityImage, formatActivityDetails };