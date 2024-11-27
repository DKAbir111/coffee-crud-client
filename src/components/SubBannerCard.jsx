import PropTypes from 'prop-types';

export default function SubBannerCard({ image, content, title }) {
    return (
        <div className="p-3 md:p-7 flex flex-col gap-3">
            <div>
                <img src={image} alt="" />
            </div>
            <h2 className="font-rancho text-3xl">{title}</h2>
            <p className="font-raleway">{content}</p>
        </div>
    );
}


SubBannerCard.propTypes = {
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
