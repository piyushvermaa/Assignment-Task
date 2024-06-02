import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const Container = memo(
  ({
    className = "",
    status1,
    live,
    expired,
    propMinWidth,
    propPadding,
    propMinWidth1,
    propMinWidth2,
  }) => {
    const statusStyle = useMemo(() => {
      return {
        minWidth: propMinWidth,
      };
    }, [propMinWidth]);

    const regionStyle = useMemo(() => {
      return {
        padding: propPadding,
      };
    }, [propPadding]);

    const liveStyle = useMemo(() => {
      return {
        minWidth: propMinWidth1,
      };
    }, [propMinWidth1]);

    const expiredStyle = useMemo(() => {
      return {
        minWidth: propMinWidth2,
      };
    }, [propMinWidth2]);

    return (
      <div
        className={`self-stretch flex flex-col items-center justify-center text-center text-[1rem] text-wwwproelevatein-blue-charcoal font-inter ${className}`}
      >
        <div className="self-stretch rounded-2xl flex flex-col items-start justify-start border-[1px] border-solid border-wwwproelevatein-athens-gray2">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch rounded-t-2xl rounded-b-none bg-wwwproelevatein-athens-gray flex flex-row items-center justify-between p-[1rem] gap-[1.25rem]">
              <div
                className="relative leading-[1.5rem] font-medium inline-block min-w-[3.125rem]"
                style={statusStyle}
              >
                {status1}
              </div>
              <img
                className="h-[1rem] w-[1rem] relative object-contain"
                alt=""
                src="/svg-3.svg"
              />
            </div>
            <div
              className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center py-[1rem] pr-[13.312rem] pl-[1rem] gap-[0rem_0.75rem] text-[0.875rem] text-wwwproelevatein-ebony mq450:pr-[1.25rem] mq450:box-border"
              style={regionStyle}
            >
              <div className="rounded-181xl bg-wwwproelevatein-athens-gray flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div
                  className="relative leading-[1.25rem] inline-block min-w-[1.688rem]"
                  style={liveStyle}
                >
                  {live}
                </div>
              </div>
              <div className="rounded-181xl bg-wwwproelevatein-athens-gray flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                <div
                  className="relative leading-[1.25rem] inline-block min-w-[3.125rem]"
                  style={expiredStyle}
                >
                  {expired}
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
  status1: PropTypes.string,
  live: PropTypes.string,
  expired: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Container;
