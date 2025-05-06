import React, { useState } from 'react';
import { ChevronLeft, ArrowLeft, ArrowRight, X, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const getYouTubeEmbedUrl = (url) => {
  // Handle different YouTube URL formats
  const youtubeRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(youtubeRegex);
  const videoId = match && match[7].length === 11 ? match[7] : null;
  
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  // If it's already an embed URL, return it
  if (url.includes('youtube.com/embed')) {
    return url;
  }
  
  // Default case, return the original URL
  return url;
};

export function ProjectDetail({ 
  title,
  categories = [],
  description,
  authors = [],
  media = { images: [], videos: [] },
  content = [],
  links = {}
}) {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  
  // Function to handle navigation back to home projects section
  const navigateToHomeProjects = () => {
    navigate('/', { state: { scrollToSection: 'projects' } });
  };
  
  // Image gallery handlers
  const openImageGallery = (index) => {
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when gallery is open
  };
  
  const closeImageGallery = () => {
    setCurrentImageIndex(null);
    document.body.style.overflow = ''; // Restore scrolling
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === media.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? media.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Back Navigation */}
      <div className="bg-muted py-3 md:py-4 px-4 md:px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={navigateToHomeProjects}
            className="inline-flex items-center text-foreground hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Projects
          </button>
        </div>
      </div>
      
      {/* Project Header */}
      <header className="py-8 md:py-12 px-4 md:px-6 bg-muted border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
            {categories.map((category, index) => (
              <span 
                key={index} 
                className="text-xs md:text-sm px-2 md:px-3 py-1 bg-primary/10 text-black rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">{title}</h1>
          <p className="text-base md:text-xl text-foreground max-w-3xl mb-6">{description}</p>
          
          {/* Project Links */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            {links.github && (
              <a 
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm md:text-base"
              >
                <Github size={16} className="md:size-18" />
                <span>GitHub Repo</span>
              </a>
            )}
            
            {links.demo && (
              <a 
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm md:text-base"
              >
                <ExternalLink size={16} className="md:size-18" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </header>
      
      {/* Authors Section */}
      {authors.length > 0 && (
        <section className="py-6 md:py-8 px-4 md:px-6 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">Authors</h2>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {authors.map((author, index) => (
                <div key={index} className="flex items-center gap-3">
                  {author.avatar && (
                    <img 
                      src={author.avatar} 
                      alt={author.name} 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className="font-medium text-foreground">{author.name}</div>
                    {author.role && <div className="text-xs md:text-sm text-foreground/70">{author.role}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Media Gallery */}
      {(media.images.length > 0 || media.videos.length > 0) && (
        <section className="py-6 md:py-8 px-4 md:px-6 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">Media</h2>
            
            {/* Images */}
            {media.images.length > 0 && (
              <div className="mb-6 md:mb-8">
                <h3 className="text-base md:text-lg font-medium text-foreground mb-3 md:mb-4">Images</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  {media.images.map((image, index) => (
                    <div 
                      key={index} 
                      className="bg-muted rounded-lg overflow-hidden border border-border cursor-pointer"
                      onClick={() => openImageGallery(index)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt || `Project image ${index + 1}`} 
                        className="w-full h-36 md:h-48 object-cover"
                      />
                      {image.caption && (
                        <div className="p-2 md:p-3 text-xs md:text-sm text-foreground">{image.caption}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Videos */}
            {media.videos.length > 0 && (
              <div>
                <h3 className="text-base md:text-lg font-medium text-foreground mb-3 md:mb-4">Videos</h3>
                <div className="flex justify-center">
                  {media.videos.map((video, index) => (
                    <div 
                      key={index} 
                      className="bg-muted rounded-lg overflow-hidden border border-border w-full max-w-3xl"
                    >
                      <div className="aspect-video">
                        <iframe
                          src={getYouTubeEmbedUrl(video.embedUrl)}
                          title={video.title || `Project video ${index + 1}`}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      {video.caption && (
                        <div className="p-2 md:p-3 text-xs md:text-sm text-foreground text-center">{video.caption}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
      
      {/* Project Content */}
      <section className="py-6 md:py-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">Project Description</h2>
          <div className="prose prose-sm md:prose-lg max-w-none">
            {content.map((section, index) => (
              <div key={index} className="mb-6 md:mb-8">
                {section.title && <h3 className="text-lg md:text-xl font-medium text-foreground mb-3 md:mb-4">{section.title}</h3>}
                {section.paragraphs && section.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="mb-3 md:mb-4 text-foreground text-sm md:text-base">{paragraph}</p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-5 mb-3 md:mb-4">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="mb-1 md:mb-2 text-foreground text-sm md:text-base">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image gallery modal - Make touch friendly */}
      {currentImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 md:p-4">
          <button 
            onClick={closeImageGallery} 
            className="absolute top-2 md:top-4 right-2 md:right-4 text-white hover:text-gray-300 z-10 p-2"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>
          
          <button 
            onClick={prevImage} 
            className="absolute left-2 md:left-4 text-white hover:text-gray-300 z-10 p-2"
            aria-label="Previous image"
          >
            <ArrowLeft size={24} />
          </button>
          
          <div className="max-w-4xl max-h-[80vh] relative">
            {/* Make image swipeable on touch devices */}
            <img 
              src={media.images[currentImageIndex].src} 
              alt={media.images[currentImageIndex].alt || `Project image ${currentImageIndex + 1}`} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            {media.images[currentImageIndex].caption && (
              <div className="text-white text-center mt-2 text-xs md:text-base px-10">
                {media.images[currentImageIndex].caption}
              </div>
            )}
          </div>
          
          <button 
            onClick={nextImage} 
            className="absolute right-2 md:right-4 text-white hover:text-gray-300 z-10 p-2"
            aria-label="Next image"
          >
            <ArrowRight size={24} />
          </button>
          
          <div className="absolute bottom-2 md:bottom-4 text-white text-center w-full text-sm md:text-base">
            {currentImageIndex + 1} / {media.images.length}
          </div>
        </div>
      )}
    </div>
  );
}