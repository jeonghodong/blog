"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useMemo, useEffect } from "react";

// CloudFront 도메인
const CLOUDFRONT_DOMAIN = "https://d2y4kcl4gu8ysz.cloudfront.net";

interface PhotoCardProps {
  title: string;
  imageCount: number;
  coverImage: string;
  images: string[];
  onClick: () => void;
}

const PhotoCard = ({ title, imageCount, coverImage, onClick }: PhotoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // 이미지 URL 생성 함수
  const getImageUrl = (path: string) => {
    return `${CLOUDFRONT_DOMAIN}${path}.jpg`;
  };

  return (
    <motion.div className="relative w-full aspect-[4/5] cursor-pointer" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} onClick={onClick}>
      {[...Array(2)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            transform: isHovered ? `translateY(${-8 * (index + 1)}px) rotate(${3 * (index + 1)}deg)` : `translateY(${4 * (index + 1)}px) rotate(${1 * (index + 1)}deg)`,
            transition: "transform 0.3s ease",
            zIndex: 2 - index,
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          }}
        >
          <div className={`absolute inset-0 rounded-lg ${index === 0 ? "bg-gray-100" : "bg-gray-200"}`} />
        </motion.div>
      ))}

      <motion.div
        className="relative w-full h-full rounded-lg overflow-hidden"
        style={{
          zIndex: 3,
          transform: isHovered ? "translateY(-12px)" : "translateY(0)",
          transition: "transform 0.3s ease",
          boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        }}
        whileHover={{ scale: 1.02 }}
      >
        <Image src={getImageUrl(coverImage)} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority quality={75} className={`object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`} onLoad={handleImageLoad} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{imageCount} photos</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PhotoGallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);

  const photoAlbums = useMemo(
    () => [
      {
        title: "Town",
        imageCount: 7,
        coverImage: "/photos/town/town1",
        images: [
          "/photos/town/town1", //
          "/photos/town/town2",
          "/photos/town/town3",
          "/photos/town/town4",
          "/photos/town/town5",
          "/photos/town/town6",
          "/photos/town/town7",
        ],
      },
      {
        title: "Busan Port Chinsu Park",
        imageCount: 13,
        coverImage: "/photos/busan/busan-port-chinsu-park8",
        images: [
          "/photos/busan/busan-port-chinsu-park1",
          "/photos/busan/busan-port-chinsu-park2",
          "/photos/busan/busan-port-chinsu-park3",
          "/photos/busan/busan-port-chinsu-park4",
          "/photos/busan/busan-port-chinsu-park5",
          "/photos/busan/busan-port-chinsu-park6",
          "/photos/busan/busan-port-chinsu-park7",
          "/photos/busan/busan-port-chinsu-park8",
          "/photos/busan/busan-port-chinsu-park9",
          "/photos/busan/busan-port-chinsu-park10",
          "/photos/busan/busan-port-chinsu-park11",
          "/photos/busan/busan-port-chinsu-park12",
          "/photos/busan/busan-port-chinsu-park13",
        ],
      },
      {
        title: "Busan Changbi",
        imageCount: 7,
        coverImage: "/photos/busan/busan-changbi2",
        images: [
          "/photos/busan/busan-changbi1", //
          "/photos/busan/busan-changbi2",
          "/photos/busan/busan-changbi3",
          "/photos/busan/busan-changbi4",
          "/photos/busan/busan-changbi5",
          "/photos/busan/busan-changbi6",
          "/photos/busan/busan-changbi7",
        ],
      },
      {
        title: "Black and White",
        imageCount: 6,
        coverImage: "/photos/black-and-white/black-and-white7",
        images: [
          "/photos/black-and-white/black-and-white1", //
          "/photos/black-and-white/black-and-white2",
          "/photos/black-and-white/black-and-white3",
          "/photos/black-and-white/black-and-white4",
          "/photos/black-and-white/black-and-white5",
          "/photos/black-and-white/black-and-white6",
          "/photos/black-and-white/black-and-white7",
        ],
      },
      {
        title: "Friend",
        imageCount: 3,
        coverImage: "/photos/friend/friend1",
        images: [
          "/photos/friend/friend1", //
          "/photos/friend/friend2",
          "/photos/friend/friend3",
        ],
      },
    ],
    []
  );

  const handleAlbumClick = useCallback((index: number) => {
    setSelectedAlbum(index);
  }, []);

  const handleCloseGallery = useCallback(() => {
    setSelectedAlbum(null);
  }, []);

  // 이미지 URL 생성 함수
  const getImageUrl = (path: string) => {
    return `${CLOUDFRONT_DOMAIN}${path}.jpg`;
  };

  useEffect(() => {
    if (selectedAlbum !== null) {
      const nextAlbumIndex = (selectedAlbum + 1) % photoAlbums.length;
      photoAlbums[nextAlbumIndex].images.forEach((image) => {
        const img = document.createElement("img");
        img.src = getImageUrl(image);
      });
    }
  }, [selectedAlbum, photoAlbums]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {photoAlbums.map((album, index) => (
          <PhotoCard key={index} title={album.title} imageCount={album.imageCount} coverImage={album.coverImage} images={album.images} onClick={() => handleAlbumClick(index)} />
        ))}
      </div>

      {/* 전체화면 갤러리 뷰 */}
      <AnimatePresence>
        {selectedAlbum !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={handleCloseGallery}>
            <div className="relative w-full h-full max-w-7xl mx-auto p-4">
              <button className="absolute top-4 right-4 text-white text-2xl z-10" onClick={handleCloseGallery}>
                ✕
              </button>

              {/* 이미지 컨테이너 */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full max-h-[80vh] overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {photoAlbums[selectedAlbum].images.map((image, index) => (
                      <motion.div key={index} className="relative aspect-[4/5] rounded-lg overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                        <Image src={getImageUrl(image)} alt={`${photoAlbums[selectedAlbum].title} - ${index + 1}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} className="object-cover" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
