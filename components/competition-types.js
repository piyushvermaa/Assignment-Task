import { memo, useCallback } from "react";
import PropTypes from "prop-types";

const CompetitionTypes = memo(({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.proelevate.in/competitions");
  }, []);

  const onLinkContainer1Click = useCallback(() => {
    window.open("https://www.proelevate.in/competitions");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("https://www.proelevate.in/competitions");
  }, []);

  const onLinkContainer3Click = useCallback(() => {
    window.open("https://www.proelevate.in/competitions");
  }, []);

  return (
    <div></div>
  );
});

CompetitionTypes.propTypes = {
  className: PropTypes.string,
};

export default CompetitionTypes;
