import { memo, useCallback } from "react";
import PropTypes from "prop-types";

const Background = memo(({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.instagram.com/arshgoyalyt");
  }, []);

  const onLinkContainer1Click = useCallback(() => {
    window.open("https://www.youtube.com/@ArshGoyal");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("https://twitter.com/arsh_goyal");
  }, []);

  return (
    <footer
      className={`self-stretch bg-wwwproelevatein-flamingo flex flex-col items-center justify-start py-[0rem] px-[5rem] box-border max-w-full text-left text-[1rem] text-wwwproelevatein-nero font-inter mq1275:pl-[2.5rem] mq1275:pr-[2.5rem] mq1275:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start py-[3.5rem] px-[0rem] box-border max-w-full mq450:pt-[2.25rem] mq450:pb-[2.25rem] mq450:box-border">
        <div className="flex-1 box-border flex flex-row flex-wrap items-start justify-center pt-[0rem] px-[21.812rem] pb-[1.187rem] gap-[0rem_1.375rem] max-w-full border-b-[1px] border-solid border-wwwproelevatein-jaffa mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq825:pl-[5.438rem] mq825:pr-[5.438rem] mq825:box-border mq1275:pl-[10.875rem] mq1275:pr-[10.875rem] mq1275:box-border">
          <div className="flex-1 flex flex-col items-start justify-center py-[0rem] pr-[4.437rem] pl-[0rem] box-border gap-[0.75rem] min-w-[20.938rem] max-w-full mq825:pr-[2.188rem] mq825:box-border">
            <img
              className="w-full h-[2.5rem] relative max-w-[33rem] overflow-hidden shrink-0 object-contain mq825:max-w-full"
              loading="lazy"
              alt=""
              src="/footerlogosvg@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[0.687rem] pl-[0rem]">
              <p className="m-0 relative leading-[1.5rem]">
                <span className="block">
                  Join Our Community: Connect with like-minded individuals and
                  grow
                </span>
                <span className="block">your network.</span>
              </p>
            </div>
          </div>
          <div className="w-[27.25rem] flex flex-row flex-wrap items-start justify-between py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[-0.125rem] max-w-full">
            <div className="w-[6.938rem] flex flex-col items-start justify-center pt-[0rem] px-[0rem] pb-[1.75rem] box-border">
              <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[6rem] box-border gap-[0.75rem] min-w-[6.977rem]">
                <div className="flex flex-col items-start justify-start py-[0rem] pr-[1rem] pl-[0rem]">
                  <b className="relative leading-[1.5rem] font-semibold inline-block min-w-[5.938rem]">
                    ProElevate's
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] text-[0.875rem]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <a
                        className="self-stretch relative leading-[1.5rem] text-[inherit] [text-decoration:none]"
                        href="https://www.proelevate.in/privacy-policy"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <a
                        className="relative tracking-[-0.01px] leading-[1.5rem] text-[inherit] inline-block [text-decoration:none] min-w-[6.975rem] whitespace-nowrap"
                        href="https://www.proelevate.in/terms-of-service"
                        target="_blank"
                      >
                        Terms of Service
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[5.938rem] flex flex-col items-start justify-center pt-[0rem] px-[0rem] pb-[1.75rem] box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="flex flex-col items-start justify-start">
                  <b className="relative leading-[1.5rem] font-semibold inline-block min-w-[5.938rem]">
                    Useful Links
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] text-[0.875rem]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                    <div className="flex flex-col items-start justify-start">
                      <a
                        className="relative leading-[1.5rem] text-[inherit] inline-block [text-decoration:none] min-w-[5.938rem]"
                        href="https://www.proelevate.in/dsa-practice"
                        target="_blank"
                      >
                        DSA Practice
                      </a>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <a
                        className="self-stretch relative leading-[1.5rem] text-[inherit] [text-decoration:none]"
                        href="https://www.proelevate.in/interviews"
                        target="_blank"
                      >
                        Interviews
                      </a>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <a
                        className="self-stretch relative leading-[1.5rem] text-[inherit] [text-decoration:none]"
                        href="https://www.proelevate.in/jobs"
                        target="_blank"
                      >
                        Jobs
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.5rem] inline-block min-w-[5.938rem]">
                        Competitions
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <a
                        className="self-stretch relative leading-[1.5rem] text-[inherit] [text-decoration:none]"
                        href="https://www.proelevate.in/resources"
                        target="_blank"
                      >
                        Resources
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[13.125rem] flex flex-col items-start justify-start pt-[0rem] pb-[1.281rem] pr-[0rem] pl-[1.25rem] box-border gap-[2rem] min-w-[13.063rem] text-wwwproelevatein-athens-gray1">
              <div className="flex flex-col items-start justify-center py-[0rem] pr-[2.875rem] pl-[0rem] gap-[0.75rem]">
                <div className="flex flex-col items-start justify-start">
                  <b className="relative leading-[1.5rem] inline-block min-w-[6.063rem]">
                    Follow us on
                  </b>
                </div>
                <div className="flex flex-row items-start justify-center gap-[0.75rem]">
                  <div
                    className="w-[2.5rem] rounded-xl box-border flex flex-col items-start justify-start py-[0.437rem] px-[0.5rem] cursor-pointer border-[1px] border-solid border-wwwproelevatein-athens-gray"
                    onClick={onLinkContainerClick}
                  >
                    <img
                      className="w-[1.375rem] h-[1.375rem] relative"
                      alt=""
                      src="/svg-52.svg"
                    />
                  </div>
                  <div
                    className="w-[2.5rem] rounded-xl box-border flex flex-col items-start justify-start py-[0.437rem] px-[0.5rem] cursor-pointer border-[1px] border-solid border-wwwproelevatein-athens-gray"
                    onClick={onLinkContainer1Click}
                  >
                    <img
                      className="w-[1.375rem] h-[1.375rem] relative"
                      alt=""
                      src="/svg-53.svg"
                    />
                  </div>
                  <div
                    className="w-[2.5rem] rounded-xl box-border flex flex-col items-start justify-start py-[0.437rem] px-[0.5rem] cursor-pointer border-[1px] border-solid border-wwwproelevatein-athens-gray"
                    onClick={onLinkContainer2Click}
                  >
                    <img
                      className="w-[1.375rem] h-[1.375rem] relative"
                      alt=""
                      src="/svg-54.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-[0.875rem] text-wwwproelevatein-nero">
                <div className="self-stretch flex flex-col items-start justify-start text-[1rem]">
                  <b className="self-stretch relative leading-[1.5rem] font-semibold">
                    Contact Us
                  </b>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="h-[1.25rem] w-[1.25rem] relative"
                    alt=""
                    src="/svg-55.svg"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <a
                      className="relative leading-[1.5rem] text-[inherit] [text-decoration:none] whitespace-nowrap"
                      href="mailto:arshgoyal98@gmail.com"
                      target="_blank"
                    >
                      arshgoyal98@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start pt-[0.468rem] px-[0rem] pb-[0rem] gap-[0.5rem] text-center">
                  <img
                    className="h-[1.25rem] w-[1.25rem] relative"
                    alt=""
                    src="/svg-56.svg"
                  />
                  <div className="relative leading-[1.5rem] inline-block min-w-[4.063rem]">
                    Feedback
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-[0rem] px-[0rem] pb-[2rem] box-border max-w-full text-center text-[0.875rem]">
        <div className="flex flex-col items-center justify-start max-w-full">
          <div className="relative leading-[1.25rem] font-semibold">
            Copyright © 2024 ProElevate - All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
});

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
