import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const Container = memo(
  ({
    className = "",
    ondc7a5a6f7371png,
    buildForBharat,
    buildForBharatHref,
    openToAll,
    oNDC,
    offline,
    propPadding,
    propFlex,
    propMinWidth,
    propMinWidth1,
    propFlex1,
    propMinWidth2,
    propMinWidth3,
    propMinWidth4,
  }) => {
    const containerStyle = useMemo(() => {
      return {
        padding: propPadding,
      };
    }, [propPadding]);

    const container1Style = useMemo(() => {
      return {
        flex: propFlex,
        minWidth: propMinWidth,
      };
    }, [propFlex, propMinWidth]);

    const openToAllStyle = useMemo(() => {
      return {
        minWidth: propMinWidth1,
      };
    }, [propMinWidth1]);

    const container2Style = useMemo(() => {
      return {
        flex: propFlex1,
        minWidth: propMinWidth2,
      };
    }, [propFlex1, propMinWidth2]);

    const oNDCStyle = useMemo(() => {
      return {
        minWidth: propMinWidth3,
      };
    }, [propMinWidth3]);

    const offlineStyle = useMemo(() => {
      return {
        minWidth: propMinWidth4,
      };
    }, [propMinWidth4]);

    return (
      <div
        className={`self-stretch flex flex-row flex-wrap items-start justify-start py-[0.5rem] px-[0rem] box-border gap-[0.75rem] max-w-full text-left text-[1.125rem] text-wwwproelevatein-blue-charcoal font-inter ${className}`}
      >
        <div className="h-[2.5rem] w-[2.5rem] rounded-9980xl overflow-hidden shrink-0 flex flex-row items-start justify-center">
          <img
            className="h-[2.5rem] w-[2.5rem] relative overflow-hidden shrink-0 object-cover max-w-[2.5rem]"
            loading="lazy"
            alt=""
            src={ondc7a5a6f7371png}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem] min-w-[30.125rem] max-w-full mq825:min-w-full">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
            <a
              className="self-stretch relative leading-[1.75rem] capitalize font-bold text-[inherit] [text-decoration:none]"
              href={buildForBharatHref}
              target="_blank"
            >
              {buildForBharat}
            </a>
          </div>
          <div
            className="self-stretch flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[29.5rem] pl-[0rem] gap-[0rem_0.75rem] text-[0.875rem] text-wwwproelevatein-ebony mq450:pr-[1.25rem] mq450:box-border mq825:pr-[14.75rem] mq825:box-border"
            style={containerStyle}
          >
            <div
              className="flex flex-row items-center justify-start gap-[0.5rem]"
              style={container1Style}
            >
              <img
                className="h-[1.25rem] w-[1.25rem] relative min-h-[1.25rem]"
                alt=""
                src="/svg-9.svg"
              />
              <div className="flex flex-col items-start justify-start">
                <div
                  className="relative leading-[1.25rem] capitalize inline-block min-w-[4.75rem]"
                  style={openToAllStyle}
                >
                  {openToAll}
                </div>
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-start gap-[0.5rem]"
              style={container2Style}
            >
              <img
                className="h-[1.25rem] w-[1.25rem] relative min-h-[1.25rem]"
                alt=""
                src="/svg-10.svg"
              />
              <div className="flex flex-col items-start justify-start">
                <div
                  className="relative leading-[1.25rem] capitalize inline-block min-w-[2.625rem]"
                  style={oNDCStyle}
                >
                  {oNDC}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              <img
                className="h-[1.25rem] w-[1.25rem] relative min-h-[1.25rem]"
                alt=""
                src="/svg-11.svg"
              />
              <div className="flex flex-col items-start justify-start">
                <div
                  className="relative leading-[1.25rem] capitalize inline-block min-w-[2.75rem]"
                  style={offlineStyle}
                >
                  {offline}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Container.propTypes = {
  className: PropTypes.string,
  ondc7a5a6f7371png: PropTypes.string,
  buildForBharat: PropTypes.string,
  buildForBharatHref: PropTypes.string.isRequired,
  openToAll: PropTypes.string,
  oNDC: PropTypes.string,
  offline: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propMinWidth4: PropTypes.any,
};

export default Container;
