'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Music, Gamepad2, Code, Headphones, Clock, ExternalLink } from 'lucide-react';
import { useLanyardActivity } from '@/common/hooks/useLayard';

interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ActivityModal({ isOpen, onClose }: ActivityModalProps) {
  const { discordUser, activities, isLoading } = useLanyardActivity();

  const statusColors = {
    online: 'bg-green-500 shadow-green-500/50',
    idle: 'bg-yellow-500 shadow-yellow-500/50',
    dnd: 'bg-red-500 shadow-red-500/50',
    offline: 'bg-gray-500',
  };

  const getActivityIcon = (activity: any) => {
    if (activity.name === 'Spotify') return Music;
    if (activity.type === 0) return Gamepad2;
    if (activity.name?.toLowerCase().includes('code')) return Code;
    return Headphones;
  };

  const getActivityTypeLabel = (activity: any) => {
    if (activity.name === 'Spotify') return 'Listening to';
    if (activity.type === 0) return 'Playing';
    if (activity.type === 2) return 'Listening to';
    if (activity.type === 3) return 'Watching';
    return 'Using';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-zinc-900 border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-white">Discord Activity</DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4 p-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-zinc-800 rounded-full animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse" />
                  <div className="h-3 w-16 bg-zinc-800 rounded animate-pulse" />
                </div>
              </div>
              <div className="h-20 bg-zinc-800 rounded-lg animate-pulse" />
            </motion.div>
          ) : !discordUser ? (
            <motion.div
              key="offline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Headphones className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-400">Currently offline</p>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Discord User Info */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="relative">
                  <img
                    src={`https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png?size=128`}
                    alt={discordUser.username}
                    className="w-16 h-16 rounded-full"
                  />
                  <motion.div
                    className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-zinc-900 shadow-sm ${
                      statusColors[discordUser.discord_status] || statusColors.online
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{discordUser.display_name || discordUser.username}</h3>
                  <Badge variant="secondary" className="capitalize">
                    {discordUser.discord_status}
                  </Badge>
                </div>
              </motion.div>

              {/* Activities */}
              <div className="space-y-4">
                {activities && activities.length > 0 ? (
                  activities.map((activity, index) => {
                    const Icon = getActivityIcon(activity);
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50 hover:border-zinc-600/50 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          {activity.assets?.large_image && (
                            <motion.img
                              src={
                                activity.assets.large_image.startsWith('spotify:')
                                  ? `https://i.scdn.co/image/${activity.assets.large_image.slice(8)}`
                                  : activity.assets.large_image.startsWith('mp:')
                                  ? `https://media.discordapp.net/${activity.assets.large_image.slice(3)}`
                                  : activity.assets.large_image
                              }
                              alt={activity.name}
                              className="w-12 h-12 rounded-lg flex-shrink-0"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            />
                          )}

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <Icon size={14} className="text-gray-400" />
                              <span className="text-xs text-gray-400 uppercase tracking-wide">{getActivityTypeLabel(activity)}</span>
                            </div>

                            <h4 className="font-medium text-white truncate">{activity.name}</h4>

                            {activity.details && <p className="text-sm text-gray-300 truncate mt-1">{activity.details}</p>}

                            {activity.state && <p className="text-sm text-gray-400 truncate">{activity.state}</p>}

                            {/* External Link for Spotify */}
                            {activity.name === 'Spotify' && activity.sync_id && (
                              <motion.a
                                href={`https://open.spotify.com/track/${activity.sync_id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 mt-2 text-xs text-green-400 hover:text-green-300 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ExternalLink size={10} />
                                Open in Spotify
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center py-6 text-gray-400"
                  >
                    <Headphones className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>No current activities</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
