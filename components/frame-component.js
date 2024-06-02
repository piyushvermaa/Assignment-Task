import { memo, useCallback } from "react";
import PropTypes from "prop-types";

const FrameComponent = memo(({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.proelevate.in/");
  }, []);

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center max-w-full text-center text-[0.875rem] text-wwwproelevatein-pale-sky font-inter ${className}`}
    >
      <div className="w-[78.125rem] flex flex-row items-start justify-start py-[0.937rem] px-[3.75rem] box-border gap-[2.25rem] max-w-[78.125rem] mq825:gap-[1.125rem] mq1275:pl-[1.875rem] mq1275:pr-[1.875rem] mq1275:box-border mq1275:max-w-full">
        <div className="flex flex-col items-start justify-start pt-[0.437rem] pb-[0rem] pr-[1.187rem] pl-[0rem]">
          <div
            className="flex flex-row items-start justify-start cursor-pointer"
            onClick={onLinkContainerClick}
          >
            <img
              className="h-[2.25rem] w-[12rem] relative overflow-hidden shrink-0 object-cover max-w-[12rem]"
              loading="lazy"
              alt=""
              src="/logosvg@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem] max-w-full mq1275:hidden">
            <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
              <a className="[text-decoration:none] relative leading-[1.25rem] font-medium text-[inherit] inline-block min-w-[2.5rem]">
                Home
              </a>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start py-[0rem] pr-[0.937rem] pl-[0rem] box-border gap-[0.243rem] max-w-full mq450:hidden">
              <div className="rounded-md bg-wwwproelevatein-nero flex flex-row items-end justify-start py-[0.625rem] px-[1rem] gap-[0.218rem]">
                <a className="[text-decoration:none] relative leading-[1.25rem] font-medium text-[inherit] inline-block min-w-[5.5rem] whitespace-nowrap">
                  DSA Practice
                </a>
                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.187rem]">
                  <img
                    className="w-[0.75rem] h-[0.75rem] relative"
                    alt=""
                    src="/dsa-practice-icon.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-[0rem] pr-[1rem] pl-[0rem]">
                <div className="rounded-md bg-wwwproelevatein-nero flex flex-row items-end justify-start py-[0.625rem] pr-[0.937rem] pl-[1rem] gap-[0.218rem]">
                  <a className="[text-decoration:none] relative leading-[1.25rem] font-medium text-[inherit] inline-block min-w-[2.063rem]">
                    Jobs
                  </a>
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.187rem]">
                    <img
                      className="w-[0.75rem] h-[0.75rem] relative"
                      alt=""
                      src="/dsa-practice-icon.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] text-wwwproelevatein-flamingo">
                <a className="[text-decoration:none] relative leading-[1.25rem] font-medium text-[inherit] inline-block min-w-[5.625rem]">
                  Events
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
              <a className="[text-decoration:none] relative leading-[1.25rem] font-medium text-[inherit] inline-block min-w-[4.375rem]">
                Interviews
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.937rem] pb-[0rem] pr-[1.187rem] pl-[0rem]">
          <a className="[text-decoration:none] relative leading-[1.25rem] font-medium text-[inherit] inline-block min-w-[4.438rem]">
            Resources
          </a>
        </div>
        <div className="flex flex-row items-center justify-center text-[1rem] text-wwwproelevatein-nero">
          <div className="flex flex-row items-start justify-start gap-[0.5rem]">
            <div className="rounded-181xl bg-wwwproelevatein-flamingo flex flex-col items-start justify-start py-[0.75rem] px-[1.5rem]">
              <div className="flex flex-row items-center justify-center">
                <a className="[text-decoration:none] relative leading-[1.5rem] text-[inherit] inline-block min-w-[2.875rem] whitespace-nowrap">
                  Log in
                </a>
              </div>
            </div>
            <div className="rounded-181xl bg-wwwproelevatein-athens-gray1 flex flex-col items-start justify-start py-[0.687rem] px-[1.5rem] text-wwwproelevatein-black border-[1px] border-solid border-wwwproelevatein-mischka">
              <div className="flex flex-row items-center justify-center">
                <a className="[text-decoration:none] relative leading-[1.5rem] text-[inherit] inline-block min-w-[4.375rem] whitespace-nowrap">
                  Join Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
