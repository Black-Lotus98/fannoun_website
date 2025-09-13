import { useMemo } from 'react';
import { Settings } from 'react-slick';

interface UseSliderConfigProps {
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  infinite?: boolean;
  dots?: boolean;
  arrows?: boolean;
  pauseOnHover?: boolean;
  centerMode?: boolean;
  variableWidth?: boolean;
  adaptiveHeight?: boolean;
  responsive?: Array<{
    breakpoint: number;
    settings: Settings;
  }>;
}

export function useSliderConfig({
  slidesToShow = 3,
  slidesToScroll = 1,
  autoplay = true,
  autoplaySpeed = 3000,
  infinite = true,
  dots = true,
  arrows = true,
  pauseOnHover = true,
  centerMode = false,
  variableWidth = false,
  adaptiveHeight = true,
  responsive = []
}: UseSliderConfigProps = {}) {
  const config = useMemo(() => ({
    slidesToShow,
    slidesToScroll,
    autoplay,
    autoplaySpeed,
    infinite,
    dots,
    arrows,
    pauseOnHover,
    centerMode,
    variableWidth,
    adaptiveHeight,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      ...responsive
    ]
  }), [slidesToShow, slidesToScroll, autoplay, autoplaySpeed, infinite, dots, arrows, pauseOnHover, centerMode, variableWidth, adaptiveHeight, responsive]);

  return config;
}
