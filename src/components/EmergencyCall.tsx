import ScrollVelocity from './ScrollVelocity';

const EmergencyCall = () => {
    return (
        <ScrollVelocity
            texts={['RESERVACIONES / BOOKINGS', '0424-8313091']}
            velocity={80}
            className="text-white font-montserrat"
        />
    );
};

export default EmergencyCall;
