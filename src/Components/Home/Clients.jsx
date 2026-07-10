import React, { useState, useRef, useEffect } from 'react';

// Import your local 9:16 asset from the src folder
import localVideo1 from '../../assets/clientVideos/v2.mp4'; 

const clientVideos = [
  {
    id: 1,
    clientName: "Alexander Wright",
    role: "Founder, Apex Digital",
    videoUrl: localVideo1 
  },
  {
    id: 2,
    clientName: "Sarah Jenkins",
    role: "Operations Director",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: 3,
    clientName: "Marcus Thorne",
    role: "Growth Lead, Veloce",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: 4,
    clientName: "Elena Rostova",
    role: "Product Head, Kroma",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  {
    id: 5,
    clientName: "David Kim",
    role: "Founder, Nexus Labs",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: 6,
    clientName: "Amara Okafor",
    role: "E-commerce Strategist",
    videoUrl: localVideo1
  },
  {
    id: 7,
    clientName: "Christian Beck",
    role: "CTO, Core Architecture",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: 8,
    clientName: "Sofia Alvarez",
    role: "Marketing Director",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  }
];

export default function Clients() {
  // Track which video ID is currently playing across the entire layout
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <section className="w-full bg-[#F4F6F1] text-black py-24 px-6 md:px-12 lg:px-16 selection:bg-black selection:text-white">
      {/* Changed max-w-7xl to max-w-[95rem] to allow the 4-column layout to expand wider */}
      <div className="max-w-[95rem] mx-auto">
        
        {/* Header Section */}
        <div className="max-w-[700px] lg:max-w-[900px] mx-auto text-center mb-12 sm:mb-16 flex flex-col items-center">
          <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
            In Their Words
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.2] font-semibold text-[#000000]">
            The Secret Behind High-Converting <span className="text-[#25D366]">WhatsApp Chats</span>
          </h2>
        </div>

        {/* Responsive Grid Layout - Reverted to 4 columns for desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clientVideos.map((client) => (
            <VideoCard 
              key={client.id} 
              client={client} 
              activeVideoId={activeVideoId}
              setActiveVideoId={setActiveVideoId}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function VideoCard({ client, activeVideoId, setActiveVideoId }) {
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  
  const isPlaying = activeVideoId === client.id;

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch((err) => console.log("Playback error:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      setActiveVideoId(null);
    } else {
      setActiveVideoId(client.id);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuteState = !isMuted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
      if (!nextMuteState && volume === 0) {
        setVolume(0.5);
        videoRef.current.volume = 0.5;
      }
    }
  };

  return (
    <div className="relative group w-full aspect-[2/3] bg-neutral-900 overflow-hidden border border-neutral-200 transition-all duration-300 hover:shadow-xl rounded-[1.2rem]">
      
      <video
        ref={videoRef}
        src={client.videoUrl}
        className="w-full cursor-pointer h-full object-cover"
        loop
        playsInline
        preload="auto"
        onClick={togglePlay}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 pointer-events-none">
        <p className="text-white text-lg font-bold tracking-tight leading-tight">
          {client.clientName}
        </p>
        <p className="text-neutral-400 text-xs mt-1 font-medium tracking-wide">
          {client.role}
        </p>
      </div>

      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5">
        
        {/* Volume panel: circular morphing to rounded-2xl (1rem) on hover */}
        <div className="flex items-center h-10 bg-black/50 backdrop-blur-md border border-white/20 px-2.5 group/volume transition-all duration-300 max-w-[40px] hover:max-w-[155px] overflow-hidden rounded-full hover:rounded-full">
          <button 
            onClick={toggleMute} 
            className="text-white focus:outline-none transition-transform active:scale-95 mr-2 flex-shrink-0"
            aria-label="Toggle Mute"
          >
            {isMuted || volume === 0 ? (
              <svg className="w-4 h-4 fill-current text-neutral-400" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            )}
          </button>
          
          <input 
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-16 accent-[#00E676] bg-neutral-700 h-1 appearance-none cursor-pointer rounded-full outline-none opacity-0 group-hover/volume:opacity-100 transition-opacity duration-200"
          />
        </div>

        {/* Play Button: Circular */}
        <button
          onClick={togglePlay}
          className="flex cursor-pointer items-center justify-center w-10 h-10 bg-black/50 backdrop-blur-md border border-white/20 text-white rounded-full transition-all duration-200 hover:bg-black/80 hover:scale-105 active:scale-95 flex-shrink-0"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 fill-current translate-x-[1px]" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

      </div>
    </div>
  );
}