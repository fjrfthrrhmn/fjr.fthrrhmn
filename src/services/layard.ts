const URL = 'https://api.lanyard.rest/v1/users';
const DISCORD_ID = '794908435908788234';

export const getLayard = async (): Promise<LanyardResponse> => {
  const res = await fetch(`${URL}/${DISCORD_ID}`);
  return res.json();
};

// TYPES
export interface LanyardResponse {
  success: boolean;
  data: LanyardUserData;
}

interface LanyardUserData {
  discord_user: DiscordUser;
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  activities: Activity[];
  listening_to_spotify: boolean;
  spotify: SpotifyData | null;
  active_on_discord_web: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
  kv?: Record<string, any>;
}

interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  bot: boolean;
  public_flags?: number;
}

export interface Activity {
  type: number;
  name: string;
  details?: string;
  state?: string;
  timestamps?: {
    start?: number;
    end?: number;
  };
  sync_id?: string;
  session_id?: string;
  party?: {
    id?: string;
  };
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
  application_id?: string;
  flags?: number;
  id?: string;
}

interface SpotifyData {
  track_id: string;
  track_name?: string;
  album_name?: string;
  artist_name?: string;
  album_art_url?: string;
  timestamps?: {
    start: number;
    end?: number;
  };
}
