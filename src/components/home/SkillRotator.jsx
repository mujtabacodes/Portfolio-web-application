import React, { useEffect, useState } from 'react';

const SkillRotator = ({ skills }) => {
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const colors = ['orange', '#00ff00', '#6699ff', '#339966']; // Add more colors as needed

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 2000); // Change skill every 2 seconds

        return () => clearInterval(interval);
    }, [skills]);

    return (
        <span
            className="stack-item"
            style={{ color: colors[currentSkillIndex], margin: 5, fontWeight: 900 }} // Apply color based on index
        >
            {skills[currentSkillIndex]}
        </span>
    );
};

export default SkillRotator;
