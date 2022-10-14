interface setCarouselSettingDef {
  (): {
    dots: boolean;
    autoplay: boolean;
    arrows: boolean;
    infinite: boolean;
    centerMode: boolean;
    centerPadding: string;
    slidesToShow: number;
    slidesToScroll: number;
  };
}

export const setCarouselSetting: setCarouselSettingDef = () => {
  return {
    dots: false,
    autoplay: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
};