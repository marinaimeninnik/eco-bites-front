import PropTypes from 'prop-types';
import { ecoBitesUi } from '../../../../theme';

const ListIcon = ({ fill }) => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.75 14.25V12.75H5.25V14.25H15.75ZM15.75 9.75V8.25H5.25V9.75H15.75ZM5.25 5.25H15.75V3.75H5.25V5.25ZM2.25 3.75V5.25H3.75V3.75H2.25ZM1.5 3.75C1.5 3.33579 1.83579 3 2.25 3H3.75C4.16421 3 4.5 3.33579 4.5 3.75V5.25C4.5 5.66421 4.16421 6 3.75 6H2.25C1.83579 6 1.5 5.66421 1.5 5.25V3.75ZM2.25 8.25V9.75H3.75V8.25H2.25ZM1.5 8.25C1.5 7.83579 1.83579 7.5 2.25 7.5H3.75C4.16421 7.5 4.5 7.83579 4.5 8.25V9.75C4.5 10.1642 4.16421 10.5 3.75 10.5H2.25C1.83579 10.5 1.5 10.1642 1.5 9.75V8.25ZM2.25 12.75V14.25H3.75V12.75H2.25ZM1.5 12.75C1.5 12.3358 1.83579 12 2.25 12H3.75C4.16421 12 4.5 12.3358 4.5 12.75V14.25C4.5 14.6642 4.16421 15 3.75 15H2.25C1.83579 15 1.5 14.6642 1.5 14.25V12.75Z"
                fill={fill}
            />
        </svg>
    );
};

ListIcon.defaultProps = {
    fill: ecoBitesUi.palette.grey.secondary,
};

ListIcon.propTypes = {
    fill: PropTypes.oneOf([
        ecoBitesUi.palette.grey.secondary,
        ecoBitesUi.palette.green.primary,
    ]),
};

export default ListIcon;
