import React from 'react';
import PropTypes from 'prop-types';
import TimelineItem from './TimelineItem';

const Timelines = ({ timelines }) => {
    return timelines.map(timeline => <TimelineItem timeline={timeline} key={timeline.id} /> )
}

Timelines.propTypes = {
    timelines: PropTypes.array.isRequired
};

export default Timelines;