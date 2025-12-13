import { motion } from 'framer-motion';

const DiagonalLinesComponent = () => {
    return (
        <div className="relative w-full h-4 overflow-hidden">
            <motion.div
                className="absolute inset-0"
                style={{ backgroundSize: '10px 13px', backgroundImage: 'repeating-linear-gradient(-65deg, #000, #000 1px, transparent 1px, transparent 3px)' }}
            />
        </div>
    );
};

export default DiagonalLinesComponent;
