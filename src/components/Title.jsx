import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";
export default function Title({ title }) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title} || Coffee Crud</title>
            </Helmet>
        </HelmetProvider>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
};